import React from 'react'
import { DatabaseProvider } from '../../components/context/databaseContext'
import SingUpContext from '../../components/context/signUpContext'
import LoginForm from '../../components/molecules/loginForm/loginForm'
import Menu from '../../components/molecules/menu/menu'

const LogIn = () => {
  return (
    <DatabaseProvider>
      <SingUpContext>
        <div className='login-page' >
          <Menu />
          <LoginForm />
        </div>
      </SingUpContext>
    </DatabaseProvider>
  )
}

export default LogIn
