import React, { useContext } from 'react'
import DatabaseContext from '../../../context/databaseContext'

const FormStepFive = () => {
  const { dataForm } = useContext(DatabaseContext)
  return (
    <div className='formStepOne infoSteps'>
      <h3 className='formStepTitle'>Podsumowanie Twojej darowizny</h3>
      <div className='youGiveBack'>
        <p className='youGiveBackTitle'>Oddajesz:</p>
        <div className='youGiveBackRow'>
          <div className='clothesIcon' />
          <p>{dataForm.enterTheNumberOfBags} worki,  ubrania {dataForm.selectWhatYouWantToGiveBack.map((el) => (<span key={el}>{el}, </span>))} {dataForm.whoDoYouWantToHelp.map((el) => (<span key={el}>{el}, </span>))}</p>
        </div>
        <div className='youGiveBackRow'>
          <div className='roundIcon' /> <p>dla lokalizacji: {dataForm.location}</p>

        </div>
      </div>
      <div className='youGiveBackInfo'>
        <div className='youGiveBackColumn'>
          <p className='youGiveBackTitle'>Adres odbioru:</p>
          <div className='infoDiv'>
            <div className='infoDivRow'><p>Ulica</p> <span>{dataForm.clientAdress}</span></div>
            <div><p>Miasto</p> <span>{dataForm.clientCity}</span></div>
            <div><p>Kod pocztowy</p> <span>{dataForm.clientPostNumber}</span></div>
            <div><p>Numer telefonu</p> <span>{dataForm.clientPhoneNumber}</span></div>
          </div>
        </div>
        <div className='youGiveBackColumn'>
          <p className='youGiveBackTitle'>Termin odbioru:</p>
        </div>
      </div>

    </div >
  )
}

export default FormStepFive
