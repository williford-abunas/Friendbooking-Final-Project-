import { Link } from 'react-router-dom'
import UserSignOut from './UserSignOut.tsx'
import OwnerSignOut from './OwnerSignOut.tsx'

export default function Nav() {
  return (
    <>
      <nav>
        <button>
          <Link to={'/'}>Home</Link>
        </button>
        <UserSignOut />
        {/* <OwnerSignOut /> */}
      </nav>
    </>
  )
}
