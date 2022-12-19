import React, { useContext } from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
import DatabaseContext from '../../context/databaseContext'
const FormLogin = () => {
  const { emailUser, setEmailUser, password, setPassword, loginInputError, logInHandle } = useContext(DatabaseContext)
  return (
        <form className='formLog'>
            <div className='form'>
                <InputContactForm value={emailUser} handleInput={setEmailUser} type={'email'} labelText={'Email'} />
                <InputContactForm value={password} handleInput={setPassword} type={'password'} labelText={'Hasło'} />
            </div>
            <div className='btnRow'>
                <a className='linkLogin' href='/rejestracja'>Załóź konto</a>
                <button onClick={(e) => { logInHandle(e) }} className='btnLog'>Zaloguj</button>
            </div>
            {loginInputError && <p className='inputError'>{loginInputError}</p>}

        </form>
  )
}

export default FormLogin
