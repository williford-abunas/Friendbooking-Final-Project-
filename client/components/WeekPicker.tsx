import moment from 'moment'
import { useState } from 'react'
import { DatePicker } from 'rsuite'

const getDaysOfWeek = (startDate: moment.MomentInput) => {
  const daysOfWeek = []
  const currentDay = moment(startDate)

  for (let i = 0; i < 7; i++) {
    daysOfWeek.push({
      date: currentDay.toDate(),
      day: currentDay.format('dddd'),
    })
    currentDay.add(1, 'days')
  }

  return daysOfWeek
}

export default function WeekPicker({ onWeekChange }) {
  const [objWeek, setObjWeek] = useState({
    date: new Date(),
    dateFrom: new Date(),
    dateTo: new Date(),
    weekNumber: moment().isoWeek(),
  })

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
      daysOfWeek: getDaysOfWeek(date),
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

  const daysOfWeek = getDaysOfWeek(objWeek.date)

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
            onWeekChange({
              daysOfWeek: getDaysOfWeek(date),
              selecedWeek: {
                weekNumber: moment(date).isoWeek(),
                dateFrom: moment(date).startOf('isoWeek').toDate(),
                dateTo: moment(date).endOf('isoWeek').toDate(),
              },
            })
          }}
          renderValue={renderValue}
        />
        <div className="weekInfos">
          <div>
            <span className="dateTitle">
              <b>Week Number : </b>
            </span>
            <span className="dateValue">{objWeek.weekNumber}</span>
          </div>
          <div>
            <span className="dateTitle">
              <b>Start of Week : </b>
            </span>
            <span className="dateValue">
              {objWeek.dateFrom?.toDateString()}
            </span>
          </div>
          <div>
            <span className="dateTitle">
              <b>End of Week : </b>
            </span>
            <span className="dateValue">{objWeek.dateTo?.toDateString()}</span>
          </div>
          <div>
            <span className="dateTitle">
              <b>Days of Week:</b>
            </span>
            <div id="dayContainer">
              {daysOfWeek.map((day) => (
                <button id="userViewDays" key={day.date.toISOString()}>
                  {day.day}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
