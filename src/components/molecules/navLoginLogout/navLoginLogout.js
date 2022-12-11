import React from 'react'
import ButtonsLoginLogout from '../../atoms/buttonsLoginLogout/buttonsLoginLogout'

const NavLoginLogout = () => {
  return (
        <ul className='buttonMenuList'>
          <ButtonsLoginLogout source={'logowanie'} buttonName={'Zaloguj'} />
          <ButtonsLoginLogout source={'rejestracja'} buttonName={'Załóź konto'} />
        </ul>
  )
}

export default NavLoginLogout
