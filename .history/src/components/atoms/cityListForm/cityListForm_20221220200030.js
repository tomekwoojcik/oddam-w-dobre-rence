import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const CityListForm = () => {
  const { cityValueList, handleCity } = useContext(DatabaseContext)
  return (
        <ul className='cityList'>
            {cityValueList.map((el) => {
              return (<li className='elementList' key={el}><button onClick={(e) => { handleCity(e) }} className='button'>{el}</button></li>)
            })
            }

        </ul>
  )
}

export default CityListForm
