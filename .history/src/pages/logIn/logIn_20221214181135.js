import React from 'react'
import { DatabaseProvider } from '../../components/context/databaseContext'
import LoginForm from '../../components/molecules/loginForm/loginForm'
import Menu from '../../components/molecules/menu/menu'

const LogIn = () => {
  return (
    <DatabaseProvider>
      <div className='login-page' >
        <Menu />
        <LoginForm />
      </div>
    </DatabaseProvider>
  )
}

export default LogIn
