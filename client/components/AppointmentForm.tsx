import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import moment from 'moment'

export default function AppointmentForm({
  day,
  date,
  startTime,
  endTime,
  handleWeekPickerSubmit,
}: any) {
  const navigate = useNavigate()
  const location = useLocation()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    appointmentDate: location.state?.formData?.appointmentDate || new Date(),
  })

  useEffect(() => {
    if (location.state?.formData) {
      const { day, date } = location.state.formData
      const formattedDate = moment(date).format('YYYY-MM-DD')

      setFormData({
        title: '',
        description: '',
        appointmentDate: formattedDate,
      })
    }
  }, [location.state?.formData])

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const requestBody = {
      ...formData,
      startTime,
      endTime,
    }

    handleWeekPickerSubmit(requestBody)

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
          <p>
            <strong>Day:</strong> {day}
          </p>
          <p>
            <strong>Date:</strong> {moment(date).format('YYYY-MM-DD')}
          </p>
          <p>
            <strong>Start Time:</strong> {startTime}
          </p>
          <p>
            <strong>End Time:</strong> {endTime}
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
          <button type="submit">Submit Appointment</button>
        </form>
      </div>
      <button className="calendar-return" onClick={handleReturnClick}>
        Return to Owner Calendar
      </button>
    </>
  )
}
