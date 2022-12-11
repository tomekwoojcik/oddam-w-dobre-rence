import React from 'react'
import Menu from '../../molecules/menu/menu'
import PhotoInHeader from '../../atoms/photoInHeader/photoInHeader'
const Header = () => {
  return (
    <header className='header'>
      <Menu />
      <PhotoInHeader/>
    </header>

  )
}

export default Header
