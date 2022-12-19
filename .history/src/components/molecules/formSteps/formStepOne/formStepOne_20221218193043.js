import React from 'react'

const FormStepOne = () => {
  return (
        <div className='formStepOne'>
            <h3 className='whatDoYouHaveDonate'>Zaznacz co chcesz oddać:</h3>
            <div className='inFormBox'>
                <label htmlFor='reusableClothes' className='checkBoxName'><input className='checkInput' id='reusableClothes' type={'checkbox'} /><span className='checkBox'></span> ubrania, które nadają się do ponownego użycia</label>
                <label htmlFor='clothesToThrowAway' className='checkBoxName'> <input className='checkInput' id='clothesToThrowAway' type={'checkbox'} /> <span className='checkBox'></span> ubrania, do wyrzucenia</label>
                <label htmlFor='toys' className='checkBoxName'><input className='checkInput' id='toys' type={'checkbox'} /> <span className='checkBox'></span>zabawki</label>
                <label htmlFor='books' className='checkBoxName'><input className='checkInput' id='books' type={'checkbox'} /><span className='checkBox'></span>książki</label>
                <label htmlFor='other' className='checkBoxName'><input className='checkInput' id='other' type={'checkbox'} /> <span className='checkBox'></span>Inne</label>
            </div>
        </div>
  )
}

export default FormStepOne
