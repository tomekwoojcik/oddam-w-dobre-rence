import React from 'react'

const FormStepFive = () => {
  return (
        <div className='formStepOne'>
            <h3 className='formStepTitle'>Podsumowanie Twojej darowizny</h3>
          <div className='youGiveBack'>
              <p className='youGiveBackTitle'>Oddajesz:</p>
                <div className='youGiveBackRow'></div>
                <div className='youGiveBackRow'></div>
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
