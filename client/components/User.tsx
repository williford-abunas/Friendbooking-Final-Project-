import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import WeekPicker from './WeekPicker'
import moment from 'moment'

const DaysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export default function Users() {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0()
  const { user } = useAuth0()

  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [selectedWeek, setSelectedWeek] = useState<{
    dateFrom: Date
    dateTo: Date
  } | null>(null)

  const dynamicDaysOfWeek = selectedWeek
    ? Array.from({ length: 7 }, (_, i) =>
        moment(selectedWeek.dateFrom).add(i, 'days').format('dddd')
      )
    : DaysOfWeek
  // const [dynamicDaysOfWeek, setDynamicDaysOfWeek] = useState<string[]>([])

  useEffect(() => {
    // Check authentication status and redirect if not authenticated
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect()
    }
  }, [isLoading, isAuthenticated, loginWithRedirect])

  const handleDayClick = (day: string, date: Date) => {
    setSelectedDay((prevDay) => (prevDay === day ? null : day))
  }

  const handleWeekSelect = (week, daysOfWeek) => {
    setSelectedWeek(week)
    setDynamicDaysOfWeek(daysOfWeek)
  }

  function TimeSlotsDropdown() {
    const timeSlots = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM']

    return (
      <div>
        {timeSlots.map((slot, index) => (
          <Link key={index} to={`/form/${selectedDay}/${slot}`}>
            <button id="timeSlotButton">{slot}</button>
          </Link>
        ))}
      </div>
    )
  }

  if (!isAuthenticated || isLoading) {
    return null
  }

  return (
    <>
      <div className="h1Headers">
        <h1>OWNER WEEKLY CALENDAR!</h1>
      </div>
      <div className="userSignInDetail">
        {user && (
          <p>
            <b>Signed in as:</b> {user?.given_name}
          </p>
        )}
      </div>
      <WeekPicker onSelectWeek={handleWeekSelect} />
      {dynamicDaysOfWeek.map((day, index) => (
        <div id="dayContainer" key={index}>
          <Link
            to={`/form/${day}/${moment(selectedWeek?.dateFrom).format(
              'YYYY-MM-DD'
            )}`}
          >
            <button
              id="userViewDays"
              onClick={() =>
                handleDayClick(
                  day,
                  moment(selectedWeek?.dateFrom).add(index, 'days').toDate()
                )
              }
            >
              {day}
            </button>
          </Link>
          <div id="dropdownTimeSlot">
            {selectedDay === day && <TimeSlotsDropdown />}
          </div>
        </div>
      ))}
    </>
  )
}
