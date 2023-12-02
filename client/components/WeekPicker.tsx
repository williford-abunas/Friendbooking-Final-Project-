import moment from 'moment'
import { useState } from 'react'
import { DatePicker } from 'rsuite'
import 'rsuite/dist/rsuite-no-reset.min.css'

export default function WeekPicker() {
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
