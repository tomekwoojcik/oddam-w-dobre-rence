import React from 'react'
import PhotoInHeader from '../../atoms/photoInHeader/photoInHeader'
import RightPart from '../../molecules/rightPart/rightPart'
const Header = () => {
  const { data } = useContext(DatabaseContext)
  console.log(data)
  return (
    <header className='header'>
      <PhotoInHeader />
      <RightPart />
    </header>

  )
}

export default Header
