import React from 'react'
import DecorationAssets from '../../atoms/decorationAssets/decorationAssets'
import FormLogin from '../formLogin/formLogin'
const LoginForm = () => {
  return (
        <div className='loginForm'>
            <h3 className='logInHeader'>Zaloguj się</h3>
          <DecorationAssets />
          <FormLogin/>
        </div>
  )
}

export default LoginForm
