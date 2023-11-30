import { useState } from 'react'
import { Link } from 'react-router-dom'

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
  const [selectedDay, setSelectedDay] = useState<string | null>(null)

  const handleDayClick = (day: string) => {
    setSelectedDay(selectedDay === day ? null : day)
  }

  function TimeSlotsDropdown() {
    // Replace this with your actual time slots data
    const timeSlots = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM']

    return (
      <div className="time-slots-dropdown">
        {timeSlots.map((slot, index) => (
          <Link key={index} to={`/form/${selectedDay}/${slot}`}>
            <button>{slot}</button>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="h1Headers">
        <h1>OWNER WEEKLY CALENDAR!</h1>
      </div>
      {DaysOfWeek.map((day, index) => (
        <div key={index} className="day-container">
          <button id="userViewDays" onClick={() => handleDayClick(day)}>
            {day}
          </button>
          {selectedDay === day && <TimeSlotsDropdown />}
        </div>
      ))}
    </>
  )
}
