import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const WhoDoYouWantToHelpButtonList = () => {
    const { whoDoYouWantToHelpArray, handleWhoDoYouWantToHelpButtonList, backgroundButton } = useContext(DatabaseContext)
    return (
        <ul className='whoDoYouWantToHelpButtonList'>
            {whoDoYouWantToHelpArray.map((el) => {
                return (<li className='whoDoYouWantListItem' key={el}><button style={{ backgroundColor: backgroundButton ? '#FAD648' : '' }} onClick={(e) => { handleWhoDoYouWantToHelpButtonList(e) }} className='whoDoYouWantButton' > {el}</button></li >)
            })}
        </ul >
    )
}

export default WhoDoYouWantToHelpButtonList
