import React, { useContext } from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
import DatabaseContext from '../../context/databaseContext'
const FormRegister = () => {
  const { } = useContext(DatabaseContext)
  return (
        <form className='formReg'>
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
