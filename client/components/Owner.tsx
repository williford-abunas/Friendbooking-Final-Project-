import WeekPicker from './WeekPicker'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TimePicker } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'

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
    const [selectedStartTime, setSelectedStartTime] = useState<Dayjs | null>(
      null
    )
    const [selectedEndTime, setSelectedEndTime] = useState<Dayjs | null>(null)

    const handleTimeChange = (time: Date | string, type: 'start' | 'end') => {
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
          <h3>Create a free timeslot!</h3>
          <label id="startTimeOwner" htmlFor="startTime">
            Start Time:
          </label>
          <TimePicker
            className="dropdownTimeOwnerInput"
            value={selectedStartTime || null}
            onChange={(time: any) => handleTimeChange(time, 'start')}
          />
          <label id="endTimeOwner" htmlFor="endTime">
            End Time:
          </label>
          <TimePicker
            className="dropdownTimeOwnerInput"
            value={selectedEndTime || null}
            onChange={(time: any) => handleTimeChange(time, 'start')}
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
