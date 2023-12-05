import moment from 'moment'
import { getAllTimeslotApi } from './api'
import { Timeslot } from '../models/Timeslot'

export const getDaysOfWeek = (startDate: moment.MomentInput) => {
  const daysOfWeek = []
  const currentDay = moment(startDate)

  for (let i = 0; i < 7; i++) {
    daysOfWeek.push({
      date: currentDay.toDate(),
      day: currentDay.format('dddd'),
      formattedDate: currentDay.format('MMM DD YYYY'),
    })
    currentDay.add(1, 'days')
  }

  return daysOfWeek
}

export const getAvailableDays = async () => {
  try {
    // Fetch owner's schedule from the API using your function
    const ownerSchedule = await getAllTimeslotApi()

    // Extract available days from the fetched schedule
    const availableDays = ownerSchedule.map((entry: Timeslot) => entry.day)

    return availableDays
  } catch (error) {
    console.error('Error fetching owner schedule:', error)
    return []
  }
}
