import React from 'react'
import InputStepList from '../../inputStepList/inputStepList'

const FormStepSec = () => {
  return (
    <div className='formStepOne'>
      <h3 className='formStepTitle'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
      <InputStepList inputText={'Liczba 60l worków:'} />
    </div>
  )
}

export default FormStepSec
