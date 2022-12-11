import React from 'react'
import ButtonsMenu from '../../atoms/buttonsMenu/buttonsMenu'

const NavMenu = () => {
  return (
        <ul>
          <ButtonsMenu source={'/'} linkName={'Start'} />
          <ButtonsMenu source={'/'} linkName={'O co chodzi?'} />
          <ButtonsMenu source={'/'} linkName={'O nas'} />
          <ButtonsMenu source={'/'} linkName={'Fundacje i organizacje'} />


        </ul>
  )
}

export default NavMenu
