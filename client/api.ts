import request from 'superagent'
// import { Appointment } from '../models/Appointment.ts'
import { User } from '../models/User.ts'
import { Appointment } from '../models/Appointment.ts'

const URL = '/api/v1/friendbooking'

// Get all users
export async function getAllUserDb(): Promise<User[]> {
  const response = await request.get(URL)
  console.log(response + 'Check function one')
  return response.body as User[]
}

// Add user
export async function addUserDb() {}

// get user by ID
export async function getUserByIdDb(id: number): Promise<User[]> {
  const response = await request.get(`URL + ${id}`)
  console.log(response + 'Check function two')
  return response.body
}

// Add appointment
export async function addAppointment({
  title,
  description,
  startTime,
  endTime,
}: Appointment) {
  await request.post(URL).send({ title, description, startTime, endTime })
}

// Edit appointment
// export async function editAppointment({userId}): Appointment {
// await request.patch(URL + `${userId}`).send()
// }

// Delete Appointment
export async function deleteAppointment({ userId }: Appointment) {
  await request.delete(`URL + ${userId}/appointment`)
}

// interface AddFruitFunction {
//   fruit: FruitData
//   token: string
// }
// export async function addFruit({
//   fruit,
//   token,
// }: AddFruitFunction): Promise<Fruit> {
//   await sleep(1500)

//   return request
//     .post(`${rootUrl}/fruits`)
//     .set('Authorization', `Bearer ${token}`)
//     .send({ fruit })
//     .then((res) => res.body.fruit)
//     .catch(logError)
// }

// interface UpdateFruitFunction {
//   fruit: Fruit
//   token: string
// }
// export async function updateFruit({
//   fruit,
//   token,
// }: UpdateFruitFunction): Promise<Fruit> {
//   await sleep(1500)

//   return request
//     .put(`${rootUrl}/fruits/${fruit.id}`)
//     .set('Authorization', `Bearer ${token}`)
//     .send({ fruit })
//     .then((res) => res.body.fruit)
//     .catch(logError)
// }

// interface DeleteFruitFunction {
//   id: number
//   token: string
// }
// export async function deleteFruit({
//   id,
//   token,
// }: DeleteFruitFunction): Promise<void> {
//   await sleep(1500)

//   return request
//     .delete(`${rootUrl}/fruits/${id}`)
//     .set('Authorization', `Bearer ${token}`)
//     .then((res) => res.body)
//     .catch(logError)
// }

// function logError(err: Error) {
//   console.log(err)
//   if (err.message === 'Username Taken') {
//     throw new Error('Username already taken - please choose another')
//   } else if (err.message === 'Forbidden') {
//     throw new Error(
//       'Only the user who added the fruit may update and delete it'
//     )
//   } else {
//     console.error('Error consuming the API (in client/api.js):', err.message)
//     throw err
//   }
// }
