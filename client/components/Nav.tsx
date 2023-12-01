import { Link } from 'react-router-dom'
import UserSignIn from './UserSignIn.tsx'
import UserSignOut from './UserSignOut.tsx'

export default function Nav() {
  return (
    <>
      <nav>
        <UserSignIn />
        <UserSignOut />
        <button>
          <Link to={'/'}>Home</Link>
        </button>
      </nav>
    </>
  )
}
