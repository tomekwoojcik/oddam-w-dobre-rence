import React from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
const FormRegister = () => {
  return (
        <form className='formLog'>
            <div className='form'>
                <InputContactForm type={'email'} labelText={'Email'} />
                <InputContactForm type={'password'} labelText={'Hasło'} />
            </div>
            <div className='btnRow'>
                <a className='linkLogin' href='/rejestracja'>Załóź konto</a>
                <button className='btnLog'>Zaloguj</button>
            </div>
        </form>
  )
}

export default FormRegister
