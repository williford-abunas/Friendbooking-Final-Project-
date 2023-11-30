import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'
import Homepage from './components/Homepage.tsx'
import User from './components/User.tsx'
import Owner from './components/Owner.tsx'
import LogIn from './components/LogIn.tsx'
import AppointmentForm from './components/AppointmentForm.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<Homepage />} />
    <Route path="user" element={<User />} />
    <Route path="owner" element={<Owner />} />
    <Route path="login" element={<LogIn />} />
    <Route path="form/:day/:timeSlot" element={<AppointmentForm />} />
  </Route>
)
