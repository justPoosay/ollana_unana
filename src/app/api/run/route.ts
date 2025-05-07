import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { model, prompt } = body

  return NextResponse.json({
    model,
    prompt,
    response: `Simulated model response "${model}" for prompt "${prompt}".`,
  })
}
