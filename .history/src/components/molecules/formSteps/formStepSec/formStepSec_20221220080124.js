import React, { useContext } from 'react'
import InputStepList from '../../inputStepList/inputStepList'

const FormStepSec = () => {

  return (
    <div className='formStepOne'>
      <h3 className='formStepTitle'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
     <InputStepList/>
    </div>
  )
}

export default FormStepSec
