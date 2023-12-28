import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <>
      <div className="h1Headers">
        <h1>WELCOME TO FRIEND-BOOKING-APP!</h1>
      </div>
      <div className="logInBox">
        <h2>Log in as:</h2>
        <div>
          <div id="logInButtons">
            <Link to={'/owner'}>
              <button id="ownerLogInButton">Owner</button>
            </Link>
            <Link to={'/user'}>
              <button id="userLogInButton">User</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
