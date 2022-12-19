import React from 'react'
import ButtonsLogOut from '../../atoms/buttonsLogOut/buttonsLogOut'

const NavLoginLogoutIfUser = () => {
  return (
        <ul className='buttonMenuList'>
            <ButtonsLogOut buttonName={'Wyloguj'} />
        </ul>
  )
}

export default NavLoginLogoutIfUser
