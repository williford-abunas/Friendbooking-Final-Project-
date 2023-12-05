import { useState } from 'react'
import OwnerWeekPicker from './OwnerWeekPicker'
import TimeSlotsFormDropdown from './TimeSlotsFormDropdown'

export default function Owner() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null)

  const handleDayClick = (day: string) => {
    setSelectedDay((prevDay) => (prevDay === day ? null : day))
  }

  const handleWeekChange = (selectedWeek: any) => {
    console.log('Selected Week:', selectedWeek)
  }

  const renderDayButtons = (daysOfWeek: any[]) => (
    <div id="dayContainer">
      {daysOfWeek.map((day) => (
        <div key={day.date.toISOString()}>
          <button
            id="userViewDays"
            title={day.day}
            onClick={() => {
              handleDayClick(day.day)
            }}
          >
            {day.day}
          </button>
          {selectedDay === day.day && (
            <div>
              <TimeSlotsFormDropdown />
            </div>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <>
      <div className="h1Headers">
        <h1>MY CALENDAR!</h1>
      </div>
      <OwnerWeekPicker
        onWeekChange={handleWeekChange}
        renderDayButtons={renderDayButtons}
        onDayClick={handleDayClick}
      />
    </>
  )
}
