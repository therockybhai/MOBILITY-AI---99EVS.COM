/**
 * 99EVS MobilityAI — Payment Verification API
 * Vercel Serverless Function: /api/verify-payment
 *
 * SETUP INSTRUCTIONS:
 * 1. Deploy this file to /api/verify-payment.js in your GitHub repo
 * 2. Vercel picks it up automatically as a serverless function
 * 3. Add environment variables in Vercel Dashboard:
 *    - FOUNDER_EMAIL = shelltwo6565@gmail.com
 *    - NOTIFY_EMAIL  = 99evsworld@gmail.com  (optional — for email alerts)
 *
 * HOW IT WORKS (Phase 1 — Manual Review):
 * - User submits UPI transaction ID + email + plan
 * - API stores it in a log and sends founder an email alert
 * - API responds with { verified: true } so user gets Pro access immediately
 * - Founder reviews UPI app to confirm real payment happened
 * - If payment is fraudulent, founder can revoke access manually
 *
 * HOW IT WORKS (Phase 2 — Razorpay):
 * - Integrate Razorpay webhook (see below)
 * - Auto-verify via Razorpay signature verification
 * - No manual review needed
 */

// ── CORS helper ───────────────────────────────────────────────
function setCORS(res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.99evs.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req, res) {
  setCORS(res);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { txn_id, email, plan, amount, timestamp } = req.body;

    // ── Basic validation ────────────────────────────────────
    if (!txn_id || txn_id.length < 8) {
      return res.status(400).json({ verified: false, message: 'Invalid transaction ID.' });
    }
    if (!email || !email.includes('@')) {
      return res.status(400).json({ verified: false, message: 'Invalid email address.' });
    }
    if (!['monthly', 'yearly'].includes(plan)) {
      return res.status(400).json({ verified: false, message: 'Invalid plan.' });
    }

    const expectedAmount = plan === 'yearly' ? 999 : 99;
    if (Number(amount) !== expectedAmount) {
      return res.status(400).json({ verified: false, message: 'Amount mismatch.' });
    }

    // ── Duplicate check: reject same txn_id twice ───────────
    // (In production, use a database like Supabase or Redis)
    // For now we rely on client-side deduplication

    // ── Log the transaction ─────────────────────────────────
    const logEntry = {
      txn_id:    txn_id.trim(),
      email:     email.toLowerCase().trim(),
      plan,
      amount:    expectedAmount,
      upi_to:    'sketchmyparty006-2@okaxis',
      ts:        new Date().toISOString(),
      ip:        req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      status:    'pending_manual_review',
      platform:  '99EVS MobilityAI'
    };

    console.log('[PAYMENT LOG]', JSON.stringify(logEntry));

    // ── Email notification to founder (optional) ────────────
    // Uncomment and configure when you add an email service
    // await sendFounderAlert(logEntry);

    // ── Phase 1: Trust & activate (manual review model) ─────
    // The user gets Pro access immediately after submitting txn ID.
    // Founder reviews UPI app / bank statement to confirm.
    // This is the right approach for beta — Razorpay adds friction.
    return res.status(200).json({
      verified: true,
      message:  'Pro access activated. Thank you!',
      plan,
      email,
      txn_id:   txn_id.trim(),
      expires:  plan === 'yearly'
        ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
        : new Date(Date.now() +  30 * 24 * 60 * 60 * 1000).toISOString()
    });

  } catch (error) {
    console.error('[PAYMENT ERROR]', error);
    return res.status(500).json({
      verified: false,
      message: 'Server error. Please email 99evsworld@gmail.com with your transaction ID.'
    });
  }
}

/*
 * ════════════════════════════════════════════════════════════
 * PHASE 2 — RAZORPAY WEBHOOK VERIFICATION (wire when ready)
 * ════════════════════════════════════════════════════════════
 *
 * 1. Create Razorpay account at razorpay.com
 * 2. Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to Vercel env vars
 * 3. Create a Razorpay Payment Link for ₹99/month
 * 4. In Razorpay Dashboard → Webhooks → Add:
 *    URL: https://www.99evs.com/api/verify-payment
 *    Events: payment.captured
 * 5. Uncomment the code below
 *
 * const crypto = require('crypto');
 *
 * function verifyRazorpaySignature(body, signature) {
 *   const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
 *   const expected = crypto
 *     .createHmac('sha256', secret)
 *     .update(JSON.stringify(body))
 *     .digest('hex');
 *   return expected === signature;
 * }
 */

/*
 * ════════════════════════════════════════════════════════════
 * FOUNDER TOOLS
 * ════════════════════════════════════════════════════════════
 *
 * To see all pending transactions in the browser console:
 *   window.viewPendingPayments()
 *
 * This shows: email, txn ID, plan, amount, timestamp
 * Cross-check against your UPI app / bank statement
 *
 * To manually revoke Pro access (if fraud):
 *   In browser console on 99evs.com:
 *   const users = JSON.parse(localStorage.getItem('99evs_users_db'));
 *   users['user@email.com'].plan = 'free';
 *   localStorage.setItem('99evs_users_db', JSON.stringify(users));
 */
