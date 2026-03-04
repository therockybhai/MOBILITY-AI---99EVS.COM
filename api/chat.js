export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, systemPrompt } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(200).json({ reply: 'No message received. Please type your question and try again.' });
  }

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

  if (!ANTHROPIC_API_KEY) {
    return res.status(200).json({
      reply: '**Setup incomplete.** ANTHROPIC_API_KEY is missing from Vercel. Go to Vercel → Settings → Environment Variables → add it → Redeploy.'
    });
  }

  const clean = messages
    .filter(m => m && m.content && String(m.content).trim().length > 0)
    .slice(-20)
    .map(m => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: String(m.content).slice(0, 4000).trim()
    }));

  if (!clean.length) {
    return res.status(200).json({ reply: 'Your message was empty. Please type a question.' });
  }

  const valid = [];
  let last = null;
  for (const m of clean) {
    if (m.role !== last) { valid.push(m); last = m.role; }
  }

  if (valid[0].role !== 'user') {
    return res.status(200).json({ reply: 'Please send your question first.' });
  }

  try {
    const apiResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1500,
        system: systemPrompt || 'You are MobilityAI, the intelligence engine of 99EVS.com. Give engineering-grade vehicle intelligence.',
        messages: valid
      })
    });

    console.log('Anthropic status:', apiResponse.status);

    if (!apiResponse.ok) {
      const errText = await apiResponse.text();
      console.error('Anthropic error:', errText);
      if (apiResponse.status === 401) return res.status(200).json({ reply: '**API key rejected.** Your ANTHROPIC_API_KEY in Vercel is invalid. Go to console.anthropic.com, create a new key, update in Vercel env vars, then redeploy.' });
      if (apiResponse.status === 429) return res.status(200).json({ reply: '**High traffic.** Please wait 30 seconds and try again.' });
      if (apiResponse.status === 400) return res.status(200).json({ reply: '**Request error.** Please refresh the page and try again.' });
      return res.status(200).json({ reply: `**AI error (${apiResponse.status}).** Please try again. Contact 99evsworld@gmail.com if this continues.` });
    }

    const data = await apiResponse.json();
    const reply = data?.content?.[0]?.text?.trim();

    if (!reply) return res.status(200).json({ reply: 'Empty response from AI. Please rephrase your question and try again.' });

    return res.status(200).json({ reply });

  } catch (err) {
    console.error('Network error:', err.message);
    return res.status(200).json({ reply: '**Connection error.** Could not reach AI servers. Please try again in 30 seconds.' });
  }
}
