import { useNavigate } from 'react-router-dom'
import { Timeslot, TimeslotAppointment } from '../../models/Timeslot'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { deleteTimeslotApi, getAllTimeslotApi } from '../api'
import { useQuery } from '@tanstack/react-query'
import moment from 'moment'
import { useAuth0 } from '@auth0/auth0-react'

export default function OwnerDashboard() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { user } = useAuth0()
  const deleteMutation = useMutation(
    {
      mutationFn: deleteTimeslotApi,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['timeslot'],
        })
      },
    },
    []
  )

  const handleDeleteClick = (id: any) => {
    deleteMutation.mutate(id)
  }

  const {
    data: timeslot,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['timeslot'], queryFn: getAllTimeslotApi })

  if (isError) {
    return <p>Having trouble locating the information...</p>
  }

  if (!timeslot || isLoading) {
    return <p>Trying to load the data...</p>
  }

  const handleReturnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    navigate('/owner')
  }

  return (
    <>
      <div className="h1Headers">
        <h1>MY DASHBOARD!</h1>
      </div>
      <div>
        <ul id="ownerDashboardList">
          {timeslot.map((timeslot: TimeslotAppointment) => {
            return (
              <li key={timeslot.timeslotId}>
                <div id="ownerDashboardDateBox">
                  <div className="ownerDashboardDateBoxDateBlock">
                    <div className=" ownerDashboardDateBoxTitle">Date: </div>
                    <div className="ownerDashboardDateBoxContent">
                      {moment(timeslot.appointmentDate).format('MMMM DD, YYYY')}
                    </div>
                  </div>

                  <div className="ownerDashboardDateBoxDateBlock">
                    <div className=" ownerDashboardDateBoxTitle">Day: </div>
                    <div className="ownerDashboardDateBoxContent">
                      {timeslot.day}
                    </div>
                  </div>

                  <div className="ownerDashboardDateBoxDateBlock">
                    <div className="ownerDashboardDateBoxTitle">
                      Start Time:{' '}
                    </div>
                    <div className="ownerDashboardDateBoxContent">
                      {timeslot.startTime}
                    </div>
                  </div>

                  <div className="ownerDashboardDateBoxDateBlock">
                    <div className="ownerDashboardDateBoxTitle">End Time: </div>
                    <div className="ownerDashboardDateBoxContent">
                      {timeslot.endTime}
                    </div>
                  </div>
                </div>

                <div id="ownerDashboardDescription">
                  <div className="ownerDashboardDateBoxDescriptionBlock">
                    <div className="ownerDashboardDescriptionTitle">
                      <b>Meeting with: </b>
                      <p>{user?.given_name}</p>
                    </div>
                    <div className="ownerDashboardDescriptionContent"></div>
                  </div>

                  <div className="ownerDashboardDateBoxDescriptionBlock">
                    <div className="ownerDashboardDescriptionTitle">
                      <b>Appointment: </b> {timeslot.title}
                    </div>
                    <div className="ownerDashboardDescriptionContent"></div>
                  </div>

                  <div className="ownerDashboardDateBoxDescriptionBlock">
                    <div className="ownerDashboardDescriptionTitle">
                      <b>Description: </b>
                      {timeslot.description}
                    </div>
                    <div className="ownerDashboardDescriptionContent ownerDashboardDescriptionContentDescription"></div>
                  </div>
                </div>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteClick(timeslot.appointmentId)}
                >
                  Delete
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <button className="calendar-return" onClick={handleReturnClick}>
        Return to My Calendar
      </button>
    </>
  )
}
