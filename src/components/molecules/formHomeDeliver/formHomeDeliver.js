import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const FormHomeDeliver = () => {
  const { dataDeliver, setDataDeliver, pickupTime, setPickupTime, noteToTheCourier, setNoteToTheCourier } = useContext(DatabaseContext)
  return (
    <div className='formHomeAdress'>
      <p className='title'>Termin odbioru:</p>
      <div className='formHomeAdressRow'>
        <label className='labelAdress'>Data</label><input type={'date'} value={dataDeliver} onChange={(e) => { setDataDeliver(e.target.value) }} className='inputAdress' />
      </div>
      <div className='formHomeAdressRow'>
        <label className='labelAdress'>Godzina</label><input type={'time'} value={pickupTime} onChange={(e) => { setPickupTime(e.target.value) }} className='inputAdress' />
      </div>
      <div className='formHomeAdressRow'>
        <label className='labelAdress'>Uwagi dla kuriera</label> <textarea value={noteToTheCourier} onChange={(e) => { setNoteToTheCourier(e.target.value) }} className='inputAdress textArea' />
      </div>
    </div>
  )
}

export default FormHomeDeliver
