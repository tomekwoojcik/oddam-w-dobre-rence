import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const WhoDoYouWantToHelpButtonList = () => {
    const { whoDoYouWantToHelpArray } = useContext(DatabaseContext)
    return (
        <ul className='whoDoYouWantToHelpButtonList'>
            {whoDoYouWantToHelpArray.map((el) => { return (<li className='whoDoYouWantListItem' key={el}><button className='whoDoYouWantButton'>{el}</button></li>) })}
        </ul>
    )
}

export default WhoDoYouWantToHelpButtonList
