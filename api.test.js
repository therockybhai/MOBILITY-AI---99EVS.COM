import { describe, it, expect, vi, beforeEach } from 'vitest';
import authHandler from './api/auth.js';
import googleAuthHandler from './api/google-auth.js';
import verifyPaymentHandler from './api/verify-payment.js';

// Mocking Response and Request
const mockRes = () => {
  const res = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  res.setHeader = vi.fn().mockReturnValue(res);
  res.end = vi.fn().mockReturnValue(res);
  return res;
};

const mockReq = (method, body = {}, headers = {}) => ({
  method,
  body,
  headers,
  socket: { remoteAddress: '127.0.0.1' }
});

describe('api/auth.js', () => {
  beforeEach(() => {
    process.env.FOUNDER_EMAIL = 'founder@99evs.com';
    process.env.FOUNDER_PASSWORD = 'password123';
    process.env.JWT_SECRET = 'test_secret';
  });

  it('405 non-POST', async () => {
    const req = mockReq('GET');
    const res = mockRes();
    await authHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(405);
  });

  it('400 missing fields', async () => {
    const req = mockReq('POST', { email: 'test@test.com' });
    const res = mockRes();
    await authHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it('401 invalid creds', async () => {
    const req = mockReq('POST', { email: 'wrong@test.com', password: 'wrong' });
    const res = mockRes();
    await authHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
  });

  it('200 valid creds', async () => {
    const req = mockReq('POST', { email: 'founder@99evs.com', password: 'password123' });
    const res = mockRes();
    await authHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    const jsonResponse = res.json.mock.calls[0][0];
    expect(jsonResponse.success).toBe(true);
    expect(jsonResponse.token).toBeDefined();
    // Verify it's a 3-part token (header.payload.signature)
    expect(jsonResponse.token.split('.').length).toBe(3);
  });
});

describe('api/google-auth.js', () => {
  beforeEach(() => {
    process.env.GOOGLE_CLIENT_ID = 'test-client-id';
    process.env.FOUNDER_EMAIL = 'founder@99evs.com';
    vi.stubGlobal('fetch', vi.fn());
  });

  it('400 missing credential', async () => {
    const req = mockReq('POST', {});
    const res = mockRes();
    await googleAuthHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it('401 invalid token', async () => {
    fetch.mockResolvedValue({
      ok: false
    });
    const req = mockReq('POST', { credential: 'invalid-token' });
    const res = mockRes();
    await googleAuthHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
  });

  it('200 valid token', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        aud: 'test-client-id',
        email: 'user@test.com',
        name: 'Test User',
        exp: (Date.now() / 1000) + 3600
      })
    });
    const req = mockReq('POST', { credential: 'valid-token' });
    const res = mockRes();
    await googleAuthHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    const jsonResponse = res.json.mock.calls[0][0];
    expect(jsonResponse.success).toBe(true);
    expect(jsonResponse.role).toBe('user');
  });
});

describe('api/verify-payment.js', () => {
  it('400 invalid inputs', async () => {
    const req = mockReq('POST', { txn_id: 'short' });
    const res = mockRes();
    await verifyPaymentHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it('200 valid monthly/yearly', async () => {
    // Monthly
    let req = mockReq('POST', {
      txn_id: 'ABC12345678',
      email: 'user@test.com',
      plan: 'monthly',
      amount: 99
    });
    let res = mockRes();
    await verifyPaymentHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json.mock.calls[0][0].verified).toBe(true);

    // Yearly
    req = mockReq('POST', {
      txn_id: 'XYZ98765432',
      email: 'user@test.com',
      plan: 'yearly',
      amount: 999
    });
    res = mockRes();
    await verifyPaymentHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json.mock.calls[0][0].verified).toBe(true);
  });

  it('200 OPTIONS preflight', async () => {
    const req = mockReq('OPTIONS');
    const res = mockRes();
    await verifyPaymentHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
