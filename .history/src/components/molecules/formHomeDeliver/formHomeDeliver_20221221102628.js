import React from 'react'

const FormHomeAdress = () => {
  return (
        <div className='formHomeAdress'>
            <p className='title'>Termin odbioru:</p>
            <div className='formHomeAdressRow'>
                <label className='labelAdress'>Data</label><input className='inputAdress' />
            </div>
            <div className='formHomeAdressRow'>
                <label className='labelAdress'>Godzina</label><input className='inputAdress' />
            </div>
            <div className='formHomeAdressRow'>
                <label className='labelAdress'>Kod pocztowy</label><input className='inputAdress' />
            </div>
        </div>
  )
}

export default FormHomeAdress
