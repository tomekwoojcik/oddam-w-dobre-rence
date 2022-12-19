import React, { useContext } from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
import DatabaseContext from '../../context/databaseContext'
const FormLogin = () => {
    const { emailUser, setEmailUser, password, setPassword, loginInputError } = useContext(DatabaseContext)
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

export default FormLogin
