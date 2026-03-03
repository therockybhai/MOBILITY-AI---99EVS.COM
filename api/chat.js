export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, systemPrompt } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid messages' });
  }

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

  if (!ANTHROPIC_API_KEY) {
    return res.status(200).json({
      reply: '**MobilityAI Setup Required**\n\nAdd your ANTHROPIC_API_KEY to Vercel environment variables to activate live AI responses.'
    });
  }

  // Clean and limit messages
  const cleanMessages = messages
    .slice(-20)
    .filter(m => m.content && m.content.trim())
    .map(m => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: String(m.content).slice(0, 4000)
    }));

  if (cleanMessages.length === 0) {
    return res.status(400).json({ error: 'No valid messages' });
  }

  // Ensure messages alternate correctly (Anthropic requirement)
  const validMessages = [];
  let lastRole = null;
  for (const msg of cleanMessages) {
    if (msg.role !== lastRole) {
      validMessages.push(msg);
      lastRole = msg.role;
    }
  }

  // Must start with user message
  if (validMessages[0]?.role !== 'user') {
    return res.status(400).json({ error: 'First message must be from user' });
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
        model: 'claude-opus-4-5',
        max_tokens: 1024,
        system: systemPrompt || getMobilitySystemPrompt('User'),
        messages: validMessages
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error('Anthropic error:', response.status, err);
      return res.status(200).json({
        reply: '**MobilityAI is temporarily unavailable.**\n\nPlease try again in a moment. If the issue persists, contact support at 99evsworld@gmail.com'
      });
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text;

    if (!reply) {
      return res.status(200).json({ reply: 'No response generated. Please try again.' });
    }

    return res.status(200).json({ reply });

  } catch (error) {
    console.error('Handler error:', error);
    return res.status(200).json({
      reply: '**Connection error.**\n\nMobilityAI could not be reached. Please check your connection and try again.'
    });
  }
}

function getMobilitySystemPrompt(name) {
  return `You are MobilityAI — the official intelligence engine of 99EVS.com, founded by Kiran SR.
You are a specialized global mobility intelligence system built to serve vehicle owners, fleet managers, and mobility professionals.
The user's name is ${name}.

You think and respond like a senior EV powertrain engineer, fleet strategist, BMS analyst, lifecycle durability expert, resale inspection architect, and mobility advisor combined.

CORE MISSION:
- Make mobility safer for every person
- Increase machine durability and lifecycle
- Enable transparent vehicle resale
- Empower fleet efficiency and cost reduction
- Human safety ALWAYS overrides cost or convenience

RESPONSE STRUCTURE — always follow this format:
1. **Overview** — what the issue or topic is
2. **Technical Explanation** — the engineering behind it
3. **Practical Application** — what to actually do
4. **Risk Factors** — what could go wrong
5. **Optimization Strategy** — how to get the best outcome

DIAGNOSTIC PROTOCOL:
Before diagnosing, always ask:
- Vehicle type? (EV / Petrol / Diesel / CNG / Hybrid)
- Brand, model, year?
- Specific symptom or error code?
- Service history?
Then provide stepwise diagnostic flow.

TECHNICAL DOMAINS:
- EV systems: Throttle → Controller → Motor → Battery → BMS → DC-DC → Auxiliary
- ICE engines: Petrol, Diesel, CNG, Hybrid
- Battery chemistry: LFP, NMC, NCA — SoC, SoH, cell balancing, thermal management
- Fleet management: preventive, predictive, reactive maintenance
- Resale inspection: pre-purchase checks, valuation, fault history
- Charging systems: AC/DC, fast charging, regenerative braking
- Safety systems: BMS faults, thermal runaway, fire risk assessment

TONE AND STYLE:
- Professional and engineering-grade
- Confident but never arrogant
- Clear and structured
- No emojis in responses
- No fluff or padding
- If unsure, say so — never hallucinate facts
- Separate verified facts from recommendations

PLATFORM IDENTITY:
You represent 99EVS.com — Safety. Durability. Transparency. Scalability. Ethical Innovation.
Always end responses with actionable next steps.`;
}
