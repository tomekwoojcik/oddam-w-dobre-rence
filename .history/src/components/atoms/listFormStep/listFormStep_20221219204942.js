import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const ListFormStep = () => {
  const { inputName, listFormStepHandle, arrowRotare, arrowValueList, hiddenListFormStepHandle } = useContext(DatabaseContext)
  return (
        <div className='inputNameList'>
            <div onClick={() => { listFormStepHandle() }} className='listFormStep'><p className='listFormStepTitle'>{inputName}</p> {arrowRotare !== true ? <div className='arrow' /> : <div className='arrow arrowRotare' />} </div>
            {arrowRotare !== true ? null : <div className='inputNameListValue'>{arrowValueList.map((el) => { return <button value={el} onClick={(e) => { hiddenListFormStepHandle(e.target.value) }} className='listButton' key={el}>{el}</button> })}</div>}
        </div>
  )
}

export default ListFormStep
