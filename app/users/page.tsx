import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'
import Loading from '../loading'

interface Props {
  searchParams: { sortOrder: string }
}

async function UsersPage({ searchParams: { sortOrder } }: Props) {
  return (
    <>
      <h1 className="mb-3">Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<Loading />}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UsersPage
