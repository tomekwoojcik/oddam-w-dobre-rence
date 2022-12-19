import React, { useState } from 'react'

const FormStepSec = () => {
  const [inputName, setInputName] = useState('— wybierz —')
  return (
        <div className='formStepOne'>
            <h3 className='formStepTitle'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
            <label className='inputName inputNameList'> Liczba 60l worków: <div className='listFormStep'><p className='listFormStepTitle'>— wybierz —</p> <div className='arrow' /> </div></label>
        </div>
  )
}

export default FormStepSec
