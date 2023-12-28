import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function Homepage() {
  const { getAccessTokenSilently } = useAuth0();

  const handleLogin = async (role) => {
    try {
      const accessToken = await getAccessTokenSilently();
      console.log(`Logged in as ${role}. Access Token: ${accessToken}`);

      // Additional logic: You might want to store the role or token in state/context.
      // For now, let's log the data and leave navigation to a parent component.
    } catch (error) {
      console.error(error);
    }
  };

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
              <button id="ownerLogInButton" onClick={() => handleLogin('Owner')}>
                Owner
              </button>
            </Link>
            <Link to={'/user'}>
              <button id="userLogInButton" onClick={() => handleLogin('User')}>
                User
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
