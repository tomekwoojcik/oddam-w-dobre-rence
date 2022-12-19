import React from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
const FormLogin = () => {
  return (
        <form className='formLog'>
            <InputContactForm type={'email'} labelText={'Email'} />
            <InputContactForm type={'password'} labelText={'Hasło'} />
            <div className='btnRow'>
                <a href='/rejestracja'>Załóź konto</a>
            </div>
        </form>
  )
}

export default FormLogin
