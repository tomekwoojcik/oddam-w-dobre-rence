/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import ReactPaginate from 'react-paginate'
import WhoWeHelpListItem from '../../atoms/whoWeHelpListItem/whoWeHelpListItem'
import DatabaseContext from '../../context/databaseContext'

const WhoWeHelpListArray = () => {
  const { database, arrayPaginate, pagesVisited, itemsPerPages, pageCount, changePage } = useContext(DatabaseContext)

  if (!database) return <p>loading...</p>
  let displayItems = null

  if (database) {
    displayItems = database.slice(pagesVisited, pagesVisited + itemsPerPages).map(el => <WhoWeHelpListItem key={el.id} name={el.organizationName} organizationGoal={el.GoalAndMission} items={el.stuff} />)
  }

  return (
    <ul className='whoWeHelpListArray'>
      {
        displayItems
        // arrayPaginate.map(el => <WhoWeHelpListItem key={el.id} name={el.organizationName} organizationGoal={el.GoalAndMission} items={el.stuff} />
      }
      <ReactPaginate previousLabel={'Prev'} nextLabel={'Next'} pageCount={pageCount} onPageChange={changePage} />
    </ul>
  )
}

export default WhoWeHelpListArray
