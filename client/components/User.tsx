import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Appointment } from '../../models/Appointment'
// import { useQuery } from '@tanstack/react-query'

const DaysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export default function User() {
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
          // Use Link or button based on your navigation needs
          <Link key={index} to={`/form/${selectedDay}/${slot}`}>
            {slot}
          </Link>
        ))}
      </div>
    )
  }

  return (
    <>
      <h1>OWNER WEEKLY CALENDAR!</h1>
      {DaysOfWeek.map((day, index) => (
        <div key={index} className="day-container">
          <button onClick={() => handleDayClick(day)}>{day}</button>
          {selectedDay === day && <TimeSlotsDropdown />}
        </div>
      ))}
    </>
  )
}
