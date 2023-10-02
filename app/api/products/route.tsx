import { NextRequest, NextResponse } from 'next/server'
import schema from './schema'

export function GET(req: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'Eggs', price: 5.0 },
    { id: 2, name: 'Bread', price: 3.5 }
  ])
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const validation = schema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  return NextResponse.json(
    {
      id: 3,
      ...body
    },
    {
      status: 201
    }
  )
}
