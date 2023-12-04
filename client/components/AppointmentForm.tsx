import { useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { TimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

export default function AppointmentForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const { day, timeSlot } = useParams()
  console.log(day)
  const [formData, setFormData] = useState(
    location.state?.formData || {
      title: '',
      description: '',
    }
  )
  const [selectedStartTime, setSelectedStartTime] = useState(null)
  const [selectedEndTime, setSelectedEndTime] = useState(null)

  const handleTimeChange = (
    time: string | number | Date | dayjs.Dayjs | null | undefined,
    type: string
  ) => {
    // type can be 'start' or 'end'
    const timeValue = dayjs(time) // Convert to Dayjs object
    if (type === 'start') {
      setSelectedStartTime(timeValue.isValid() ? timeValue : null)
    } else {
      setSelectedEndTime(timeValue.isValid() ? timeValue : null)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Include selected start and end times in the request body
    const requestBody = {
      ...formData,
      startTime: selectedStartTime ? selectedStartTime.format('HH:mm') : null,
      endTime: selectedEndTime ? selectedEndTime.format('HH:mm') : null,
    }

    try {
      const response = await fetch(
        '/api/v1/friendbooking/:userId/appointment',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }
      )

      if (response.ok) {
        navigate('/form/confirmation', { state: { formData: requestBody } })
        console.log(requestBody, 'Data passing correctly')
      } else {
        console.error('Failed to submit form data:', response.statusText)
      }
    } catch (error) {
      console.error('Error submitting form data:', error)
    }
  }

  const handleReturnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    navigate('/user')
  }

  return (
    <>
      <div className="h1Headers">
        <h1>APPOINTMENT FORM!</h1>
      </div>
      <div id="appointmentBox">
        <div id="dayTime">
          <p>PlaceHolder for Appointment Date</p>
          <p>
            <strong>Day:</strong> {day}
          </p>
          <p>
            <strong>Time Slot:</strong> {timeSlot}
          </p>
        </div>
        <form className="appointmentForm" onSubmit={handleSubmit}>
          <div id="titleDescription">
            <label htmlFor="title">
              <strong>Title:</strong>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label htmlFor="description">
              <strong>Description:</strong>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div id="startEnd">
            <label id="startTime" htmlFor="startTime">
              Start Time:
            </label>
            <TimePicker
              className="dropdownTimeAppointmentInput"
              value={selectedStartTime}
              onChange={(time) => handleTimeChange(time, 'start')}
            />
            <label id="endTime" htmlFor="endTime">
              End Time:
            </label>
            <TimePicker
              className="dropdownTimeAppointmentInput"
              value={selectedEndTime}
              onChange={(time) => handleTimeChange(time, 'end')}
            />
          </div>
          <button type="submit">Submit Appointment</button>
        </form>
      </div>
      <button className="calendar-return" onClick={handleReturnClick}>
        Return to Owner Calendar
      </button>
    </>
  )
}
