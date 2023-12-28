import { Link } from 'react-router-dom'
import UserSignOut from './UserSignOut.tsx'

export default function Nav() {
  return (
    <>
      <nav>
        <button>
          <Link to={'/'}>Home</Link>
        </button>
        <UserSignOut />
      </nav>
    </>
  )
}
