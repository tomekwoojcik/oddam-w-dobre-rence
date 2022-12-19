import React from 'react'
import DecorationAssets from '../../components/atoms/decorationAssets/decorationAssets'
import FormRegister from '../../components/molecules/formRegister/formRegister'
const Register = () => {
  return (
    <div style={{ backgroundColor: 'black', width: '100px', height: '100px' }}>
      <div className='loginForm'>
        <h3 className='logInHeader'>Zaloguj się</h3>
        <DecorationAssets />
        <FormRegister />
      </div>
    </div>
  )
}

export default Register
