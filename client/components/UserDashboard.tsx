import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { Appointment } from '../../models/Appointment'
import { getAllAppointmentApi } from '../api'

export default function UserDashboard() {
  const { user } = useAuth0()
  const navigate = useNavigate()
  const {
    data: appointment,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['appointment'], queryFn: getAllAppointmentApi })
  console.log(appointment, 'testing')

  if (isError) {
    return (
      <p className="data-messages">
        Having trouble locating the information...
      </p>
    )
  }

  if (!appointment || isLoading) {
    return <p className="data-messages">Trying to load the data...</p>
  }

  const handleReturnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    navigate('/user')
  }

  return (
    <>
      <div className="h1Headers">
        {user && <h1>{user?.given_name} Upcoming Appointments!</h1>}
      </div>
      <div className="user-appointments">
        <ul>
          {appointment.map((appointment: Appointment) => {
            return (
              <li
                className="individual-user-appointments"
                key={appointment.userId}
              >
                <b>Title:</b> {appointment.title} <br />
                <b>Description: </b>
                {appointment.description} <br />
                <b>Appointment Date:</b> {appointment.appointmentDate}
                <br />
                <b>Start Time:</b> {appointment.startTime} <br />
                <b>End Time:</b> {appointment.endTime}
              </li>
            )
          })}
        </ul>
      </div>

      <button className="calendar-return" onClick={handleReturnClick}>
        Return to Owner Calendar
      </button>
    </>
  )
}
