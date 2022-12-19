import React from 'react'
import IntroHeaderStepsContext from '../introHeaderStepsContext/introHeaderStepsContext'
import Menu from '../menu/menu'
const HeaderStepsContext = () => {
  return (
        <div className='headerStepsContext'>
            <Menu />
            <IntroHeaderStepsContext />

        </div>
  )
}

export default HeaderStepsContext
