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
    return <p>Having trouble locating the information...</p>
  }

  if (!appointment || isLoading) {
    return <p>Trying to load the data...</p>
  }

  const handleReturnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    navigate('/user')
  }

  return (
    <>
      <div className="h1Headers">
        <h1>User Upcoming Appointments!</h1>
      </div>
      <div className="userSignInDetail user-dashboard">
        {user && (
          <p>
            <b>Signed in as:</b> {user?.given_name}
          </p>
        )}
      </div>
      <div className="user-appointments">
        <ul>
          {appointment.map((appointment: Appointment) => {
            return (
              <li
                className="individual-user-appointments"
                key={appointment.userId}
              >
                Title: {appointment.title} <br />
                Description: {appointment.description} <br />
                Appointment Date: Monday 04 December 2023 <br />
                Start Time: {appointment.startTime} <br />
                End Time: {appointment.endTime}
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
