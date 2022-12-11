import React from 'react'
import DecorationAssets from '../../atoms/decorationAssets/decorationAssets'
import MenuRightPartContext from '../menuRightPartContext/menuRightPartContext'
import TextInHeader from '../textInHeader/textInHeader'

const RightPartContext = () => {
  return (
      <div className='rightPartContext'>
          <TextInHeader />
          <DecorationAssets />
          <MenuRightPartContext/>
        </div>
  )
}

export default RightPartContext
