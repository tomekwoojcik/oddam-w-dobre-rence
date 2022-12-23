import React from 'react'

const FormHomeAdress = () => {
  return (
        <div className='formHomeAdress'>
          <label className='labelAdress'>Ulica<input className='inputAdress'></input></label>
          <label className='labelAdress'>Miasto<input className='inputAdress'></input></label>
          <label className='labelAdress'>Kod pocztowy<input className='inputAdress'></input></label>
          <label className='labelAdress'>Numer telefonu<input className='inputAdress'></input></label>
        </div>
  )
}

export default FormHomeAdress
