import React, { useContext } from 'react'
import InputStepListCity from '../../inputStepListCity/inputStepListCity'
import DatabaseContext from '../../../context/databaseContext'

const FormStepThr = () => {
  const { inputNameCity } = useContext(DatabaseContext)
  return (
    <div className='formStepOne'>
      <h3 className='formStepTitle formStepList'>Lokalizacja:</h3>
      <InputStepListCity titleCityListForm={inputNameCity} />
      <p>Komu chcesz pomóc:</p>
    </div>
  )
}

export default FormStepThr
