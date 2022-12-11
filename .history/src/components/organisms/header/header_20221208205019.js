import React, { useContext } from 'react'
import DatabaseContext from '../../components/context/databaseContext'
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
