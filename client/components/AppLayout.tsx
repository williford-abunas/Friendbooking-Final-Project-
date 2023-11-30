import { Outlet } from 'react-router-dom'
import Footer from './Footer.tsx'
import Nav from './Nav.tsx'

export default function AppLayout() {
  return (
    <>
      <main>
        <Nav />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}
