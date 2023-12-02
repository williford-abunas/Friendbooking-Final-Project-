import { useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

export default function AppointmentForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const { day, timeSlot } = useParams()
  const [formData, setFormData] = useState(
    location.state?.formData || {
      title: '',
      description: '',
      startTime: '',
      endTime: '',
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch(
        '/api/v1/friendbooking/:userId/appointment',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      if (response.ok) {
        navigate('/form/confirmation', { state: { formData } })
        console.log(formData, 'Data passing correctly')
      } else {
        console.error('Failed to submit form data:', response.statusText)
      }
    } catch (error) {
      console.error('Error submitting form data:', error)
    }
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
            <input
              name="startTime"
              type="datetime-local"
              value={formData.startTime}
              onChange={handleChange}
              required
            />

            <label id="endTime" htmlFor="endTime">
              End Time:
            </label>
            <input
              value={formData.endTime}
              name="endTime"
              type="datetime-local"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit Appointment</button>
        </form>
      </div>
    </>
  )
}
