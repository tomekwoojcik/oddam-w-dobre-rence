/* eslint-disable react/prop-types */
import React from 'react'

const InputStepListCity = ({ titleCityListForm }) => {
  return (
        <div className='cityListForm' onClick={()=>{}}>
            <p className='titleCityListForm'>{titleCityListForm}</p>
          { <div className='arrow' />}
        </div>
  )
}

export default InputStepListCity
