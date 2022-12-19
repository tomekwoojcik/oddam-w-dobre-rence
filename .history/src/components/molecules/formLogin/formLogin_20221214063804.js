import React from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
const FormLogin = () => {
  return (
        <form className='formLog'>
          <InputContactForm type={'email'} labelText={'Email'} />
          <InputContactForm type={'password'} labelText={'Hasło'} />

        </form>
  )
}

export default FormLogin
