import { useNavigate } from 'react-router-dom'
import { Timeslot } from '../../models/Timeslot'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { deleteTimeslotApi, getAllTimeslotApi } from '../api'
import { useQuery } from '@tanstack/react-query'
import moment from 'moment'

export default function OwnerDashboard() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
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

  const handleDeleteClick = (id) => {
    deleteMutation.mutate(id)
  }

  const {
    data: timeslot,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['timeslot'], queryFn: getAllTimeslotApi })

  if (isError) {
    return (
      <p className="data-messages">
        Having trouble locating the information...
      </p>
    )
  }

  if (!timeslot || isLoading) {
    return <p className="data-messages">Trying to load the data...</p>
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
          {timeslot.map((timeslot: Timeslot) => {
            return (
              <li key={timeslot.id}>
                <div id="ownerDashboardDateBox">
                  <div className="ownerDashboardDateBoxDateBlock">
                    <div className=" ownerDashboardDateBoxTitle">Date: </div>
                    <div className="ownerDashboardDateBoxContent">
                      {moment(timeslot.date).format('MMMM DD, YYYY')}
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
                      <b>Meeting: </b>
                    </div>
                    <div className="ownerDashboardDescriptionContent"></div>
                  </div>

                  <div className="ownerDashboardDateBoxDescriptionBlock">
                    <div className="ownerDashboardDescriptionTitle">
                      <b>Appointment: </b>
                    </div>
                    <div className="ownerDashboardDescriptionContent"></div>
                  </div>

                  <div className="ownerDashboardDateBoxDescriptionBlock">
                    <div className="ownerDashboardDescriptionTitle">
                      <b>Description: </b>
                    </div>
                    <div className="ownerDashboardDescriptionContent ownerDashboardDescriptionContentDescription"></div>
                  </div>
                </div>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteClick(timeslot.id)}
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
