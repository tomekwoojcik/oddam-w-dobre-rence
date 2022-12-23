import React, { useContext } from 'react'
import DatabaseContext from '../../../context/databaseContext'
import InputStepList from '../../inputStepList/inputStepList'

const FormStepSec = () => {
  const { inputName, listFormStepHandle, arrowRotare, arrowValueList, hiddenListFormStepHandle } = useContext(DatabaseContext)
  return (
    <div className='formStepOne'>
      <h3 className='formStepTitle'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
     <InputStepList/>
    </div>
  )
}

export default FormStepSec
