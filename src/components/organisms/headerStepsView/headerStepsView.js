import React from 'react'
import HeaderStepsImg from '../../atoms/headerStepsImg/headerStepsImg'
import { DatabaseProvider } from '../../context/databaseContext'
import HeaderStepsContext from '../../molecules/headerStepsContext/headerStepsContext'

const HeaderStepsView = () => {
  return (
        <DatabaseProvider>
            <div className='headerStepsView'>
                <HeaderStepsImg />
                <HeaderStepsContext />
            </div>
        </DatabaseProvider>
  )
}

export default HeaderStepsView
