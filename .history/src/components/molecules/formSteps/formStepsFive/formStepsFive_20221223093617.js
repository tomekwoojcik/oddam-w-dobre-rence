import React, { useContext } from 'react'
import DatabaseContext from '../../../context/databaseContext'

const FormStepFive = () => {
  const { dataForm } = useContext(DatabaseContext)
  return (
    <div className='formStepOne'>
      <h3 className='formStepTitle'>Podsumowanie Twojej darowizny</h3>
      <div className='youGiveBack'>
        <p className='youGiveBackTitle'>Oddajesz:</p>
        <div className='youGiveBackRow'>
          <div className='clothesIcon' />
          <p>{dataForm.enterTheNumberOfBags} worki,  ubrania {dataForm.selectWhatYouWantToGiveBack.map((el) => (<span key={el}>{el},</span>))} {dataForm.}</p>
        </div>
        <div className='youGiveBackRow'>
          <div className='roundIcon' />

        </div>
      </div>
      <div className='youGiveBackInfo'>
        <div className='youGiveBackColumn'>
          <p className='youGiveBackTitle'>Adres odbioru:</p>
        </div>
        <div className='youGiveBackColumn'>
          <p className='youGiveBackTitle'>Termin odbioru:</p>
        </div>
      </div>

    </div>
  )
}

export default FormStepFive
