import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const DaysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]
export default function Users() {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0()
  const [selectedDay, setSelectedDay] = useState<string | null>(null)

  useEffect(() => {
    // Check authentication status and redirect if not authenticated
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect()
    }
  }, [isLoading, isAuthenticated, loginWithRedirect])

  const handleDayClick = (day: string) => {
    setSelectedDay((prevDay) => (prevDay === day ? null : day))
  }

  function TimeSlotsDropdown() {
    const timeSlots = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM']

    return (
      <div>
        {timeSlots.map((slot, index) => (
          <Link key={index} to={`/form/${selectedDay}/${slot}`}>
            <button id="timeSlotButton">{slot}</button>
          </Link>
        ))}
      </div>
    )
  }

  // Render nothing if not authenticated or if still loading
  if (!isAuthenticated || isLoading) {
    return null
  }

  return (
    <>
      <div className="h1Headers">
        <h1>OWNER WEEKLY CALENDAR!</h1>
      </div>
      {DaysOfWeek.map((day, index) => (
        <div id="dayContainer" key={index}>
          <button id="userViewDays" onClick={() => handleDayClick(day)}>
            {day}
          </button>
          <div id="dropdownTimeSlot">
            {selectedDay === day && <TimeSlotsDropdown />}
          </div>
        </div>
      ))}
    </>
  )
}
