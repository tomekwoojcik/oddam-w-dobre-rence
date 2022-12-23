import React, { useContext } from 'react'
import InputStepListCity from '../../inputStepListCity/inputStepListCity'
import DatabaseContext from '../../../context/databaseContext'

const FormStepThr = () => {
  const { inputName } = useContext(DatabaseContext)
  return (
    <div className='formStepOne'>
      <h3 className='formStepTitle'>Lokalizacja:</h3>
      <InputStepListCity titleCityListForm={inputName} />
    </div>
  )
}

export default FormStepThr
