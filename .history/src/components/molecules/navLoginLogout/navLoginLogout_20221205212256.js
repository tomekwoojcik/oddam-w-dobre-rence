import React from 'react'
import ButtonsLoginLogout from '../../atoms/buttonsLoginLogout/buttonsLoginLogout'

const NavLoginLogout = () => {
  return (
        <ul>
          <ButtonsLoginLogout source={'logIn'} buttonName={'Zaloguj'} />
          <ButtonsLoginLogout source={'logOut'} buttonName={'Załó'} />
        </ul>
  )
}

export default NavLoginLogout
