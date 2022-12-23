import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const WhoDoYouWantToHelpButtonList = () => {
  const { whoDoYouWantToHelpArray, handleWhoDoYouWantToHelpButtonList,  } = useContext(DatabaseContext)
  return (
        <ul className='whoDoYouWantToHelpButtonList'>
            {whoDoYouWantToHelpArray.map((el) => {
              return (<li className='whoDoYouWantListItem' key={el}><button style={} onClick={(e) => { handleWhoDoYouWantToHelpButtonList(e) }} className = 'whoDoYouWantButton' > { el }</button></li >)
            })}
        </ul >
  )
}

export default WhoDoYouWantToHelpButtonList
