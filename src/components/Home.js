import React from 'react'

//components
import NavBar from './NavBar'
import LoginForm from './LoginForm'


export default function Home(props) {
  return (
    <div className='homeWrap'>
      <NavBar />
      <LoginForm submit={props.submit} formChange={props.formChange} creds={props.creds} />
    </div>
  )
}
