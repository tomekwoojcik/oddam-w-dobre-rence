import React, { useContext } from 'react'
import DatabaseContext from '../../../context/databaseContext'

const FormStepSec = () => {
  const { inputName, arrowRotare } = useContext(DatabaseContext)
  return (
        <div className='formStepOne'>
            <h3 className='formStepTitle'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
            <label className='inputName inputNameList'> Liczba 60l worków: <div className='listFormStep'><p className='listFormStepTitle'>{inputName}</p> <div className='arrow' /> </div></label>
        </div>
  )
}

export default FormStepSec
