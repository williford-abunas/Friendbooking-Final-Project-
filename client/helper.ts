import moment from 'moment'

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
