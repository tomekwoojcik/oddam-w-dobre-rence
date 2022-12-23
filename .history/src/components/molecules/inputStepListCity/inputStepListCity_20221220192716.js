/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const InputStepListCity = ({ titleCityListForm }) => {
  const { handleCityButton, arrowRotareCity } = useContext(DatabaseContext)
  return (
        <div className='cityListForm' onClick={() => { handleCityButton() }}>
            <p className='titleCityListForm'>{titleCityListForm}</p>
          {arrowRotareCity !== false ? <div className='arrow arrowRotare' /> : <div className='arrow' />}
        </div>
  )
}

export default InputStepListCity
