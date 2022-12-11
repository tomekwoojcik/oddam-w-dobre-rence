import React from 'react'
import OneColumn from '../../molecules/oneColumn/oneColumn'

const ThreeColumns = () => {
  return (
        <div className='threeColumns'>
          <OneColumn counter={'10'} title={'Oddanych worków'} text={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'} />
          <OneColumn counter={'5'} title={'Wspartych organizacji'} text={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'} />
          <OneColumn counter={'7'} title={'Zorganizowanych zbiórek'} text={'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'} />
        </div>
  )
}

export default ThreeColumns
