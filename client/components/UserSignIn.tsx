import { IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function UserSignIn() {
  const { loginWithRedirect } = useAuth0()

  const handleSignIn = () => {
    loginWithRedirect().catch((error) => {
      console.error('Error logging in', error)
    })
  }

  return (
    <>
      <div className="userAuthDiv">
        <IfNotAuthenticated>
          <button onClick={handleSignIn}>User Sign in</button>
        </IfNotAuthenticated>
      </div>
    </>
  )
}
