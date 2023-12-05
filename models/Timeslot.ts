export interface Timeslot {
  id: number
  date: string
  day: string
  startTime: string
  endTime: string
}

export interface TimeslotAppointment {
  timeslotId: number
  day: string
  appointmentDate: string
  startTime: string
  endTime: string
  appointmentId: number
  title: string
  description: string
}
