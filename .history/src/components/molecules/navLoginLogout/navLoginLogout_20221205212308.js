import React from 'react'
import ButtonsLoginLogout from '../../atoms/buttonsLoginLogout/buttonsLoginLogout'

const NavLoginLogout = () => {
  return (
        <ul>
          <ButtonsLoginLogout source={'logIn'} buttonName={'Zaloguj'} />
          <ButtonsLoginLogout source={'logOut'} buttonName={'Załóź konto'} />
        </ul>
  )
}

export default NavLoginLogout
