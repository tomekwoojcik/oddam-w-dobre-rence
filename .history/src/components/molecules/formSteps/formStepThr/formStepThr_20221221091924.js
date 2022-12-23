import React, { useContext } from 'react'
import InputStepListCity from '../../inputStepListCity/inputStepListCity'
import DatabaseContext from '../../../context/databaseContext'
import WhoDoYouWantToHelpButtonList from '../../whoDoYouWantToHelpButtonList/whoDoYouWantToHelpButtonList'

const FormStepThr = () => {
  const { inputNameCity } = useContext(DatabaseContext)
  return (
    <div className='formStepOne'>
      <h3 className='formStepTitle formStepList'>Lokalizacja:</h3>
      <InputStepListCity titleCityListForm={inputNameCity} />
      <p className='whoDoYouWantToHelp'>Komu chcesz pomóc?</p>
      <WhoDoYouWantToHelpButtonList />
      <p className='whoDoYouWantToHelp'>Komu chcesz pomóc?</p>

    </div>
  )
}

export default FormStepThr
