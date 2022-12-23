import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const FormHomeDeliver = () => {
  const {} = useContext(DatabaseContext)
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
              <label className='labelAdress'>Uwagi dla kuriera</label> <textarea className='inputAdress textArea'/>
            </div>
        </div>
  )
}

export default FormHomeDeliver
