import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const CityListForm = () => {
  const { cityValueList } = useContext(DatabaseContext)
  return (
        <ul className='cityList'>
            {cityValueList.map((el) => {
              return (<li className='elementList' key={el}><button onClick={(el)=>{}} className='button'>{el}</button></li>)
            })
            }

        </ul>
  )
}

export default CityListForm
