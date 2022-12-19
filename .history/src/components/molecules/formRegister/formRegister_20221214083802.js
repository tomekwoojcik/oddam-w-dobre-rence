import React from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
const FormRegister = () => {
  return (
        <form className='formLog'>
            <div className='form'>
                <InputContactForm type={'email'} labelText={'Email'} />
                <InputContactForm type={'password'} labelText={'Hasło'} />
                <InputContactForm type={'password'} labelText={'Powtórz hasło'} />

            </div>
            <div className='btnRow'>
                <a className='linkLogin' href='/logowanie'>Zaloguj się</a>
                <button className='btnLog'>Załóź konto</button>
            </div>
        </form>
  )
}

export default FormRegister
