import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'
const InputStepList = () => {
  const { inputName, listFormStepHandle, arrowRotare, arrowValueList, hiddenListFormStepHandle } = useContext(DatabaseContext)
  return (
        <div className='rowEnd'>
            <label className='inputName inputNameList'> Liczba 60l worków: </label>
            {arrowRotare !== true ? null : <div className='inputNameListValue'>{arrowValueList.map((el) => { return <button value={el} onClick={(e) => { hiddenListFormStepHandle(e.target.value) }} className='listButton' key={el}>{el}</button> })}</div>}
        </div>
  )
}

export default InputStepList
