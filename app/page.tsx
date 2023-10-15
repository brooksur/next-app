import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import vercelImage from '@/public/next.svg'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <Image src={vercelImage} alt="Vercel" />
      <Image src="https://bit.ly/react-cover" alt="React Logo" fill />
    </main>
  )
}
