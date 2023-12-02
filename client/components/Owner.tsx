import WeekPicker from './WeekPicker'
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

export default function Owner() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null)

  const handleDayClick = (day: string) => {
    setSelectedDay((prevDay) => (prevDay === day ? null : day))
  }

  function TimeSlotsFormDropdown() {
    return (
      <div>
        <form>
          <div>
            <label>Start Time:</label>
            <input name="startTime" type="datetime-local" />
            <label>End Time:</label>
            <input name="endTime" type="datetime-local" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  return (
    <>
      <div className="h1Headers">
        <h1>THIS IS OWNER PAGE!</h1>
      </div>
      <WeekPicker />
      {DaysOfWeek.map((day, index) => (
        <div id="dayContainer" key={index}>
          <button id="userViewDays" onClick={() => handleDayClick(day)}>
            {day}
          </button>
          <div id="dropdownTimeSlot">
            {selectedDay === day && <TimeSlotsFormDropdown />}
          </div>
        </div>
      ))}
    </>
  )
}
