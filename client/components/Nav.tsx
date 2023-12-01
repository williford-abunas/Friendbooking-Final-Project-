import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'

import { Link } from 'react-router-dom'

export default function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
    console.log('sign out')
  }

  const handleSignIn = () => {
    loginWithRedirect().catch((error) => {
      console.error('Error logging in', error)
    })
  }

  return (
    <>
      <nav>
        <div>
          <IfAuthenticated>
            <button onClick={handleSignOut}>Sign out</button>
            {user && <p>Signed in as: {user?.given_name}</p>}
          </IfAuthenticated>
        </div>
        <div>
          <IfNotAuthenticated>
            <button onClick={handleSignIn}>Sign in</button>
          </IfNotAuthenticated>
        </div>
        <button>
          <Link to={'/'}>Home</Link>
        </button>
      </nav>
    </>
  )
}
