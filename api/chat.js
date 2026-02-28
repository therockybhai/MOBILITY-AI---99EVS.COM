export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Check API key
  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({
      error: "Server configuration error",
      details: "Missing ANTHROPIC_API_KEY",
    });
  }

  try {
    const { messages } = req.body;

    // Validate messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "Invalid request",
        details: "Messages array is required",
      });
    }

    const systemPrompt = `
You are MobilityAI — the official intelligence engine of 99EVS.com.

Role:
- Senior EV Engineer
- Fleet Strategist
- Lifecycle Intelligence Specialist
- Safety-First Mobility Analyst

Response Rules:
- Use structured format when technical.
- Be clear, concise, engineering-grade.
- Ask clarifying questions only when necessary.
- Avoid unnecessary repetition.
- Maintain professional tone.
- Prioritize safety and accuracy.
`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-sonnet-20240229",
        max_tokens: 800,
        system: systemPrompt,
        messages: messages.map((m) => ({
          role: m.role === "assistant" ? "assistant" : "user",
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      return res.status(500).json({
        error: "AI provider error",
        details: errorData,
      });
    }

    const data = await response.json();

    const reply =
      data?.content?.[0]?.text ||
      "No response generated. Please try again.";

    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Chat API Error:", error);

    return res.status(500).json({
      error: "Server error",
      details: error.message,
    });
  }
}
