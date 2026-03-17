import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {

    let body = req.body;
    if (typeof req.body === 'string') {
        body = JSON.parse(req.body);
    }
    try {
    const { input, context, role, task, format } = body;

    let prompt

    if(input){
        prompt = input
    }else{
    prompt = `
    Context:${context}
    Role:${role}
    Task:${task}`

    if(format){
        prompt += `\n\nOdgovor OBAVEZNO vrati u sledećem formatu:\n${format}`
    }
    }

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });


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