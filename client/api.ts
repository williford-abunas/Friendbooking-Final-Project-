import request from 'superagent'
import { User } from '../models/User.ts'
import { Appointment } from '../models/Appointment.ts'
import { Timeslot } from '../models/Timeslot.ts'

const URL = '/api/v1/friendbooking'

// Get all users
export async function getAllUserApi(): Promise<User[]> {
  const response = await request.get(URL)
  console.log(response + 'Check function one')
  return response.body as User[]
}

// get user by ID
export async function getUserByIdApi(id: number): Promise<User[]> {
  const response = await request.get(`URL/${id}`)
  console.log(response + 'Check function two')
  return response.body
}

// Add user
export async function addUserApi({ username, role }: User) {
  await request.post(URL).send({ username, role })
}

// Get all appointments
export async function getAllAppointmentApi() {
  const response = await request.get(`${URL}/user/dashboard`)
  console.log(response + 'Check function four')
  return response.body as Appointment[]
}

// Get appointment by user id
export async function getAppointmentForUserApi({ userId }: Appointment) {
  const response = await request.get(`URL/${userId}/appointment`)
  console.log(response + 'Check function three')
  return response.body
}

// Add appointment
export async function addAppointmentApi({
  userId,
  title,
  description,
  appointmentDate,
  startTime,
  endTime,
}: Appointment) {
  await request
    .post(`URL/${userId}/appointment`)
    .send({ title, description, appointmentDate, startTime, endTime })
}

// Edit appointment
// export async function editAppointment({userId}): Appointment {
// await request.patch(URL + `${userId}`).send()
// }

// Delete Appointment
export async function deleteAppointmentApi({ userId }: Appointment) {
  await request.delete(`URL/${userId}/appointment`)
}

//Get all owner dashboard Timeslot
export async function getAllTimeslotApi() {
  const response = await request.get(`${URL}/owner/dashboard`)
  return response.body as Timeslot[]
}

//Add Owner timeslot
export async function addNewTimeslotApi({
  date,
  startTime,
  endTime,
}: Timeslot) {
  await request
    .post(`${URL}/owner/dashboard`)
    .send({ date, startTime, endTime })
}

//Delete Owner Dashboard Timeslot
export async function deleteTimeslotApi(id: number) {
  const timeslotResp = await request.delete(`${URL}/owner/dashboard/${id}`)
  return timeslotResp.body
}
