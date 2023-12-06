export interface Appointment {
  title: string
  description?: string
  appointmentDate: string
  startTime: string
  endTime: string
  userId?: number
}

export interface AppointmentInsert {
  title: string
  description?: string
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
