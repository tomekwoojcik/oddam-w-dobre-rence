import React from 'react'
import ButtonsMenu from '../../atoms/buttonsMenu/buttonsMenu'

const NavMenu = () => {
  return (
        <ul className='buttonList'>
          <ButtonsMenu source={'/'} linkName={'Start'} />
          <ButtonsMenu source={'/'} linkName={'O co chodzi?'} />
          <ButtonsMenu source={'/'} linkName={'O nas'} />
          <ButtonsMenu source={'/'} linkName={'Fundacje i organizacje'} />
          <ButtonsMenu source={'/'} linkName={'Kontakt'} />
        </ul>
  )
}

export default NavMenu
