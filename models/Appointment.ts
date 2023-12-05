export interface Appointment {
  title: string
  description?: string
  appointmentDate: string
  startTime: string
  endTime: string
  userId?: number
}

export interface AppointmentDashboard {
  timeslotId: number
  day: string
  appointmentDate: string
  startTime: string
  endTime: string
  appointmentId: number
  title: string
  description: string
}
