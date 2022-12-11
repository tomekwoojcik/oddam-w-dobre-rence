import React from 'react'
import Menu from '../menu/menu'
import RightPartContext from '../rightPartContext/rightPartContext'

const RightPart = () => {
  return (
    <div className='rightPartHeader'>
      <Menu />
      <RightPartContext />
    </div>
  )
}

export default RightPart
