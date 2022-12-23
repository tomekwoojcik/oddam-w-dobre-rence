import React from 'react'
import ListFormStep from '../../../atoms/listFormStep/listFormStep'

const FormStepSec = () => {
  return (
    <div className='formStepOne'>
      <h3 className='formStepTitle'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
      <div className='rowEnd'>
        <label className='inputName inputNameList'> Liczba 60l worków: <ListFormStep/> </label>
      </div>
    </div>
  )
}

export default FormStepSec
