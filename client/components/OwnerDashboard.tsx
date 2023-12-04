import { useNavigate } from 'react-router-dom'
import { Timeslot } from '../../models/Timeslot'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { deleteTimeslotApi, getAllTimeslotApi } from '../api'
import { useQuery } from '@tanstack/react-query'

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

          {timeslot.map((timeslot: Timeslot) => {
            return (
              <li key={timeslot.id}>
                <div id="ownerDashboardDateBox">
                  <div className="ownerDashboardDateBoxDateBlock">
                    <div className=" ownerDashboardDateBoxTitle">Date: </div>
                    <div className="ownerDashboardDateBoxContent">
                      {timeslot.date}
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
                      I am meeting with:{' '}
                    </div>
                    <div className="ownerDashboardDescriptionContent"></div>
                  </div>

                  <div className="ownerDashboardDateBoxDescriptionBlock">
                    <div className="ownerDashboardDescriptionTitle">
                      Title of the Appointment:{' '}
                    </div>
                    <div className="ownerDashboardDescriptionContent"></div>
                  </div>

                  <div className="ownerDashboardDateBoxDescriptionBlock">
                    <div className="ownerDashboardDescriptionTitle">
                      Description:{' '}
                    </div>
                    <div className="ownerDashboardDescriptionContent ownerDashboardDescriptionContentDescription"></div>
                  </div>
                </div>
                <button onClick={() => handleDeleteClick(timeslot.id)}>
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
