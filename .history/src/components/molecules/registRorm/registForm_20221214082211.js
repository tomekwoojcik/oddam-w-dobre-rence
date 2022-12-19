import React from 'react'
import RegIn from '../../../pages/register/register'
import DecorationAssets from '../../atoms/decorationAssets/decorationAssets'
const Register = () => {
  return (
        <div className='loginForm'>
            <h3 className='logInHeader'>Załóż konto</h3>
            <DecorationAssets />
            <RegIn />
        </div>
  )
}

export default Register
