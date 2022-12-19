import React from 'react'
import { DatabaseProvider } from '../../components/context/databaseContext'
import Menu from '../../components/molecules/menu/menu'
import DecorationAssets from '../../components/atoms/decorationAssets/decorationAssets'
import ButtonsInRightPartContext from '../../components/atoms/buttonsInRightPartContext/buttonsInRightPartContext'
const LogOutView = () => {
  return (
    <DatabaseProvider>
      <div className='logOutView'>
        <Menu />
        <div className='contentLogOutView'>
          <h3 className='titleContextLogOutView'>Wylogowanie nastąpiło pomyślnie!</h3 >
          <DecorationAssets />
          <ButtonsInRightPartContext source={'/'} buttonName={'Strona główna'}/>
        </div>
      </div>
    </DatabaseProvider>
  )
}

export default LogOutView
