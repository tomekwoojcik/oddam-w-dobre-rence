import React from 'react'

const Register = () => {
  return (
    <div style={{ backgroundColor: 'black', width: '100px', height: '100px' }}>
      <div className='loginForm'>
        <h3 className='logInHeader'>Zaloguj się</h3>
        <DecorationAssets />
        <FormLogin />
      </div>
    </div>
  )
}

export default Register
