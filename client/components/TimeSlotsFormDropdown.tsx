import { TimePicker } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import moment from 'moment'
import { getDaysOfWeek } from '../helper'

export default function TimeSlotsFormDropdown({ onTimeslotWeekChange }) {
  const [selectedStartTime, setSelectedStartTime] = useState<Dayjs | null>(null)
  const [selectedEndTime, setSelectedEndTime] = useState<Dayjs | null>(null)
  const [formData, setFormData] = useState({
    date: null,
    day: null,
    startTime: null,
    endTime: null,
  })
  const navigate = useNavigate()
  const [objWeek, setObjWeek] = useState({
    date: new Date(),
    day: moment().format('dddd'),
  })

  const onChange = (date: Date) => {
    const weekNumber = moment(date).isoWeek()
    const day = moment(date).format('dddd')
    const formattedDate = date.toLocaleDateString()

    onTimeslotWeekChange({
      daysOfWeek: getDaysOfWeek(date),
      selectedWeek: {
        weekNumber,
        day,
        formattedDate,
      },
    })

    setObjWeek({
      date,
      day,
    })

    onWeekChange({
      daysOfWeek: getDaysOfWeek(date),
      selectedWeek: {
        weekNumber,
        day,
        formattedDate,
      },
    })
  }

  const handleTimeChange = (time: Date | string, type: 'start' | 'end') => {
    const timeValue = dayjs(time)
    if (type === 'start') {
      setSelectedStartTime(timeValue.isValid() ? timeValue : null)
    } else {
      setSelectedEndTime(timeValue.isValid() ? timeValue : null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const updatedFormData = {
      ...formData,
      date: moment(objWeek.date).format('YYYY-MM-DD'),
      day: objWeek.day,
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
      <form
        id="dropdownTimeOwner"
        onSubmit={handleSubmit}
        value={objWeek.date}
        onChange={(date) => {
          onChange(date as Date)
          onTimeslotWeekChange({
            daysOfWeek: getDaysOfWeek(date),
            selectedWeek: {
              weekNumber: moment(date).isoWeek(),
              day: moment(date).format('dddd'),
            },
          })
        }}
      >
        <h3>Create a free timeslot!</h3>
        <div id="dayTime">
          <p>
            <strong>Day: </strong>
            {objWeek.day}
          </p>
          <p>
            <strong>Date: </strong>
            {objWeek.date ? moment(objWeek.date).format('MMMM DD, YYYY') : ''}
          </p>
        </div>
        <label id="startTimeOwner" htmlFor="startTime">
          Start Time:
        </label>
        <TimePicker
          className="dropdownTimeOwnerInput"
          value={selectedStartTime || null}
          onChange={(time) => handleTimeChange(time, 'start')}
        />
        <label id="endTimeOwner" htmlFor="endTime">
          End Time:
        </label>
        <TimePicker
          className="dropdownTimeOwnerInput"
          value={selectedEndTime || null}
          onChange={(time) => handleTimeChange(time, 'end')}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
