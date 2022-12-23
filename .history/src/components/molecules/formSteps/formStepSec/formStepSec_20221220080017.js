import React, { useContext } from 'react'
import DatabaseContext from '../../../context/databaseContext'

const FormStepSec = () => {
  const { inputName, listFormStepHandle, arrowRotare, arrowValueList, hiddenListFormStepHandle } = useContext(DatabaseContext)
  return (
    <div className='formStepOne'>
      <h3 className='formStepTitle'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
     
    </div>
  )
}

export default FormStepSec
