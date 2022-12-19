import React from 'react'

const FormStepOne = () => {
  return (
        <div className='formStepOne'>
            <h3 className='whatDoYouHaveDonate'>Zaznacz co chcesz oddać:</h3>
            <div className='inFormBox'>
                <input id='reusableClothes' type={'checkbox'} /><label htmlFor='reusableClothes' className='checkBoxName'>ubrania, które nadają się do ponownego użycia</label>
                <input id='reusableClothes' type={'checkbox'} /><label htmlFor='reusableClothes' className='checkBoxName'>ubrania, do wyrzucenia</label>
              <input id='reusableClothes' type={'checkbox'} /><label htmlFor='reusableClothes' className='checkBoxName'>zabawki</label>
            </div>

        </div>
  )
}

export default FormStepOne
