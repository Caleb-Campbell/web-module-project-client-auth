import React from 'react'
import { useNavigate } from 'react-router-dom'

import NavBar from './NavBar'

export default function Logout() {

    const navigate = useNavigate()

const logout = (e) => {
e.preventDefault()
localStorage.clear('token')
navigate('/')

}


  return (
    <div>
      <NavBar />
      <h3>LOGOUT</h3>
      <h5>ARE YOU SURE YOU WANT TO LOG OUT?</h5>
      <button onClick={logout} className='submit'>LOG OUT</button>
    </div>
  )
}
