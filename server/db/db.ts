import connection from './connection'
const db = connection
import { User } from '../../models/User'
import { Appointment } from '../../models/Appointment'
import { Timeslot } from '../../models/Timeslot'

//get all users
export async function getAllUserDb(): Promise<User[]> {
  return db('users').select('*')
}

//get user by ID
export async function getUserByIdDb(id: number): Promise<User> {
  return db('users').where({ id }).first()
}

//get all appointments
export async function getAllAppointmentDb(): Promise<Appointment[]> {
  return db('appointment').select(
    'id',
    'title',
    'description',
    'appointment_date as appointmentDate',
    'start_time as startTime',
    'end_time as endTime'
  )
}

//get appointments by user id
export async function getAppointmentForUserDb(
  userId: number
): Promise<Appointment[]> {
  return db('appointment')
    .select(
      'id',
      'title',
      'description',
      'appointment_date as appointmentDate',
      'start_time as startTime',
      'end_time as endTime'
    )
    .where('user_id', userId)
    .returning('*')
}

//add user
export async function addUserDb(user: User): Promise<User> {
  const { username, role } = user
  const [result] = await db('users').insert({ username, role }).returning('*')
  return result
}

//add appointment
export async function addAppointmentDb(
  appointment: Appointment
): Promise<Appointment> {
  const { title, description, appointmentDate, startTime, endTime } =
    appointment
  const [result] = await db('appointment')
    .insert({
      title,
      description,
      appointment_date: appointmentDate,
      start_time: startTime,
      end_time: endTime,
    })
    .returning([
      'id',
      'title',
      'description',
      'appointment_date',
      'start_time',
      'end_time',
    ])
  return result
}

//update or edit appointment
export async function editAppointmentDb(
  id: number,
  appointment: Appointment
): Promise<Appointment[]> {
  return db('appointment').update(appointment).where('id', id).returning('*')
}

//delete appointment
export async function deleteAppointmentDb(id: number) {
  return db('appointment').delete().where('id', id)
}

//Get all timeslots
export async function getAllTimeslotDb(): Promise<Timeslot[]> {
  return db('timeslot').select(
    'id',
    'date',
    'start_time as startTime',
    'end_time as endTime'
  )
}

//Add new time slot
export async function addTimeslotDb(timeslot: Timeslot): Promise<Timeslot[]> {
  const { date, startTime, endTime } = timeslot
  const result = await db('timeslot')
    .insert({ date, start_time: startTime, end_time: endTime })
    .select('date', 'start_time as startTime', 'end_time as endTime')
    .returning('*')
  return result
}

//Delete time slot
export async function deleteTimeslotDb(id: number): Promise<number> {
  return db('timeslot').delete().where({ id: id })
}
