import React from 'react'
import { Link } from 'react-router-dom'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
const FormLogin = () => {
  return (
        <form className='formLog'>
            <InputContactForm type={'email'} labelText={'Email'} />
            <InputContactForm type={'password'} labelText={'Hasło'} />
          <div className='btnRow'>
              <Link to={'rejestracja'}>Załóź konto</Link>
          </div>
        </form>
  )
}

export default FormLogin
