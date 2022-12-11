import React from 'react'
import NavLoginLogout from '../navLoginLogout/navLoginLogout'
import NavMenu from '../navMenu/navMenu'

const Menu = () => {
  return (
    <div className='menu'>
      <NavLoginLogout />
      <NavMenu />
    </div>
  )
}

export default Menu
