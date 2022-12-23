import React, { useContext } from 'react'
import InputStepListCity from '../../inputStepListCity/inputStepListCity'
import DatabaseContext from '../../../context/databaseContext'
import WhoDoYouWantToHelpButtonList from '../../whoDoYouWantToHelpButtonList/whoDoYouWantToHelpButtonList'
import FormStepThrNameOrg from '../../../atoms/formStepThrNameOrg/formStepThrNameOrg'

const FormStepThr = () => {
  const { inputNameCity } = useContext(DatabaseContext)
  return (
    <div className='formStepOne'>
      <h3 className='formStepTitle formStepList'>Lokalizacja:</h3>
      <InputStepListCity titleCityListForm={inputNameCity} />
      <p className='whoDoYouWantToHelp'>Komu chcesz pomóc?</p>
      <WhoDoYouWantToHelpButtonList />
      <p className='whoDoYouWantToHelp whoDoYouWantToHelpSec'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
      <FormStepThrNameOrg/>

    </div>
  )
}

export default FormStepThr
