// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
// import { NavGroup, NavButton } from './Styled.tsx'
// import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

export default function Nav() {
  // const { user, logout, loginWithRedirect } = useAuth0()

  // const handleSignOut = () => {
  //   logout()
  //   console.log('sign out')
  // }

  // const handleSignIn = () => {
  //   loginWithRedirect()
  //   console.log('sign in')
  // }

  return (
    <>
      <nav>NAV BAR</nav>
      {/* <nav>
        <IfAuthenticated>
          <button onClick={handleSignOut}>Sign out</button>
          {user && <p>Signed in as: {user?.nickname}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button onClick={handleSignIn}>Sign in</button>
        </IfNotAuthenticated>
      </nav> */}
      <button>
        <Link to={'/'}>Home</Link>
      </button>
    </>
  )
}
