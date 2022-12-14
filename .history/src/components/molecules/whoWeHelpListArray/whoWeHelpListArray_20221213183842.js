import React, { useContext } from 'react'
import WhoWeHelpListItem from '../../atoms/whoWeHelpListItem/whoWeHelpListItem'
import DatabaseContext from '../../context/databaseContext'
import ReactPaginate from 'react-paginate'

const WhoWeHelpListArray = () => {
  const { database } = useContext(DatabaseContext)
  const { paginate, setPaginate } = useContext(database.slice(0, 3))
  console.log(database)

  if (!database) return <p>loading...</p>

  return (
    <ul className='whoWeHelpListArray'>
      {
        paginate.map(el => <WhoWeHelpListItem key={el.id} name={el.organizationName} organizationGoal={el.GoalAndMission} items={el.stuff} />)
      }
    </ul>
  )
}

export default WhoWeHelpListArray
