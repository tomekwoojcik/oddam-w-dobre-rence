import React from 'react'
import HeaderStepsImg from '../../atoms/headerStepsImg/headerStepsImg'
import HeaderStepsContext from '../../molecules/headerStepsContext/headerStepsContext'

const HeaderStepsView = () => {
  return (
      <div className='headerStepsView'>
        <HeaderStepsImg/>
        <HeaderStepsContext/>
      </div>
  )
}

export default HeaderStepsView
