import WeekPicker from './WeekPicker'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TimePicker } from '@mui/x-date-pickers'

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
    const [selectedStartTime, setSelectedStartTime] = useState(null)
    const [selectedEndTime, setSelectedEndTime] = useState(null)

    const handleTimeChange = (time, type) => {
      // type can be 'start' or 'end'
      const timeValue = dayjs(time) // Convert to Dayjs object
      if (type === 'start') {
        setSelectedStartTime(timeValue.isValid() ? timeValue : null)
      } else {
        setSelectedEndTime(timeValue.isValid() ? timeValue : null)
      }
    }
    return (
      <div>
        <form id="dropdownTimeOwner">
          <label id="startTimeOwner" htmlFor="startTime">
            Start Time:
          </label>
          <TimePicker
            className="dropdownTimeOwnerInput"
            value={selectedStartTime}
            onChange={(time) => handleTimeChange(time, 'start')}
          />
          <label id="endTimeOwner" htmlFor="endTime">
            End Time:
          </label>
          <TimePicker
            className="dropdownTimeOwnerInput"
            value={selectedEndTime}
            onChange={(time) => handleTimeChange(time, 'end')}
          />
          <div>
            <button type="submit">
              <Link to={'/owner/dashboard'}>Submit</Link>
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <>
      <div className="h1Headers">
        <h1>MY CALENDAR!</h1>
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
