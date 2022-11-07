import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
}

export const Users: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false) // this line was added
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    setIsLoading(true) // this line was added
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((result: User[]) => {
        setUsers(result)
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false) // this line was added
      })
  }, [])

	return (
    <div className="m-2 p-2 bg-red-400 rounded-md">
      <h1>Users</h1>
      {/* we conditionally render the loading or success UI */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}