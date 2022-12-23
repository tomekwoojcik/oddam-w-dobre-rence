import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const FormHomeAdress = () => {
    const {} = useContext(DatabaseContext)
  return (
      <div className='formHomeAdress'>
          <p className='title'>Adres odbioru:</p>
            <div className='formHomeAdressRow'>
                <label className='labelAdress'>Ulica</label><input className='inputAdress' />
            </div>
            <div className='formHomeAdressRow'>
                <label className='labelAdress'>Miasto</label><input className='inputAdress' />
            </div>
            <div className='formHomeAdressRow'>
                <label className='labelAdress'>Kod pocztowy</label><input className='inputAdress' />
            </div>
            <div className='formHomeAdressRow'>
                <label className='labelAdress'>Numer telefonu</label><input className='inputAdress' />
            </div>
        </div>
  )
}

export default FormHomeAdress
