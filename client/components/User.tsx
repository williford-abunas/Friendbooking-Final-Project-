import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getISOWeek, addWeeks } from 'date-fns'

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
  const [selectedWeek, setSelectedWeek] = useState<number>(
    getISOWeek(new Date())
  )
  const { user } = useAuth0()

  const [selectedDay, setSelectedDay] = useState<string | null>(null)

  useEffect(() => {
    // Check authentication status and redirect if not authenticated
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect()
    }
  }, [isLoading, isAuthenticated, loginWithRedirect])

  const handleWeekChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWeek(parseInt(event.target.value, 10))
  }

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

  if (!isAuthenticated || isLoading) {
    return null
  }

  return (
    <>
      <div className="h1Headers">
        <h1>OWNER WEEKLY CALENDAR!</h1>
      </div>
      <div>{user && <p>Signed in as: {user?.given_name}</p>}</div>
      <div>
        <label htmlFor="weekSelector">Select Week:</label>
        <select
          id="weekSelector"
          onChange={handleWeekChange}
          value={selectedWeek}
        >
          {/* You can generate the options dynamically based on your requirements */}
          <option value={getISOWeek(new Date())}>Current Week</option>
          <option value={getISOWeek(addWeeks(new Date(), 1))}>Next Week</option>
          {/* Add more options as needed */}
        </select>
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
