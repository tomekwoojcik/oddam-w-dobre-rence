import React from 'react'
import DecorationAssets from '../../components/atoms/decorationAssets/decorationAssets'
import FormRegister from '../../components/molecules/formRegister/formRegister'
const Register = () => {
  return (
    <div className='form'>
      <div className='loginForm'>
        <h3 className='logInHeader'>Zaloguj się</h3>
        <DecorationAssets />
        <FormRegister />
      </div>
    </div>
  )
}

export default Register
