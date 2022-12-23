import React from 'react'
import FormHomeAdress from '../../formHomeAdress/formHomeAdress'

const FormStepFour = () => {
  return (
        <div className='formStepOne'>
            <h3 className='formStepTitle formStepList'>Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
          <div className='formRow'>
              <FormHomeAdress/>
            </div>
        </div>
  )
}

export default FormStepFour
