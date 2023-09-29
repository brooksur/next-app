import React from 'react'

interface User {
  id: number
  name: string
}

async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: {
      revalidate: 10 // refetch every 10 seconds
    }
  })
  const users: User[] = await res.json()

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default UsersPage
