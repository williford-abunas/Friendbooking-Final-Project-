import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

//GET api/v1/friendbooking
router.get('/', async (req, res): Promise<void> => {
  try {
    const user = await db.getAllUserDb()
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json('Error getting user')
  }
})

//POST api/v1/friendbooking
router.post('/', async (req, res): Promise<void> => {
  try {
    const user = req.body
    const newUser = await db.addUserDb(user)
    res.json(newUser)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error adding user')
  }
})

// POST api/v1/friendbooking/:userId/appointment
router.post('/:userId/appointment', async (req, res): Promise<void> => {
  try {
    const appointment = req.body
    const newAppointment = await db.addAppointment(appointment)
    res.json(newAppointment)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error adding appointment')
  }
})

//GET api/v1/friendbooking/:userId/appointment
router.get('/:userId/appointment', async (req, res): Promise<void> => {
  try {
    const userId = Number(req.params.userId)
    const appointment = await db.getAppointmentForUserDb(userId)
    res.json(appointment)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error getting appointment for user')
  }
})

//GET api/v1/friendbooking/appointment
router.get('/appointment', async (req, res): Promise<void> => {
  try {
    const appointmentArray = await db.getAllAppointmentDb()
    res.json(appointmentArray)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error getting appointment array')
  }
})

export default router
