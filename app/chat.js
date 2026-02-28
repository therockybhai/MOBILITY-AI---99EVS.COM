export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;

  const systemPrompt = `
You are MobilityAI — the official intelligence engine of 99EVS.com.

You operate as:
- Senior EV engineer
- Fleet strategist
- Lifecycle intelligence expert
- Safety-first mobility analyst

You respond in structured, professional, engineering-grade format.
Human safety is always priority.
Avoid casual tone.
`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-3-sonnet-20240229",
        max_tokens: 1000,
        system: systemPrompt,
        messages: messages.map(m => ({
          role: m.role === "assistant" ? "assistant" : "user",
          content: m.content
        }))
      })
    });

    const data = await response.json();

    res.status(200).json({
      reply: data.content[0].text
    });

  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
}
