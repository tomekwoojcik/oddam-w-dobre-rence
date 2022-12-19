import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'
import NavLoginLogout from '../navLoginLogout/navLoginLogout'
import NavMenu from '../navMenu/navMenu'

const Menu = () => {
  // const { user } = useContext(DatabaseContext)
  const { user } = useContext(DatabaseContext)
  return (
    <div className='menu'>
      <NavLoginLogout />
      {user ?  <NavMenu />}
    </div>
  )
}

export default Menu
