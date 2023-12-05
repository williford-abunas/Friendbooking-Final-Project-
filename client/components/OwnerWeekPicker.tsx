import moment from 'moment'
import { useState } from 'react'
import { DatePicker } from 'rsuite'
import { getDaysOfWeek } from '../helper'
import 'rsuite/dist/rsuite-no-reset.min.css'

interface WeekPickerProps {
  onWeekChange: (selectedWeek: object) => void
  renderDayButtons: (daysOfWeek: any[]) => React.ReactNode
}

export default function WeekPicker({
  onWeekChange,
  renderDayButtons,
}: WeekPickerProps) {
  const [objWeek, setObjWeek] = useState({
    date: new Date(),
    dateFrom: new Date(),
    dateTo: new Date(),
    weekNumber: moment().isoWeek(),
    day: moment().format('dddd'),
  })

  const onChange = (date: Date) => {
    const weekNumber = moment(date).isoWeek()
    const dateFrom = moment(date).startOf('isoWeek').toDate()
    const dateTo = moment(date).endOf('isoWeek').toDate()
    const day = moment(date).format('dddd')

    setObjWeek({
      date,
      dateFrom,
      dateTo,
      weekNumber,
      day,
    })

    onWeekChange({
      daysOfWeek: getDaysOfWeek(date),
      selectedWeek: {
        weekNumber,
        dateFrom,
        dateTo,
        day,
      },
    })
  }

  const renderValue = (date: Date) => {
    const weekNumber = moment(date).isoWeek()
    const year = moment(date).year()

    return `Week: ${weekNumber}, Year: ${year}`
  }

  const daysOfWeek = getDaysOfWeek(objWeek.date)
  console.log(daysOfWeek)

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
              selectedWeek: {
                weekNumber: moment(date).isoWeek(),
                dateFrom: moment(date).startOf('isoWeek').toDate(),
                dateTo: moment(date).endOf('isoWeek').toDate(),
                day: moment(date).format('dddd'),
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
            {renderDayButtons(daysOfWeek)}
          </div>
        </div>
      </div>
    </>
  )
}
