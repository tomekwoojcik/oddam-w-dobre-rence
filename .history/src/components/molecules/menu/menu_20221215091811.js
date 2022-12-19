import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'
import NavLoginLogout from '../navLoginLogout/navLoginLogout'
import NavMenu from '../navMenu/navMenu'
import NavLoginLogoutIfUser from '../navLoginLogoutIfUser/navLoginLogoutIfUser'
const Menu = () => {
  console.log(user)
  // const { user } = useContext(DatabaseContext)
  const { user } = useContext(DatabaseContext)
  return (
    <div className='menu'>
      {user ? <NavLoginLogout /> : <NavLoginLogoutIfUser />}
      {<NavMenu />}
    </div>
  )
}

export default Menu
