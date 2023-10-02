import { NextRequest, NextResponse } from 'next/server'
import schema from '../schema'

interface Props {
  params: { id: number }
}

export function GET(request: NextRequest, { params }: Props) {
  const { id } = params

  if (id > 10) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 404 })
  }

  return NextResponse.json({
    id,
    name: 'Brooks'
  })
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json()
  const validation = schema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  if (params.id > 10) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 404 })
  }

  return NextResponse.json({
    id: params.id,
    name: body.name
  })
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { id } = params

  if (id > 10) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 404 })
  }

  return NextResponse.json({ id, name: 'Brooks' })
}
