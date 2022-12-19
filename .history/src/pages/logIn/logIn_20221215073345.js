import React from 'react'
import SingUpContext from '../../components/context/signUpContext'
import LoginForm from '../../components/molecules/loginForm/loginForm'
import Menu from '../../components/molecules/menu/menu'

const LogIn = () => {
  return (
        <div className='login-page' >
          <Menu />
          <LoginForm />
        </div>
  )
}

export default LogIn
