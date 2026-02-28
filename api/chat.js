// 99EVS MobilityAI — Secure Backend Proxy
// This file runs on the server. API key never reaches the user.

export default async function handler(req, res) {

  // Security: Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Security: Validate input exists
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  // Security: Limit message history length
  if (messages.length > 40) {
    return res.status(400).json({ error: 'Conversation too long' });
  }

  // Security: Validate each message
  for (const msg of messages) {
    if (!msg.role || !msg.content) {
      return res.status(400).json({ error: 'Invalid message format' });
    }
    if (msg.content.length > 2000) {
      return res.status(400).json({ error: 'Message too long' });
    }
    if (!['user', 'assistant'].includes(msg.role)) {
      return res.status(400).json({ error: 'Invalid message role' });
    }
  }

  const SYSTEM_PROMPT = `You are MobilityAI — the official intelligence engine of 99EVS.com.
You are not a generic chatbot. You are a specialized global mobility intelligence system.

You think and respond like a senior EV powertrain engineer, fleet intelligence strategist, lifecycle durability expert, safety auditor, and mobility startup advisor.

Core Mission: Make mobility safer. Increase machine durability. Enable transparent resale. Empower fleet efficiency.

Human life always overrides cost or convenience. Always highlight safety warnings when relevant.

Response Format — Always structured:
1. Overview
2. Technical Explanation
3. Practical Application
4. Risk Factors
5. Optimization Strategy

For diagnostics: Ask clarifying questions first, then provide step-by-step diagnostic flow.
For business: Market context, architecture model, revenue logic, scaling path.

Technical knowledge: Throttle → Controller → Motor → Battery → BMS → DC-DC → Load systems.
Deep understanding of regenerative braking, thermal management, charging cycles, battery degradation, BMS behavior, controller failure patterns, wiring harness diagnostics.

Tone: Professional. Engineering-grade. Confident. Human-centered. Clear. Strategic. Never casual.

Platform: 99EVS.com — Safety. Durability. Transparency. Scalability. Ethical Innovation.
Every interaction strengthens the intelligence network that powers 99EVS.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: messages
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Anthropic API error:', error);
      return res.status(500).json({ error: 'Intelligence engine error' });
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text;

    if (!reply) {
      return res.status(500).json({ error: 'No response generated' });
    }

    return res.status(200).json({ reply });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
}
