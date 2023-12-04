import { useState } from 'react'
import { TimePicker } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'
import { useNavigate } from 'react-router-dom'

import OwnerWeekPicker from './OwnerWeekPicker'

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
  const navigate = useNavigate()

  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    startTime: null,
    endTime: null,
  })

  const handleDayClick = (day: string) => {
    setSelectedDay((prevDay) => (prevDay === day ? null : day))
  }

  function TimeSlotsFormDropdown() {
    const [selectedStartTime, setSelectedStartTime] = useState<Dayjs | null>(
      null
    )
    const [selectedEndTime, setSelectedEndTime] = useState<Dayjs | null>(null)

    const handleTimeChange = (time: Date | string, type: 'start' | 'end') => {
      const timeValue = dayjs(time)
      if (type === 'start') {
        setSelectedStartTime(timeValue.isValid() ? timeValue : null)
      } else {
        setSelectedEndTime(timeValue.isValid() ? timeValue : null)
      }
    }

    const handleSubmit = async (e: any) => {
      e.preventDefault()

      const updatedFormData = {
        ...formData,
        startTime: selectedStartTime ? selectedStartTime.format('HH:mm') : null,
        endTime: selectedEndTime ? selectedEndTime.format('HH:mm') : null,
      }

      setFormData(updatedFormData)

      try {
        const response = await fetch('/api/v1/friendbooking/owner/dashboard', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedFormData),
        })

        if (response.ok) {
          navigate('/owner/dashboard', { state: { formData: updatedFormData } })
          console.log(updatedFormData, 'Data passing correctly')
        } else {
          console.error('Failed to submit form data:', response.statusText)
        }
      } catch (error) {
        console.error('Error submitting form data:', error)
      }
    }

    return (
      <div>
        <form id="dropdownTimeOwner" onSubmit={handleSubmit}>
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
            onChange={(time: any) => handleTimeChange(time, 'end')}
          />
          <div>
            <button type="submit">Submit</button>
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
      <OwnerWeekPicker />
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
