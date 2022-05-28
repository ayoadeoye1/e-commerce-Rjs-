import React from 'react'
import Welcome from './home-components/welcome'

const Account = () => {
  return (
    <div style={{ textAlign: 'center'}}>
      <Welcome />
      <input style={{ margin: 20}} type='mail' placeholder='enter email' required /><br />
      <input style={{ margin: 20}} type='password' placeholder='enter password' required /><br />
       <button style={{ margin: 20}}>log in</button><br />
        <i style={{ marginTop: 20}}>don't have an Account<button>sign-up</button></i>
    </div>
  )
}

export default Account