import React from 'react'
import { DatabaseProvider } from '../../components/context/databaseContext'
import Menu from '../../components/molecules/menu/menu'
import DecorationAssets from '../../components/atoms/decorationAssets/decorationAssets'
const LogOutView = () => {
  return (
    <DatabaseProvider>
      <div className='logOutView'>
        <Menu />
        <div className='contentLogOutView'>
          <h3 className='titleContextLogOutView'>Wylogowanie nastąpiło pomyślnie!</h3 >
          <DecorationAssets />
        </div>
      </div>
    </DatabaseProvider>
  )
}

export default LogOutView
