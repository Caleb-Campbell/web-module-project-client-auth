import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <>
    <nav>
        <h2>
            FRIENDS DATABASE
        </h2>
        <NavLink to="/">LOGIN</NavLink>
        <NavLink to="/friends" >FRIENDLIST</NavLink>
        <NavLink to='/addfriend'>ADDFRIEND</NavLink>
        <NavLink to='/logout'> LOGOUT</NavLink>
    </nav>
    </>
  )
}
