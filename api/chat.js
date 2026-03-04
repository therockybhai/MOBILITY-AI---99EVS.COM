// api/chat.js — 99EVS MobilityAI Engine
// Correct model: claude-haiku-4-5-20251001

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, systemPrompt } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid messages' });
  }

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

  if (!ANTHROPIC_API_KEY) {
    return res.status(200).json({
      reply: '**Setup Required**\n\nAdd ANTHROPIC_API_KEY to Vercel environment variables to activate MobilityAI.'
    });
  }

  // Clean and validate messages
  const cleanMessages = messages
    .slice(-20)
    .filter(m => m.content && String(m.content).trim().length > 0)
    .map(m => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: String(m.content).slice(0, 4000)
    }));

  if (!cleanMessages.length || cleanMessages[0].role !== 'user') {
    return res.status(400).json({ error: 'First message must be from user' });
  }

  // Ensure alternating roles
  const validMessages = [];
  let lastRole = null;
  for (const msg of cleanMessages) {
    if (msg.role !== lastRole) {
      validMessages.push(msg);
      lastRole = msg.role;
    }
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1500,
        system: systemPrompt || 'You are MobilityAI, the intelligence engine of 99EVS.com. Provide engineering-grade mobility intelligence.',
        messages: validMessages
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error('Anthropic error:', response.status, err);
      if (response.status === 401) return res.status(200).json({ reply: 'API key error. Check ANTHROPIC_API_KEY in Vercel.' });
      if (response.status === 429) return res.status(200).json({ reply: 'MobilityAI is busy. Please try again in 30 seconds.' });
      return res.status(200).json({ reply: 'MobilityAI is temporarily unavailable. Please try again.' });
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text?.trim();
    if (!reply) return res.status(200).json({ reply: 'No response generated. Please rephrase and try again.' });

    return res.status(200).json({ reply });

  } catch (error) {
    console.error('Chat error:', error.message);
    return res.status(200).json({ reply: 'Connection error. Please check your internet and try again.' });
  }
}
