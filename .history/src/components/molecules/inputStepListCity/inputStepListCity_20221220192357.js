/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const InputStepListCity = ({ titleCityListForm }) => {
  const { handleCityButton, arrowRotare } = useContext(DatabaseContext)
  return (
        <div className='cityListForm' onClick={() => { handleCityButton() }}>
            <p className='titleCityListForm'>{titleCityListForm}</p>
          {arrowRotare !== true ? <div className='arrow arrowRotare' /> : <div className='arrow arrowRotare' />}
        </div>
  )
}

export default InputStepListCity
