export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, systemPrompt } = req.body;
  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

  // ── STEP 1: Check API key exists ──
  if (!ANTHROPIC_API_KEY) {
    return res.status(200).json({
      reply: '**Diagnosis: ANTHROPIC_API_KEY is missing.**\n\nFix: Go to Vercel → Settings → Environment Variables → confirm ANTHROPIC_API_KEY exists → Redeploy.\n\nIf it exists already, try deleting it and re-adding it, then redeploy.'
    });
  }

  // ── STEP 2: Validate messages ──
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(200).json({ reply: 'No message was received by the server. Please refresh and try again.' });
  }

  const clean = messages
    .filter(m => m && m.content && String(m.content).trim().length > 0)
    .slice(-20)
    .map(m => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: String(m.content).slice(0, 4000).trim()
    }));

  if (!clean.length) {
    return res.status(200).json({ reply: 'Message was empty after processing. Please type your question and try again.' });
  }

  // Fix alternating roles (Anthropic requirement)
  const valid = [];
  let last = null;
  for (const m of clean) {
    if (m.role !== last) { valid.push(m); last = m.role; }
  }

  if (valid[0].role !== 'user') {
    return res.status(200).json({ reply: 'Conversation must start with your message. Please refresh and try again.' });
  }

  // ── STEP 3: Call Anthropic ──
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
        system: systemPrompt || `You are MobilityAI — the intelligence engine of 99EVS.com, founded by Kiran SR.
You are a world-class mobility intelligence expert: EV engineer, fleet strategist, BMS analyst, and vehicle safety advisor combined.

ALWAYS structure every response exactly like this:

## Overview
What the issue or topic is — in plain language.

## Technical Explanation
The engineering science behind it. Specific, accurate, no guessing.

## Practical Application
Numbered steps of exactly what to do.

## Risk Factors
Safety warnings and what could go wrong if ignored.

## Optimization Strategy
How to get the best long-term outcome.

**Next step:** One specific, actionable recommendation to take right now.

Rules:
- Never hallucinate. If unsure, say so clearly.
- Safety always overrides cost or convenience.
- Educate the user — they should understand WHY, not just what to do.
- No emojis. No padding. Engineering-grade precision only.`,
        messages: valid
      })
    });

    // ── STEP 4: Handle Anthropic errors with clear explanations ──
    if (!apiResponse.ok) {
      const errText = await apiResponse.text();
      console.error(`[99EVS] Anthropic error ${apiResponse.status}:`, errText);

      if (apiResponse.status === 401) {
        return res.status(200).json({
          reply: '**Diagnosis: API Key Rejected (401)**\n\nYour ANTHROPIC_API_KEY is invalid or has been revoked.\n\n**Fix these steps:**\n1. Go to console.anthropic.com\n2. Click API Keys\n3. Create a new key\n4. Copy it exactly\n5. Go to Vercel → Settings → Environment Variables\n6. Delete the old ANTHROPIC_API_KEY\n7. Add new one with exact same name\n8. Click Deployments → Redeploy\n\n**Next step:** Get a new API key from console.anthropic.com'
        });
      }

      if (apiResponse.status === 429) {
        return res.status(200).json({
          reply: '**Diagnosis: Rate Limit Reached (429)**\n\nToo many requests have been sent to the AI in a short time.\n\n**Fix:** Wait 60 seconds and try again. If this happens repeatedly, your Anthropic account may need a higher usage tier.\n\n**Next step:** Wait 60 seconds and retry your question.'
        });
      }

      if (apiResponse.status === 400) {
        return res.status(200).json({
          reply: '**Diagnosis: Bad Request (400)**\n\nThe message format was rejected by Anthropic. This usually means a conversation format issue.\n\n**Fix:** Refresh the page (F5) to reset the conversation, then try again with a fresh question.\n\n**Next step:** Refresh the page and start a new question.'
        });
      }

      if (apiResponse.status === 529 || apiResponse.status === 503) {
        return res.status(200).json({
          reply: '**Diagnosis: Anthropic Servers Overloaded (529/503)**\n\nAnthropic\'s AI servers are temporarily under high load. This is not a problem with your account or API key.\n\n**Fix:** This resolves itself automatically within 1-5 minutes.\n\n**Next step:** Wait 2 minutes and try again.'
        });
      }

      return res.status(200).json({
        reply: `**Diagnosis: Unexpected API Error (${apiResponse.status})**\n\nAnthropic returned an unexpected error code.\n\n**What to do:**\n1. Wait 2 minutes\n2. Try your question again\n3. If it keeps failing, check Vercel → your project → Logs tab for the exact error\n4. Contact 99evsworld@gmail.com with the error code if needed\n\n**Next step:** Check Vercel Logs tab for the full error details.`
      });
    }

    // ── STEP 5: Parse response ──
    const data = await apiResponse.json();
    const reply = data?.content?.[0]?.text?.trim();

    if (!reply) {
      return res.status(200).json({
        reply: '**Diagnosis: Empty AI Response**\n\nAnthropic processed your request but returned no text. This is rare.\n\n**Fix:** Rephrase your question with more detail and try again.\n\n**Next step:** Try asking your question again with more specific details about your vehicle.'
      });
    }

    return res.status(200).json({ reply });

  } catch (networkError) {
    console.error('[99EVS] Network error:', networkError.message);
    return res.status(200).json({
      reply: `**Diagnosis: Network Error**\n\nVercel's server could not connect to Anthropic's API.\n\nError detail: ${networkError.message}\n\n**What to do:**\n1. Check that your Vercel project is deployed (not paused)\n2. Check Vercel → Logs for more detail\n3. Try again in 30 seconds\n\n**Next step:** Check the Vercel deployment Logs tab to see the full network error.`
    });
  }
}
