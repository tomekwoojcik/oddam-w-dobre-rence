import React from 'react'
import { DatabaseProvider } from '../../components/context/databaseContext'

import Menu from '../../components/molecules/menu/menu'
import RegistForm from '../../components/molecules/registForm/registForm'

const LogIn = () => {
  return (
    <DatabaseProvider>
      <div className='login-page' >
        <Menu />
        <RegistForm />
      </div>
    </DatabaseProvider>
  )
}

export default LogIn
