import React from 'react'
import ButtonsLogOut from '../../atoms/buttonsLogOut/buttonsLogOut'

const navLoginLogoutIfUser = () => {
  return (
        <ul className='buttonMenuList'>
            <ButtonsLogOut buttonName={'Wyloguj'} />
        </ul>
  )
}

export default navLoginLogoutIfUser
