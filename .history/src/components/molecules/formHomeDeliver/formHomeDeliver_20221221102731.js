import React from 'react'

const FormHomeDeliver = () => {
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
              <label className='labelAdress'>Uwagi dla kuriera</label> <textarea className='inputAdress'></textarea>
            </div>
        </div>
  )
}

export default FormHomeDeliver
