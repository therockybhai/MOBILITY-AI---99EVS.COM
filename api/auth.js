// api/auth.js — Runs on Vercel SERVER only. Browser never sees your password.

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Read credentials from request body (sent by login form)
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  // Sanitize inputs
  const cleanEmail = String(email).trim().toLowerCase().slice(0, 200);
  const cleanPassword = String(password).slice(0, 200);

  // Read founder credentials from Vercel environment variables
  // These are NEVER sent to the browser — server-side only
  const FOUNDER_EMAIL = process.env.FOUNDER_EMAIL;
  const FOUNDER_PASSWORD = process.env.FOUNDER_PASSWORD;
  const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_change_this';

  // Simple in-memory user store (Phase 1 — replace with database in Phase 2)
  // For now, we only have founder login via server. Regular users are handled client-side.
  // Founder check
  if (cleanEmail === FOUNDER_EMAIL && cleanPassword === FOUNDER_PASSWORD) {
    // Create a simple session token
    const token = createToken({ name: 'Kiran SR', email: cleanEmail, role: 'founder' }, JWT_SECRET);
    return res.status(200).json({
      success: true,
      role: 'founder',
      name: 'Kiran SR',
      token
    });
  }

  // Wrong credentials
  // Add small delay to prevent brute force timing attacks
  await sleep(500);
  return res.status(401).json({ error: 'Invalid email or password' });
}

// Simple JWT-like token creator (no external library needed)
function createToken(payload, secret) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const body = Buffer.from(JSON.stringify({ ...payload, exp: Date.now() + 3600000 })).toString('base64url'); // 1hr
  const signature = simpleHash(header + '.' + body + secret);
  return header + '.' + body + '.' + signature;
}

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
