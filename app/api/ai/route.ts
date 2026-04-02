import { NextResponse } from "next/server"

// studyFlow AI Chatbot — powered by Groq Llama 3.3
// To enable: add GROQ_API_KEY to your .env.local or Vercel environment variables
// Get a free key at: https://console.groq.com/keys

export async function POST(request: Request) {
  try {
    const { messages, systemPrompt } = await request.json()

    const groqKey = process.env.GROQ_API_KEY

    if (!groqKey) {
      return NextResponse.json(
        {
          error:
            "GROQ_API_KEY is not configured. Add it to your .env.local file or Vercel → Settings → Environment Variables. Get a free key at https://console.groq.com/keys",
        },
        { status: 500 }
      )
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${groqKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // Groq Llama 3.3 70B
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        max_tokens: 600,
        temperature: 0.7,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message ?? "Groq API error" },
        { status: response.status }
      )
    }

    const reply = data.choices?.[0]?.message?.content ?? "No response from AI"
    return NextResponse.json({ reply })
  } catch (err) {
    console.error("AI route error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
