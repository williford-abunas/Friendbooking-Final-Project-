import { useNavigate, useLocation } from 'react-router-dom'

export default function Confirmation() {
  const navigate = useNavigate()
  const location = useLocation()
  const formData = location.state?.formData

  const handleReturnClick = (e) => {
    e.preventDefault()
    navigate('/user')
    console.log('Form submitted with data:')
  }

  if (!formData) {
    return (
      <div>
        <p>No form data found for confirmation!</p>
      </div>
    )
  }
  return (
    <>
      <div className="confirmation-container">
        <ul className="confirmation-list">
          <h1 className="confirmation-title">
            SUCCESS! Your friend wants to catchup!
          </h1>
          <li>Title: {formData.title}</li>
          <li>Description: {formData.description}</li>
          <li>Start Time: {formData.startTime}</li>
          <li>End Time: {formData.endTime}</li>
        </ul>
        <button className="calendar-return" onClick={handleReturnClick}>
          Return to Owners calendar
        </button>
      </div>
    </>
  )
}

//   return (
//     <>
//       <div className="h1Headers">
//         <h1>CONFIRMATION PAGE!</h1>
//       </div>
//       <div id="confirmationBox">
//         <p>
//           <strong>Day:</strong> {formData.day}
//         </p>
//         <p>
//           <strong>Time Slot:</strong> {formData.timeSlot}
//         </p>
//         <p>
//           <strong>Title:</strong> {formData.title}
//         </p>
//         <p>
//           <strong>Description:</strong> {formData.description}
//         </p>
//         <p>
//           <strong>Start Time:</strong> {formData.startTime}
//         </p>
//         <p>
//           <strong>End Time:</strong> {formData.endTime}
//         </p>
//       </div>
//     </>
//  )
