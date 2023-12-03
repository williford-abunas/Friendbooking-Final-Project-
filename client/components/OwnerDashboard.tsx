import { useNavigate } from 'react-router-dom'

export default function OwnerDashboard() {
  const navigate = useNavigate()
  const handleReturnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    navigate('/owner')
  }
  return (
    <>
      <div className="h1Headers">
        <h1>MY DASHBOARD!</h1>
      </div>
      <button className="calendar-return" onClick={handleReturnClick}>
        Return to My Calendar
      </button>
    </>
  )
}
