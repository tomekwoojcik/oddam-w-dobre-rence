import React from 'react'
import { DatabaseProvider } from '../../components/context/databaseContext'
import Menu from '../../components/molecules/menu/menu'
const LogOutView = () => {
  return (
    <DatabaseProvider>
      <div className='logOutView'>
        <Menu />
      </div>
    </DatabaseProvider>
  )
}

export default LogOutView
