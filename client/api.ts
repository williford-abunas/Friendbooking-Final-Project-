import request from 'superagent'
import { User } from '../models/User.ts'
import { Appointment } from '../models/Appointment.ts'

const URL = '/api/v1/friendbooking'

// Get all users
export async function getAllUserDb(): Promise<User[]> {
  const response = await request.get(URL)
  console.log(response + 'Check function one')
  return response.body as User[]
}

// get user by ID
export async function getUserByIdDb(id: number): Promise<User[]> {
  const response = await request.get(`URL/${id}`)
  console.log(response + 'Check function two')
  return response.body
}

// Add user
export async function addUserDb({ username, role }: User) {
  await request.post(URL).send({ username, role })
}

// Get all appointments
export async function getAllAppointmentDb() {
  const response = await request.get(`${URL}/appointment`)
  console.log(response + 'Check function four')
  return response.body as Appointment[]
}

// Get appointment by user id
export async function getAppointmentForUserDb({ userId }: Appointment) {
  const response = await request.get(`URL/${userId}/appointment`)
  console.log(response + 'Check function three')
  return response.body
}

// Add appointment
export async function addAppointment({
  userId,
  title,
  description,
  startTime,
  endTime,
}: Appointment) {
  await request
    .post(`URL/${userId}/appointment`)
    .send({ title, description, startTime, endTime })
}

// Edit appointment
// export async function editAppointment({userId}): Appointment {
// await request.patch(URL + `${userId}`).send()
// }

// Delete Appointment
export async function deleteAppointment({ userId }: Appointment) {
  await request.delete(`URL/${userId}/appointment`)
}
