import moment from 'moment'
import { useState } from 'react'
import { DatePicker } from 'rsuite'
import { getDaysOfWeek } from '../helper'

interface WeekPickerProps {
  onWeekChange: (selectedWeek: object) => void
  renderDayButtons: (daysOfWeek: Date[]) => React.ReactNode
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
              selectedWeek: {
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
            {renderDayButtons(daysOfWeek)}
          </div>
        </div>
      </div>
    </>
  )
}
