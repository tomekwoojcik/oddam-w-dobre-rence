import React from 'react'

const InputStepList = () => {
  return (
      <div className='rowEnd'>
          <label className='inputName inputNameList'> Liczba 60l worków: <div onClick={() => { listFormStepHandle() }} className='listFormStep'><p className='listFormStepTitle'>{inputName}</p> {arrowRotare !== true ? <div className='arrow' /> : <div className='arrow arrowRotare' />} </div></label>
          {arrowRotare !== true ? null : <div className='inputNameListValue'>{arrowValueList.map((el) => { return <button value={el} onClick={(e) => { hiddenListFormStepHandle(e.target.value) }} className='listButton' key={el}>{el}</button> })}</div>}
      </div>
  )
}

export default InputStepList
