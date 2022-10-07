import React, {useState} from 'react'

//components
import NavBar from './NavBar'

//utils

export default function FriendsList(props) {

  const {data} = props
  


  return (
    <div className='bigWrap'>
      <NavBar />
      <h3>FRIENDS LIST</h3>
      {
        data.map(friend => {
          return (
            <div key={friend.id} className='friend'>
              <h4>- {friend.name.toUpperCase()} - {friend.email.toUpperCase()}</h4>
            </div>
          )
        })
      }
    </div>
  )
}
