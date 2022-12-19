import React from 'react'

const FormStepOne = () => {
  return (
        <div className='formStepOne'>
            <h3 className='whatDoYouHaveDonate'>Zaznacz co chcesz oddać:</h3>
            <div className='inFormBox'>
                <label htmlFor='reusableClothes' className='checkBoxName'><input id='reusableClothes' type={'checkbox'} />ubrania, które nadają się do ponownego użycia</label>
                <label htmlFor='clothesToThrowAway' className='checkBoxName'> <input id='clothesToThrowAway' type={'checkbox'} />ubrania, do wyrzucenia</label>
                <label htmlFor='toys' className='checkBoxName'><input id='toys' type={'checkbox'} />zabawki</label>
                <label htmlFor='books' className='checkBoxName'><input id='books' type={'checkbox'} />książki</label>
                <label htmlFor='other' className='checkBoxName'><input id='other' type={'checkbox'} />Inne</label>
            </div>
        </div>
  )
}

export default FormStepOne
