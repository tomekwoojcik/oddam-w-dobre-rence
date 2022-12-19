import React from 'react'
import ButtonsLogOut from '../../atoms/buttonsLogOut/buttonsLogOut'

const navLoginLogoutIfUser = () => {
  return (
        <ul className='buttonMenuList'>
            <ButtonsLogOut />
        </ul>
  )
}

export default navLoginLogoutIfUser
