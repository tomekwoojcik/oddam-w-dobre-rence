import React from 'react'
import PhotoInHeader from '../../atoms/photoInHeader/photoInHeader'
import RightPart from '../../molecules/rightPart/rightPart'
const Header = () => {
  return (
    <header className='header'>
      <PhotoInHeader />
      <RightPart />
    </header>

  )
}

export default Header
