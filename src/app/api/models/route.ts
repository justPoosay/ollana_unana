import {NextResponse} from 'next/server'

export async function GET() {
    return NextResponse.json({
        models: [
            {name: 'llama2', modified_at: new Date().toISOString()},
            {name: 'mistral', modified_at: new Date().toISOString()},
        ],
    })
}