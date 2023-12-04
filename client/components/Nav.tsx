// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserSignOut from './UserSignOut.tsx'
import OwnerSignOut from './OwnerSignOut.tsx'

export default function Nav() {
  // const [isDarkMode, setIsDarkMode] = useState(
  //   localStorage.getItem('darkMode') === 'true'
  // )

  // const toggleDarkMode = () => {
  //   const newMode = !isDarkMode
  //   setIsDarkMode(newMode)
  //   localStorage.setItem('darkMode', String(newMode))
  // }

  // useEffect(() => {
  //   // Update theme on mount and when isDarkMode changes
  //   document.body.classList.toggle('dark-mode', isDarkMode)

  //   // Dynamically switch stylesheets
  //   const link = document.getElementById('theme-stylesheet') as HTMLLinkElement
  //   link.href = isDarkMode ? 'dark.css' : 'styles.css'
  // }, [isDarkMode])

  return (
    <>
      <nav>
        <button>
          <Link to={'/'}>Home</Link>
        </button>
        <UserSignOut />
        {/* <OwnerSignOut /> */}
        {/* <button onClick={toggleDarkMode}>Toggle Dark Mode</button> */}
      </nav>
    </>
  )
}
