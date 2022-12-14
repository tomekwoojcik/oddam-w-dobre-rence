import React, { useContext } from 'react'
import WhoWeHelpListItem from '../../atoms/whoWeHelpListItem/whoWeHelpListItem'
import DatabaseContext from '../../context/databaseContext'

const WhoWeHelpListArray = () => {
  const { database, arrayPaginate, pagesVisited, itemsPerPages } = useContext(DatabaseContext)

  if (!database) return <p>loading...</p>
  const displayItems = database.slice(pagesVisited, pagesVisited + itemsPerPages).map(())


  return (
    <ul className='whoWeHelpListArray'>
      {
        arrayPaginate.map(el => <WhoWeHelpListItem key={el.id} name={el.organizationName} organizationGoal={el.GoalAndMission} items={el.stuff} />)
      }
    </ul>
  )
}

export default WhoWeHelpListArray
