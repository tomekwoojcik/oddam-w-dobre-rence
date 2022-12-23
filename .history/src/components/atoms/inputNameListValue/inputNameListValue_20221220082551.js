/* eslint-disable react/prop-types */
import React from 'react'

const InputNameListValue = ({ arrowRotare, arrowValueList, hiddenListFormStepHandle }) => {
  return (
        <>
            {arrowRotare !== true ? null : <div className='inputNameListValue'>{arrowValueList.map((el) => { return <button value={el} onClick={(e) => { hiddenListFormStepHandle(e.target.value) }} className='listButton' key={el}>{el}</button> })}</div>}
        </>
  )
}

export default InputNameListValue
