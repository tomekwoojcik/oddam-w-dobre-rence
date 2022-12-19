import React, { useContext } from 'react'
import DatabaseContext from '../../../context/databaseContext'

const FormStepSec = () => {
  const { inputName, listFormStepHandle, arrowRotare, arrowValueList } = useContext(DatabaseContext)
  return (
    <div className='formStepOne'>
      <h3 className='formStepTitle'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
      <div className='rowEnd'>
        <label className='inputName inputNameList'> Liczba 60l worków: <div onClick={() => { listFormStepHandle() }} className='listFormStep'><p className='listFormStepTitle'>{inputName}</p> {arrowRotare !== true ? <div className='arrow' /> : <div className='arrow arrowRotare' />} </div></label>
        {arrowRotare !== true ? null : <div className='inputNameListValue'>{arrowValueList.map((el) => { return <button className='listButton' key={el}>{el}</button> })}</div>}
      </div>
    </div>
  )
}

export default FormStepSec
