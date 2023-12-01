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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/form/confirmation', { state: { formData } })
    // Add your logic to handle the form submission (e.g., save the appointment).
    console.log('Form submitted with data:', formData)
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
              type="text"
              id="title"
              name="title"
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
              value={formData.startTime}
              onChange={handleChange}
              required
            />

            <label id="endTime" htmlFor="endTime">
              End Time:
            </label>
            <input
              name="endTime"
              value={formData.endTime}
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
