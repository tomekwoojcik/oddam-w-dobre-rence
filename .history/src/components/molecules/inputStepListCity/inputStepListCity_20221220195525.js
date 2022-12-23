/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'
import CityListForm from '../../atoms/cityListForm/cityListForm'

const InputStepListCity = ({ titleCityListForm }) => {
    const { handleCityButton, arrowRotareCity } = useContext(DatabaseContext)
    return (
        <div className='cityRow'>
            <div className='cityListForm' onClick={() => { handleCityButton() }}>
                <p className='titleCityListForm'>{titleCityListForm}</p>
                {arrowRotareCity !== true ? <div className='arrow' /> : <div className='arrow arrowRotare' />}
            </div>
            {arrowRotareCity !== false ? <CityListForm /> : null}
        </div>

    )
}

export default InputStepListCity
