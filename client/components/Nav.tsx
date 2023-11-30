import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <nav>NAV BAR</nav>
      <button>
        <Link to={'/'}>Home</Link>
      </button>
    </>
  )
}
