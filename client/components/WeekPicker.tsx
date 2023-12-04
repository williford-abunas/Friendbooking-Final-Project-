import moment from 'moment'
import { useState } from 'react'
import { DatePicker } from 'rsuite'
import 'rsuite/dist/rsuite-no-reset.min.css'

export default function WeekPicker({ onSelectWeek }) {
  const [objWeek, setObjWeek] = useState({
    date: new Date(),
    dateFrom: new Date(),
    dateTo: new Date(),
    weekNumber: moment().isoWeek(),
  })

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

  const onChange = (date: Date) => {
    const weekNumber = moment(date).isoWeek()
    const dateFrom = moment(date).startOf('isoWeek').toDate()
    const dateTo = moment(date).endOf('isoWeek').toDate()

    const selectedWeek = {
      dateFrom,
      dateTo,
    }

    setObjWeek({
      date,
      dateFrom,
      dateTo,
      weekNumber,
    })

    onSelectWeek(selectedWeek, getDaysOfWeek(date))
  }

  const renderValue = (date: Date) => {
    const weekNumber = moment(date).isoWeek()
    const year = moment(date).year()

    return `Week: ${weekNumber}, Year: ${year}`
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
          onChange={onChange}
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
        </div>
      </div>
    </>
  )
}
