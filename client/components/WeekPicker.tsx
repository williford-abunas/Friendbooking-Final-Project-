import moment from 'moment'

import { useState, useEffect } from 'react'
import { DatePicker } from 'rsuite'
import { getAllTimeslotApi } from '../api'
import { Timeslot } from '../../models/Timeslot'
import AppointmentForm from './AppointmentForm'

interface WeekPickerProps {
  onWeekChange: (selectedWeek: object) => void
}

export default function WeekPicker({ onWeekChange }: WeekPickerProps) {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)
  const handleSubmit = async (formData: any) => {
    console.log('WeekPicker Form Data:', formData)
  }

  const handleMakeAppointmentClick = () => {
    // Show the appointment form when the button is clicked
    setShowAppointmentForm(
      (prevShowAppointmentForm) => !prevShowAppointmentForm
    )
  }

  const initialDate = new Date()
  const [objWeek, setObjWeek] = useState({
    date: initialDate,
    dateFrom: moment(initialDate).startOf('isoWeek').toDate(),
    dateTo: moment(initialDate).endOf('isoWeek').toDate(),
    weekNumber: moment().isoWeek(),
  })
  const [timeSlot, setTimeSlot] = useState<Timeslot[]>([])
  const [availableDays, setAvailableDays] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const schedule = await getAllTimeslotApi()
        console.log('Fetched schedule:', schedule)
        setTimeSlot(schedule)
      } catch (error) {
        console.error('Error fetching owner schedule:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const availableDaysForWeek = timeSlot
      .filter(
        (entry: Timeslot) => moment(entry.date).isoWeek() === objWeek.weekNumber
      )
      .map((entry: Timeslot) => entry.day)

    setAvailableDays(availableDaysForWeek)
  }, [timeSlot, objWeek.weekNumber])

  const onChange = async (date: Date) => {
    const weekNumber = moment(date).isoWeek()
    const dateFrom = moment(date).startOf('isoWeek').toDate()
    const dateTo = moment(date).endOf('isoWeek').toDate()

    setObjWeek({
      date,
      dateFrom,
      dateTo,
      weekNumber,
    })

    onWeekChange({
      selectedWeek: {
        weekNumber,
        dateFrom,
        dateTo,
      },
    })
  }

  const renderAvailableTimes = (day: string) => {
    const availableTimesForDay = timeSlot.filter(
      (entry: Timeslot) =>
        entry.day === day && moment(entry.date).isoWeek() === objWeek.weekNumber
    )

    return (
      <>
        <div className="availableDayContainer">
          <h3 className="data-message">
            Available Times for {day}
            {availableTimesForDay.length > 0 ? (
              <>
                {' '}
                ({moment(availableTimesForDay[0].date).format('YYYY-MM-DD')})
              </>
            ) : (
              ''
            )}
          </h3>
          {availableTimesForDay.length > 0 ? (
            <div>
              {availableTimesForDay.map((entry: Timeslot, index) => (
                <div key={index}>
                  <button>{`${entry.startTime} - ${entry.endTime}`}</button>
                  <button onClick={handleMakeAppointmentClick}>
                    Make Appointment
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="data-message">No available times for {day}</p>
          )}
        </div>
        {showAppointmentForm && availableTimesForDay.length > 0 && (
          <AppointmentForm
            day={day}
            date={availableTimesForDay[0].date}
            startTime={availableTimesForDay[0]?.startTime || null}
            endTime={availableTimesForDay[0]?.endTime || null}
            handleWeekPickerSubmit={handleSubmit}
          />
        )}
      </>
    )
  }

  return (
    <>
      <div className="weekPicker">
        <h1>Pick a Week!</h1>
        <DatePicker
          placeholder="Week Picker"
          isoWeek
          showWeekNumbers
          value={null}
          defaultValue={null}
          onChange={(date) => onChange(date as Date)}
        />
        {objWeek.weekNumber && (
          <div className="weekInfos">
            <div>
              {availableDays.length > 0 && objWeek.weekNumber ? (
                availableDays.map((day) => <>{renderAvailableTimes(day)}</>)
              ) : (
                <p className="data-message">
                  Sorry, the owner is busy on these days. Please pick another
                  week.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
