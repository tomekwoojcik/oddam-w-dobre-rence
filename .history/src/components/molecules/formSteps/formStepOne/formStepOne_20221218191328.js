import React from 'react'

const FormStepOne = () => {
  return (
        <div className='formStepOne'>
            <h3 className='whatDoYouHaveDonate'>Zaznacz co chcesz oddać:</h3>
            <div className='inFormBox'>
                <label htmlFor='reusableClothes' className='checkBoxName'><input id='reusableClothes' type={'checkbox'} />ubrania, które nadają się do ponownego użycia</label>
                <input id='clothesToThrowAway' type={'checkbox'} /><label htmlFor='clothesToThrowAway' className='checkBoxName'>ubrania, do wyrzucenia</label>
                <input id='toys' type={'checkbox'} /><label htmlFor='toys' className='checkBoxName'>zabawki</label>
                <input id='books' type={'checkbox'} /><label htmlFor='books' className='checkBoxName'>książki</label>
                <input id='other' type={'checkbox'} /><label htmlFor='other' className='checkBoxName'>Inne</label>
            </div>
        </div>
  )
}

export default FormStepOne
