import React from 'react'

const FormHomeAdress = () => {
  return (
        <div className='formHomeAdress'>
            <label className='labelAdress'>Ulica</label><input className='inputAdress' />
            <label className='labelAdress'>Miasto</label><input className='inputAdress' />
            <label className='labelAdress'>Kod pocztowy</label><input className='inputAdress' />
            <label className='labelAdress'>Numer telefonu</label><input className='inputAdress' />
        </div>
  )
}

export default FormHomeAdress
