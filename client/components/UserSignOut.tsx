import { IfAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function UserSignOut() {
  const { user, logout } = useAuth0()

  const handleSignOut = () => {
    logout()
    console.log('sign out')
  }

  return (
    <>
      <div>
        <IfAuthenticated>
          <button onClick={handleSignOut}>Sign out</button>
          {user && <p>Signed in as: {user?.given_name}</p>}
        </IfAuthenticated>
      </div>
    </>
  )
}
