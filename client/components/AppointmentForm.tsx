import { useState } from 'react'
import { useParams } from 'react-router-dom'

interface RouteParams {
  day: string
  timeSlot: string
}

export default function AppointmentForm() {
  const { day, timeSlot } = useParams<RouteParams>()
  const [formData, setFormData] = useState({ title: '', description: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your logic to handle the form submission (e.g., save the appointment).
    console.log('Form submitted with data:', formData)
  }

  return (
    <>
      <h1>APPOINTMENT FORM</h1>
      <p>Day: {day}</p>
      <p>Time Slot: {timeSlot}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Appointment</button>
      </form>
    </>
  )
}
