import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'

import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0()
  const navigate = useNavigate()

  const handleSignOut = () => {
    logout()
    console.log('sign out')
  }

  const handleSignIn = () => {
    loginWithRedirect()
      .then(() => {
        setTimeout(() => {
          navigate('/owner')
        }, 1000)
      })
      .catch((error) => {
        console.error('Error logging in', error)
      })

    // console.log('sign in')
  }

  return (
    <>
      <nav>
        NAV BAR
        <IfAuthenticated>
          <button onClick={handleSignOut}>Sign out</button>
          {user && <p>Signed in as: {user?.nickname}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button onClick={handleSignIn}>Sign in</button>
        </IfNotAuthenticated>
        <button>
          <Link to={'/'}>Home</Link>
        </button>
        <Link to={'/user'}>User</Link>
        <br />
        <Link to={'/owner'}>Owner</Link>
        <br />
        <Link to={'/login'}>Log In</Link>
      </nav>
    </>
  )
}
