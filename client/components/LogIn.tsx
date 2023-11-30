import React, { useState } from 'react'

export default function LogIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your logic for handling the form submission (e.g., authentication).
    console.log('Form submitted with data:', formData)
  }

  return (
    <>
      <div className="h1Headers">
        <h1>WELCOME TO FRIEND-BOOKING-APP!</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div>
          <button type="submit">Login</button>
          <button type="submit">Sign in with Google</button>
        </div>
      </form>
    </>
  )
}
