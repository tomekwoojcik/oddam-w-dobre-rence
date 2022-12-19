import React, { useContext } from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
import DatabaseContext from '../../context/databaseContext'
const FormRegister = () => {
  const { emailUser, setEmailUser, password, setPassword, reapeatPassword, setReapeatPassword, registerInputError, registerHandle } = useContext(DatabaseContext)
  return (
        <form className='formReg'>
            <div className='form'>
                <InputContactForm handleInput={setEmailUser} value={emailUser} type={'email'} labelText={'Email'} />
                <InputContactForm handleInput={setPassword} value={password} type={'password'} labelText={'Hasło'} />
                <InputContactForm handleInput={setReapeatPassword} value={reapeatPassword} type={'password'} labelText={'Powtórz hasło'} />
            </div>
            <div className='btnRow'>
                <a className='linkLogin' href='/logowanie'>Zaloguj się</a>
                <button onClick={(e) => { registerHandle(e) }} className='btnLog'>Załóź konto</button>
            </div>
            {registerInputError && <p className='inputError'>{registerInputError}</p>}

        </form>

  )
}

export default FormRegister
