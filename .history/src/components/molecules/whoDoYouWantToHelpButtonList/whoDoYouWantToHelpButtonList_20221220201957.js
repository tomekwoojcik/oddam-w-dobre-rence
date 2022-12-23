import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const WhoDoYouWantToHelpButtonList = () => {
  const { } = useContext(DatabaseContext)
  return (
        <ul className='whoDoYouWantToHelpButtonList'>
        </ul>
  )
}

export default WhoDoYouWantToHelpButtonList
