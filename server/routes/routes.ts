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

//GET api/v1/friendbooking
router.get('/:id', async (req, res): Promise<void> => {
  try {
    const id = Number(req.params.id)
    const singleUser = await db.getUserByIdDb(id)
    res.json(singleUser)
  } catch (error) {
    console.error(error)
    res.status(500).json('Error getting user by ID')
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
    const newAppointment = await db.addAppointmentDb(appointment)
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
router.get('/user/dashboard', async (req, res): Promise<void> => {
  try {
    const appointmentArray = await db.getAllAppointmentDb()
    res.json(appointmentArray)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error getting appointment array')
  }
})

//GET api/v1/friendbooking/owner/dashboard
router.get('/owner/dashboard', async (req, res): Promise<void> => {
  try {
    const timeslotArray = await db.getAllTimeslotDb()
    res.json(timeslotArray)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error getting timeslot array')
  }
})

//POST api/v1/friendbooking/owner/dashboard
router.post('/owner/dashboard', async (req, res): Promise<void> => {
  try {
    const timeslot = req.body
    const newTimeslot = await db.addTimeslotDb(timeslot)
    res.json(newTimeslot)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error adding timeslot')
  }
})

//Delete api/v1/friendbooking/owner/dashboard
router.delete('/owner/dashboard/:id', async (req, res): Promise<void> => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }

  try {
    await db.deleteTimeslotDb(id)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not delete timeslot!')
  }
})
export default router
