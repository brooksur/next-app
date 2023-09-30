import Link from 'next/link'
import React from 'react'
import { sort } from 'fast-sort'

interface User {
  id: number
  name: string
  email: string
}

interface Props {
  sortOrder: string
}

async function UserTable({ sortOrder }: Props) {
  const users = await (async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      next: {
        revalidate: 10 // refetch every 10 seconds
      }
    })

    const users: User[] = await res.json()

    switch (sortOrder) {
      case 'id':
        return sort(users).asc((u) => u.id)
      case 'name':
        return sort(users).asc((u) => u.name)
      case 'email':
        return sort(users).asc((u) => u.email.toLowerCase())
      default:
        return users
    }
  })()

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=id">ID</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
