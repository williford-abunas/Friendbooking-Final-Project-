import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import WeekPicker from './WeekPicker'
import moment from 'moment'

export default function Users() {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0()
  const { user } = useAuth0()
  const navigate = useNavigate()
  const [selectedDay, setSelectedDay] = useState<string | null>(null)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect()
    }
  }, [isLoading, isAuthenticated, loginWithRedirect])

  if (!isAuthenticated || isLoading) {
    return null
  }

  const handleWeekChange = (selectedWeek: object) => {
    console.log('Selected Week Changed:', selectedWeek)
  }

  const handleDayButtonClick = (day: string, date: string) => {
    const formattedDate = moment(date).format('YYYY-MM-DD')
    navigate(`/form/${day}/${formattedDate}`)
  }

  const renderDayButtons = (daysOfWeek: []) => (
    <div id="dayContainer">
      {daysOfWeek.map((day) => (
        <button
          id="userViewDays"
          key={day.date.toISOString()}
          title={day.formattedDate}
          onClick={() => {
            setSelectedDay(day.day)
            handleDayButtonClick(day.day, day.date)
          }}
        >
          {day.day}
        </button>
      ))}
    </div>
  )

  return (
    <>
      <div className="h1Headers">
        <h1>OWNER WEEKLY CALENDAR!</h1>
      </div>
      <div className="userSignInDetail user-dashboard">
        {user && (
          <h2>
            <b className="word-styling">Signed in as:</b> {user?.given_name}
          </h2>
        )}
      </div>
      <WeekPicker
        onWeekChange={handleWeekChange}
        renderDayButtons={renderDayButtons}
      />
    </>
  )
}
