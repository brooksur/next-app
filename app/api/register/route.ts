import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import bcrypt from 'bcrypt'

const schema = z.object({
  email: z.string().trim().email().toLowerCase(),
  password: z.string().min(8).max(100)
})

export async function POST(req: NextRequest) {
  const body = await req.json()

  const validation = schema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const creds = validation.data

  const user = await prisma.user.findUnique({
    where: {
      email: creds.email
    }
  })

  if (user) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  creds.password = await bcrypt.hash(creds.password, 10)

  const newUser = await prisma.user.create({
    data: {
      email: creds.email,
      hashedPassword: creds.password
    }
  })

  return NextResponse.json({
    id: newUser.id,
    email: newUser.email
  })
}
