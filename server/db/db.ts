import connection from './connection'
const db = connection
import { User } from '../../models/User'
import { Appointment } from '../../models/Appointment'

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
  return db('appointments').select('*')
}

//get appointments by user id
export async function getAppointmentForUserDb(
  userId: number
): Promise<Appointment[]> {
  return db('appointments')
    .select(
      'id',
      'title',
      'description',
      'start_time as startTime',
      'end_time as endTime'
    )
    .where('user_id', userId)
    .returning('*')
}

//add user
export async function addUserDb(user: User): Promise<User> {
  const { username, role } = user
  const [result] = await db('user')
    .insert({ username, role })
    .returning([username, role])
  return result
}

//add appointment
export async function addAppointment(
  appointment: Appointment
): Promise<Appointment> {
  const { title, description, startTime, endTime, userId } = appointment
  const [result] = await db('appointment')
    .insert({
      title,
      description,
      start_time: startTime,
      end_time: endTime,
      user_id: userId,
    })
    .returning([
      'id',
      'title',
      'description',
      'start_time',
      'end_time',
      'user_id',
    ])
  return result
}

//update or edit appointment
export async function editAppointment(
  id: number,
  appointment: Appointment
): Promise<Appointment[]> {
  return db('appointment').update(appointment).where('id', id).returning('*')
}

//delete appointment
export async function deleteAppointment(id: number) {
  return db('appointment').delete().where('id', id)
}
