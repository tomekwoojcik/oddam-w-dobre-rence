import React from 'react'
import { NavLink } from 'react-router-dom'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
const FormLogin = () => {
  return (
        <form className='formLog'>
            <InputContactForm type={'email'} labelText={'Email'} />
            <InputContactForm type={'password'} labelText={'Hasło'} />
          <div className='btnRow'>
              <NavLink to={'/register'}>Załóź konto</NavLink>
          </div>
        </form>
  )
}

export default FormLogin
