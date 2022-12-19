import React from 'react'
import { Button } from 'react-scroll'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
const FormLogin = () => {
  return (
        <form className='formLog'>
            <InputContactForm type={'email'} labelText={'Email'} />
            <InputContactForm type={'password'} labelText={'Hasło'} />
            <div className='btnRow'>
              <Button>Zaloguj</Button>
            </div>
        </form>
  )
}

export default FormLogin
