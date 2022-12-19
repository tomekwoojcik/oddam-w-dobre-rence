import React from 'react'
import { DatabaseProvider } from '../../components/context/databaseContext'
import Menu from '../../components/molecules/menu/menu'
import DecorationAssets from '../../components/atoms/decorationAssets/decorationAssets'
// import ButtonsInRightPartContext from '../../components/atoms/buttonsInRightPartContext/buttonsInRightPartContext'
import { NavLink } from 'react-router-dom'

const LogOutView = () => {
  return (
    <DatabaseProvider>
      <div className='logOutView'>
        <Menu />
        <div className='contentLogOutView'>
          <h3 className='titleContextLogOutView'>Wylogowanie nastąpiło pomyślnie!</h3 >
          <DecorationAssets />
          <NavLink className='buttonMenuContext' to={'/'}>{'Strona główna'}</NavLink>
          </div>
      </div>
    </DatabaseProvider>
  )
}

export default LogOutView
