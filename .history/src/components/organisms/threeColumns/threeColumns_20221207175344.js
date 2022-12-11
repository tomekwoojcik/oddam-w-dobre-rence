import React from 'react'
import OneColumn from '../../molecules/oneColumn/oneColumn'

const ThreeColumns = () => {
  return (
        <div className='threeColumns'>
          <OneColumn counter={'10'} title={'Oddanych worków'} text={''} />
          <OneColumn />
          <OneColumn />
        </div>
  )
}

export default ThreeColumns
