import React from 'react'
import InputStepListCity from '../../inputStepListCity/inputStepListCity'

const FormStepThr = () => {
  return (
    <div className='formStepOne'>
      <h3 className='formStepTitle'>Lokalizacja:</h3>
      <InputStepListCity titleCityListForm={''} />
    </div>
  )
}

export default FormStepThr
