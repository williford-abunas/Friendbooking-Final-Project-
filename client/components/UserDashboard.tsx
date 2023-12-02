import { useNavigate } from 'react-router-dom'

export default function UserDashboard() {
  const navigate = useNavigate()

  const handleReturnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    navigate('/user')
  }

  return (
    <>
      <div className="h1Headers">
        <h1>THIS IS USER DASHBOARD!</h1>
      </div>
      <button className="calendar-return" onClick={handleReturnClick}>
        Return to Owner's Calendar
      </button>
    </>
  )
}
