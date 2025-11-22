import { useState } from "react";

const Users = () => {
  const [users] = useState<string[]>(['고담덕', "허준", "장영실"])

  return(
    <div>
      <h2>Users Page</h2>
      <ul>
        {users.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users;