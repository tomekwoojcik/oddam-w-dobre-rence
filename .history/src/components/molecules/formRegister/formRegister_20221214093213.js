import React, { useContext } from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
import DatabaseContext from '../../context/databaseContext'
const FormRegister = () => {
  const { email, setEmail, password, setPassword, reapeatPassword, setReapeatPassword } = useContext(DatabaseContext)
  return (
        <form className='formReg'>
            <div className='form'>
                <InputContactForm value={email} type={'email'} labelText={'Email'} />
                <InputContactForm value={password} type={'password'} labelText={'Hasło'} />
                <InputContactForm value={reapeatPassword} type={'password'} labelText={'Powtórz hasło'} />

            </div>
            <div className='btnRow'>
                <a className='linkLogin' href='/logowanie'>Zaloguj się</a>
                <button className='btnLog'>Załóź konto</button>
            </div>
        </form>
  )
}

export default FormRegister
