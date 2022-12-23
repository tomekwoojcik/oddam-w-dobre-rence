import React from 'react'
import FormHomeAdress from '../../formHomeAdress/formHomeAdress'
import FormHomeDeliver from '../../formHomeDeliver/formHomeDeliver'

const FormStepFour = () => {
  return (
        <div className='formStepOne'>
            <h3 className='formStepTitle formStepList'>Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
            <div className='formRow'>
                <FormHomeAdress />
                <FormHomeDeliver />
            </div>
        </div>
  )
}

export default FormStepFour
