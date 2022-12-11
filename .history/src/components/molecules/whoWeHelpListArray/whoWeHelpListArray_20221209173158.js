import React, { useContext } from 'react'
import WhoWeHelpListItem from '../../atoms/whoWeHelpListItem/whoWeHelpListItem'
import DatabaseContext from '../../context/databaseContext'

const WhoWeHelpListArray = () => {
  const { database } = useContext(DatabaseContext)
  return (
      <ul className='whoWeHelpListArray'>
          {
            database.map(el=>{return <WhoWeHelpListItem key={el.} />})
        }
    </ul>
  )
}

export default WhoWeHelpListArray
