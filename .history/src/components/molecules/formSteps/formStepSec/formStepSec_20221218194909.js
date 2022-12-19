import React from 'react'

const FormStepSec = () => {
  return (
        <div className='formStepOne'>
          <h3 className='formStepTitle'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
          <label htmlFor='reusableClothes' className='checkBoxName'><input className='checkInput' id='reusableClothes' type={'checkbox'} /><span className='checkBox'></span> ubrania, które nadają się do ponownego użycia</label>
        </div>
  )
}

export default FormStepSec
