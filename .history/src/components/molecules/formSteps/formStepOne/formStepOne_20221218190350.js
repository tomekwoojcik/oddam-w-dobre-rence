import React from 'react'

const FormStepOne = () => {
  return (
      <div className='formStepOne'>
          <h3 className='whatDoYouHaveDonate'>Zaznacz co chcesz oddać:</h3>
          <div className='inFormBox'>
              <input id='cloths' type={'checkbox'} /><label className='checkBoxName'>ubrania, które nadają się do ponownego użycia</label>
          </div>

        </div>
  )
}

export default FormStepOne
