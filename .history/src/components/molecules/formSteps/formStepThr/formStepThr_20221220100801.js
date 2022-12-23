import React from 'react'
import InputStepListCity from '../../inputStepListCity/inputStepListCity'

const FormStepThr = () => {
  return (
        <div className='formStepOne'>
            <h3 className='formStepTitle'>Lokalizacja:</h3>
            <div className='formStepLocation'>
                <InputStepListCity/>
            </div>

        </div>
  )
}

export default FormStepThr
