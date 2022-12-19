import React from 'react'
import LoginForm from '../../components/molecules/loginForm/loginForm'
import Menu from '../../components/molecules/menu/menu'
import { DatabaseProvider } from '../../components/context/databaseContext'
const LogIn = () => {
  return (
    <DatabaseProvider>
      <div className='login-page' >
        <Menu />
        <LoginForm />
      </div>
      </DatabaseProvider >

  )
}

export default LogIn
