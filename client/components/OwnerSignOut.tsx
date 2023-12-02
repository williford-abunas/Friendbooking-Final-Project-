// import { IfAuthenticated } from './Authenticated'
// import { useAuth0 } from '@auth0/auth0-react'
// import { Link } from 'react-router-dom'

// export default function OwnerSignOut() {
//   const { logout } = useAuth0()

//   const handleSignOut = () => {
//     logout()
//     console.log('Owner signing out.')
//   }

//   return (
//     <>
//       <div className="ownerAuthDiv">
//         <IfAuthenticated>
//           <button onClick={handleSignOut}>Owner Sign out</button>
//         </IfAuthenticated>
//         <IfAuthenticated>
//           <button>
//             <Link to={'/owner/dashboard'}>Owner Dashoard</Link>
//           </button>
//         </IfAuthenticated>
//       </div>
//     </>
//   )
// }
