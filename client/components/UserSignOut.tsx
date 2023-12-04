import { IfAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link, useLocation } from 'react-router-dom'

export default function UserSignOut() {
  const { logout } = useAuth0()
  const location = useLocation()

  const handleSignOut = () => {
    logout()
    console.log('User signing out.')
  }

  const isUserDashboardRoute = location.pathname === '/user/dashboard'

  return (
    <>
      <div className="userAuthDiv">
        <IfAuthenticated>
          <button onClick={handleSignOut}>User Sign out</button>
        </IfAuthenticated>
        <IfAuthenticated>
          {!isUserDashboardRoute && (
            <button>
              <Link to={'/user/dashboard'}>User Dashboard</Link>
            </button>
          )}
        </IfAuthenticated>
      </div>
    </>
  )
}
