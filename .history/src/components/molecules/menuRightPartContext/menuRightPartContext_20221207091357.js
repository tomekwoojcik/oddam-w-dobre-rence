import React from 'react'
import ButtonsInRightPartContext from '../../atoms/buttonsInRightPartContext/buttonsInRightPartContext'

const MenuRightPartContext = () => {
  return (
      <ul className='menuRightPartContext'>
          <ButtonsInRightPartContext source={'#'} buttonName={'Oddaj rzeczy'} />
          <ButtonsInRightPartContext source={'#'} buttonName={'Zorganizuj '} />
    </ul>
  )
}

export default MenuRightPartContext
