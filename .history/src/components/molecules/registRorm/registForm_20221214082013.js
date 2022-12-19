import React from 'react'
import DecorationAssets from '../../components/atoms/atoms/decorationAssets/decorationAssets'
import FormRegister from '../../components/molecules/formRegister/formRegister'
const Register = () => {
  return (
        <div className='loginForm'>
            <h3 className='logInHeader'>Załóż konto</h3>
            <DecorationAssets />
            <FormRegister />
        </div>
  )
}

export default Register
