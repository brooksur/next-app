import { NextRequest, NextResponse } from 'next/server'
import schema from './schema'
import prisma from '@/prisma/client'

export async function GET(req: NextRequest) {
  const products = await prisma.product.findMany()

  return NextResponse.json(products)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const validation = schema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const product = await prisma.product.create({
    data: {
      name: validation.data.name,
      price: validation.data.price
    }
  })

  return NextResponse.json(product, {
    status: 201
  })
}
