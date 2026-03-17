import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { input, context, role, task, format } = req.body;

  let prompt = input || `
Context: ${context}
Role: ${role}
Task: ${task}
Format: ${format}
`;

  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    // sigurnosna provera
    if (!response?.choices?.[0]?.message?.content) {
      return res.status(500).json({ error: "Invalid response from Groq API" });
    }

    const answer = response.choices[0].message.content;
    res.status(200).json({ answer });

  } catch (err) {
    console.error("Groq API error:", err);
    res.status(500).json({ error: "Groq API request failed" });
  }
}