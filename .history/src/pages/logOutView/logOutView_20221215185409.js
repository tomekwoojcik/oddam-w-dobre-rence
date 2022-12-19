import React from 'react'
import { DatabaseProvider } from '../../components/context/databaseContext'
import Menu from '../../components/molecules/menu/menu'
const LogOutView = () => {
  return (
    <DatabaseProvider>
      <div className='logOutView'>
        <Menu />
        <div className='contentLogOutView'>
          <h3 className='titleContextLogOutView'>Wylogowanie nastąpiło pomyślnie</h3 >
          <Decora
        </div>
      </div>
    </DatabaseProvider>
  )
}

export default LogOutView
