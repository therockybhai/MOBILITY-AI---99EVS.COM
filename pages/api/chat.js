export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, isKiai } = req.body;

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

  if (!ANTHROPIC_API_KEY) {
    return res.status(200).json({
      reply: 'ANTHROPIC_API_KEY is missing from Vercel environment variables. Go to Vercel → Settings → Environment Variables → add it → Redeploy.'
    });
  }

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(200).json({ reply: 'No message received. Please type your question and try again.' });
  }

  const clean = messages
    .filter(m => m && m.content && String(m.content).trim().length > 0)
    .slice(-20)
    .map(m => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: String(m.content).slice(0, 3000).trim()
    }));

  if (!clean.length) {
    return res.status(200).json({ reply: 'Message was empty. Please type your question and try again.' });
  }

  const valid = [];
  let lastRole = null;
  for (const m of clean) {
    if (m.role !== lastRole) { valid.push(m); lastRole = m.role; }
  }

  if (valid[0].role !== 'user') {
    return res.status(200).json({ reply: 'Please refresh the page and start with your question.' });
  }

  const MOBILITY_PROMPT = `You are MobilityAI, the official intelligence engine of 99EVS.com, created by Kiran SR.

Your mission: Make every vehicle owner, fleet manager, and mobility professional smarter about their vehicle. Safety first. Always educate — not just answer.

GREETING HANDLING — CRITICAL:
When a user sends a casual greeting like "hi", "hey", "hello", "good morning", "what's up", "who are you", or any non-technical opener, ALWAYS respond with this exact warm welcome format:

---
Welcome to MobilityAI — your personal vehicle intelligence, powered by 99EVS.com.

I was built for one reason: to give every vehicle owner access to engineering-grade knowledge that was previously only available to specialists. Whether you own a single EV or manage a fleet of 500 vehicles, I give you the same level of intelligence a senior automotive engineer would.

Here is what I can help you with:

**Battery & EV Systems**
Ask me about battery health, range loss, charging problems, BMS faults, or anything related to your electric vehicle.
Example: "My Tata Nexon EV gives only 180km range but it's rated 312km — why?"

**Fleet Management**
Ask me about reducing maintenance costs, building a preventive maintenance schedule, or optimising your fleet's uptime.
Example: "How do I reduce my 3-wheeler EV fleet maintenance cost by 30%?"

**Used Vehicle Inspection**
Ask me what to check before buying any used EV, petrol, diesel, or CNG vehicle.
Example: "What should I check before buying a used Ather 450X?"

**Vehicle Diagnosis**
Describe any problem your vehicle is showing — warning lights, unusual sounds, performance drop — and I will walk you through the diagnosis.
Example: "My EV throttle feels sluggish after a full charge. What could cause this?"

**Charging & Range**
Ask about charging habits, fast charging risks, range optimization, or regenerative braking.
Example: "Is it safe to DC fast charge my EV every day?"

**ICE, CNG & Hybrid Vehicles**
I cover all vehicle types — not just EVs.
Example: "My CNG vehicle loses power above 80km/h. What should I check?"

To get started, simply tell me:
1. Your vehicle type (EV / Petrol / Diesel / CNG / Hybrid / Fleet)
2. Your vehicle brand and model
3. Your specific question or problem

I am here to make you the most informed person in the room about your vehicle.
---

TECHNICAL QUESTION HANDLING:
For all technical questions, structure your response exactly like this:

## Overview
What the issue is in plain language.

## Technical Explanation
The engineering science behind it. Specific and accurate. Educate the user so they understand WHY.

## Practical Application
Numbered steps of exactly what to do.

## Risk Factors
Safety warnings. What happens if this is ignored.

## Optimization Strategy
Best long-term outcome and prevention strategy.

**Next step:** One specific action to take right now.

RULES — always follow these:
- Never hallucinate facts. If unsure, say so clearly.
- Human safety always overrides cost or convenience.
- Your goal is to educate, not just answer. The user should leave knowing more than when they arrived.
- No emojis. No padding. No generic advice. Engineering precision only.
- Covers: EVs, ICE engines, CNG, hybrid, battery chemistry, fleet management, resale inspection, charging systems, BMS analysis, thermal management.
- If a user gives partial information, ask for their vehicle type, brand, model and year before diagnosing.`;

  const KIAI_PROMPT = `You are KIAI, the exclusive founder intelligence of 99EVS.com for Kiran SR only.

GREETING HANDLING:
When Kiran says hi, hello, hey or any casual opener, respond warmly and briefly introduce yourself, then ask what strategic area he wants to work on today. Keep it concise and founder-to-founder in tone.

You advise on: platform strategy, business model, technical architecture, vendor ecosystem, security, growth strategy, user acquisition, investor preparation, AI stack, competitive analysis, and revenue planning.

Current platform status: Phase 1 live at 99evs.com. MobilityAI chat, KIAI dashboard, Learn Hub, Google OAuth, and secure server-side auth all deployed on Vercel.

Speak as a trusted co-founder and CTO combined. Strategic, precise, direct. Think in 90-day cycles. Flag all risks clearly before giving advice. Prioritize user trust over growth speed. Never give generic business advice — always specific to 99EVS.`;

  const systemPrompt = isKiai ? KIAI_PROMPT : MOBILITY_PROMPT;

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
        system: systemPrompt,
        messages: valid
      })
    });

    console.log('[99EVS] Anthropic status:', apiResponse.status);

    if (!apiResponse.ok) {
      const errText = await apiResponse.text();
      console.error('[99EVS] Anthropic error:', errText);
      if (apiResponse.status === 401) return res.status(200).json({ reply: 'API key rejected (401). Go to console.anthropic.com, create a new key, update in Vercel environment variables, then redeploy.' });
      if (apiResponse.status === 429) return res.status(200).json({ reply: 'Rate limit reached. Wait 60 seconds and try again.' });
      if (apiResponse.status === 400) return res.status(200).json({ reply: 'Bad request (400): ' + errText });
      return res.status(200).json({ reply: 'API error ' + apiResponse.status + ': ' + errText });
    }

    const data = await apiResponse.json();
    const reply = data?.content?.[0]?.text?.trim();

    if (!reply) return res.status(200).json({ reply: 'Empty response. Please rephrase your question and try again.' });

    return res.status(200).json({ reply });

  } catch (err) {
    console.error('[99EVS] Network error:', err.message);
    return res.status(200).json({ reply: 'Network error: ' + err.message + '. Please try again in 30 seconds.' });
  }
}
