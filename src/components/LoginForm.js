import React from 'react'

export default function LoginForm(props) {

  const {username, password} = props.creds

  return (
    <div className='formWrap bigWrap'>
        <h3>LOGIN</h3>
      <form onSubmit={props.submit}>
        <label>
            USERNAME
            <input onChange={props.formChange} name='username' value={username} />
        </label>
        <label>
            PASSWORD
            <input onChange={props.formChange} name='password' value={password} />
        </label>
        <button  className='submit'>SUBMIT</button>
      </form>
    </div>
  )
}
