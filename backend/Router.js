import express from 'express'
import Groq from 'groq-sdk'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router()

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
})

console.log(groq)

router.post('/ask', async (req, res) => {
    try{
    const {context, role, task, format,input} = req.body

    console.log(req.body)

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
        messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    })

    const answer = response.choices[0].message.content
    
    res.json({answer})
    }catch (error) {
    console.error(error)
    res.status(500).json({ error: "AI request failed" })
    }
})

export default router