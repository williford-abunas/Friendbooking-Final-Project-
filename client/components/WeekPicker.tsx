import moment from 'moment'
import { useState, useEffect } from 'react'
import { DatePicker } from 'rsuite'
import { getDaysOfWeek, getAvailableDays } from '../helper'
import { getAllTimeslotApi } from '../api'
import { Timeslot } from '../../models/Timeslot'

interface WeekPickerProps {
  onWeekChange: (selectedWeek: object) => void
}

export default function WeekPicker({ onWeekChange }: WeekPickerProps) {
  const [objWeek, setObjWeek] = useState({
    date: new Date(),
    dateFrom: new Date(),
    dateTo: new Date(),
    weekNumber: moment().isoWeek(),
  })
  const [timeSlot, setTimeSlot] = useState<Timeslot[]>([])
  const [availableDays, setAvailableDays] = useState<string[]>([])
  const [selectedDay, setSelectedDay] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const schedule = await getAllTimeslotApi()
        console.log('Fetched schedule:', schedule)
        setTimeSlot(schedule)
        const days = schedule.map((entry: Timeslot) => entry.day)
        setAvailableDays(days)
      } catch (error) {
        console.error('Error fetching owner schedule:', error)
      }
    }

    fetchData()
  }, [])

  const onChange = (date: Date) => {
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

  const renderValue = (date: Date) => {
    const weekNumber = moment(date).isoWeek()
    const year = moment(date).year()

    return `Week: ${weekNumber}, Year: ${year}`
  }

  const renderAvailableTimeDropdown = (selectedDay: string | null) => {
    if (!selectedDay) {
      return null
    }

    const availableTimesForDay = timeSlot.filter(
      (entry: Timeslot) => entry.day === selectedDay
    )

    console.log('Available Times for', selectedDay, availableTimesForDay)

    return (
      <div className="available-time-dropdown">
        {availableTimesForDay.length > 0 ? (
          <>
            <h3>
              Available Times for {selectedDay} ({availableTimesForDay[0].date})
            </h3>
            {availableTimesForDay.map((entry: Timeslot) => (
              <div key={entry.id}>
                {`${entry.startTime} - ${entry.endTime}`}
              </div>
            ))}
          </>
        ) : (
          <p>No available times for {selectedDay}</p>
        )}
      </div>
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
          value={objWeek.date}
          onChange={(date) => {
            onChange(date as Date)
          }}
          renderValue={renderValue}
        />
        {/* Available Days UI */}
        <div className="weekInfos">
          <div>
            <span className="dateTitle">
              <b>Available Days:</b>
            </span>
            {availableDays.map((day) => (
              <div key={day} className="day-button-container">
                <button
                  onClick={() => {
                    setSelectedDay(day)
                  }}
                >
                  {day}
                </button>
                {selectedDay === day &&
                  renderAvailableTimeDropdown(selectedDay)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
