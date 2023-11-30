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
