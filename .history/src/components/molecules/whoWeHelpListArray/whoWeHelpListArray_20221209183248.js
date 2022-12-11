import React, { useContext } from 'react'
import WhoWeHelpListItem from '../../atoms/whoWeHelpListItem/whoWeHelpListItem'
import DatabaseContext from '../../context/databaseContext'

const WhoWeHelpListArray = () => {
  const { database } = useContext(DatabaseContext)
  console.log(database)
    
  if (!database) return <p>loading...</p>

  return (
        <ul className='whoWeHelpListArray'>
          {
              database.forEach(el => { return <WhoWeHelpListItem key={el.id} name={el.organizationName} organizationGoal={el.GoalAndMission} items={el.stuff} /> });
            }
        </ul>
  )
}

export default WhoWeHelpListArray
