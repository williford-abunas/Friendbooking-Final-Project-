import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <>
      <h1>THIS IS HOMEPAGE!</h1>
      <Link to={'/user'}>User</Link>
      <br />
      <Link to={'/owner'}>Owner</Link>
      <br />
      <Link to={'/login'}>Log In</Link>
      <br />
      <Link to={'/form'}>Appointment Form</Link>
    </>
  )
}
