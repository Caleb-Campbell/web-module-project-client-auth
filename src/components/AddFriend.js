import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


import NavBar from './NavBar'

export default function AddFriend(props) {

    const navigate = useNavigate()

    const [info, setInfo] = useState({
        name: '',
        email: ''
    })

    const change = ( e ) =>{
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFriend ={
            name: info.name,
            email: info.email
        }
        props.addBud(newFriend)
        navigate('/friends')

    }

  return (
    <div>
      <NavBar />
      <h3>ADD FRIEND</h3>
      <form onSubmit={handleSubmit} >
        <label>
            FRIEND NAME
            <input onChange={change} value={info.name} name='name'  />
        </label>
        <label>
            FRIEND EMAIL
            <input onChange={change} value={info.email} name='email'  />
        </label>
        <button  className='submit'>SUBMIT</button>
      </form>
    </div>
  )
}
