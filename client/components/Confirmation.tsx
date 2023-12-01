import { useNavigate } from 'react-router-dom'

export default function Confirmation() {
  const navigate = useNavigate()
  const handleReturnClick = (e) => {
    e.preventDefault()
    navigate('/user')
    console.log('Form submitted with data:')
  }

  return (
    <>
      <div className="confirmation-container">
        <ul className="confirmation-list">
          <h1 className="confirmation-title">
            SUCCESS! Your friend wants to catchup!
          </h1>
          <li>Title: Coffee</li>
          <li>Description: We need to talk!</li>
          <li>Start Time: 10am</li>
          <li>End Time: 11am</li>
        </ul>
        <button className="calendar-return" onClick={handleReturnClick}>
          Return to Owners calendar
        </button>
      </div>
    </>
  )
}
