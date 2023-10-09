'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const { status, data: session } = useSession()

  if (status === 'loading') return null

  const isLoggedIn = status === 'authenticated'
  const isLoggedOut = status === 'unauthenticated'

  return (
    <div className="flex bg-stone-900 p-5 space-x-5">
      <Link href="/">Next App</Link>
      {isLoggedIn && <Link href="/users">Users</Link>}
      {isLoggedIn && <div>{session?.user?.name}</div>}
      {isLoggedOut && <Link href="/api/auth/signin">Login</Link>}
      {isLoggedIn && <Link href="/api/auth/signout">Logout</Link>}
    </div>
  )
}

export default NavBar
