import React from 'react'
import InputStepList from '../../inputStepList/inputStepList'

const FormStepThr = () => {
  return (
        <div className='formStepOne'>
            <h3 className='formStepTitle'>Lokalizacja:</h3>
            <div className='formStepLocation'>
                <InputStepList/>
            </div>

        </div>
  )
}

export default FormStepThr
