import React from 'react'
import ButtonsLoginLogout from '../../atoms/buttonsLoginLogout/buttonsLoginLogout'

const NavLoginLogout = () => {
  return (
        <ul className=''>
          <ButtonsLoginLogout source={'logIn'} buttonName={'Zaloguj'} />
          <ButtonsLoginLogout source={'logOut'} buttonName={'Załóź konto'} />
        </ul>
  )
}

export default NavLoginLogout
