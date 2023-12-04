import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import WeekPicker from './WeekPicker'

export default function Users() {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0()
  const { user } = useAuth0()

  useEffect(() => {
    // Check authentication status and redirect if not authenticated
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

  const renderDayButtons = (daysOfWeek: any[]) => (
    <div id="dayContainer">
      {daysOfWeek.map((day) => (
        <button
          id="userViewDays"
          key={day.date.toISOString()}
          title={day.formattedDate}
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
          <p>
            <b className="word-styling">Signed in as:</b> {user?.given_name}
          </p>
        )}
      </div>
      <WeekPicker
        onWeekChange={handleWeekChange}
        renderDayButtons={renderDayButtons}
      />
    </>
  )
}
