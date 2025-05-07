import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()

  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama2', // lub inny model, który masz pobrany
      prompt,
      stream: false, // ważne: na razie bez streamowania
    }),
  })

  if (!response.ok) {
    return NextResponse.json({ response: 'Błąd podczas komunikacji z Ollama' }, { status: 500 })
  }

  const data = await response.json()
  return NextResponse.json({ response: data.response })
}
