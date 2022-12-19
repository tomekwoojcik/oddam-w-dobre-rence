import React from 'react'
import SingUpContext from '../../components/context/signUpContext'
import LoginForm from '../../components/molecules/loginForm/loginForm'
import Menu from '../../components/molecules/menu/menu'

const LogIn = () => {
  return (
      <SingUpContext>
        <div className='login-page' >
          <Menu />
          <LoginForm />
        </div>
      </SingUpContext>
  )
}

export default LogIn
