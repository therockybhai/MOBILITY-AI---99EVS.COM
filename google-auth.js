// api/google-auth.js — Verifies Google login tokens on the server

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { credential } = req.body; // Google ID token from browser

  if (!credential) {
    return res.status(400).json({ error: 'No credential provided' });
  }

  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const FOUNDER_EMAIL = process.env.FOUNDER_EMAIL;

  if (!GOOGLE_CLIENT_ID) {
    return res.status(500).json({ error: 'Google login not configured' });
  }

  try {
    // Verify the Google token by calling Google's tokeninfo endpoint
    const verifyResponse = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`
    );

    if (!verifyResponse.ok) {
      return res.status(401).json({ error: 'Invalid Google token' });
    }

    const tokenData = await verifyResponse.json();

    // Verify the token was issued for YOUR app
    if (tokenData.aud !== GOOGLE_CLIENT_ID) {
      return res.status(401).json({ error: 'Token client mismatch' });
    }

    // Verify token is not expired
    if (tokenData.exp && Date.now() / 1000 > parseInt(tokenData.exp)) {
      return res.status(401).json({ error: 'Token expired' });
    }

    // Token is valid — extract user info
    const userEmail = tokenData.email?.toLowerCase();
    const userName = tokenData.name || tokenData.email?.split('@')[0] || 'User';
    const userPicture = tokenData.picture || null;

    // Check if this is the founder logging in via Google
    const isFounder = userEmail === FOUNDER_EMAIL;

    return res.status(200).json({
      success: true,
      role: isFounder ? 'founder' : 'user',
      name: isFounder ? 'Kiran SR' : userName,
      email: userEmail,
      picture: userPicture
    });

  } catch (error) {
    console.error('Google auth error:', error);
    return res.status(500).json({ error: 'Verification failed' });
  }
}
