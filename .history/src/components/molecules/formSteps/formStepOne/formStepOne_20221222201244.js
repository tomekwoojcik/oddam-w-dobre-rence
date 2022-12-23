import React, { useContext } from 'react'
import DatabaseContext from '../../../context/databaseContext'

const FormStepOne = () => {
  const { handleCheck, isChecked } = useContext(DatabaseContext)
  return (
    <div className='formStepOne'>
      <h3 className='formStepTitle'>Zaznacz co chcesz oddać:</h3>
      <div className='inFormBox'>
        <label htmlFor='reusableClothes' className='inputName'>
          <input className='checkInput' id='reusableClothes' type={'checkbox'} value={'ubrania, które nadają się do ponownego użycia'} onChange={(e) => { handleCheck(e.target.value, e.target.checked) }} /><span className='checkBox'></span>
          ubrania, które nadają się do ponownego użycia
        </label>
        <label htmlFor='clothesToThrowAway' className='inputName'>
          <input className='checkInput' id='clothesToThrowAway' type={'checkbox'} /> <span className='checkBox'></span>
          ubrania, do wyrzucenia
        </label>
        <label htmlFor='toys' className='inputName'>
          <input className='checkInput' id='toys' type={'checkbox'} /> <span className='checkBox'></span>
          zabawki
        </label>
        <label htmlFor='books' className='inputName'>
          <input className='checkInput' id='books' type={'checkbox'} /><span className='checkBox'></span>
          książki
        </label>
        <label htmlFor='other' className='inputName'>
          <input className='checkInput' id='other' type={'checkbox'} /> <span className='checkBox'></span>
          Inne
        </label>
      </div>
    </div>
  )
}

export default FormStepOne
