/* eslint-disable react/prop-types */
import React from 'react'
import ButtonCount from '../buttonCount/buttonCount'

const InputNameListValue = ({ arrowRotare, arrowValueList, hiddenListFormStepHandle, nowSteps }) => {
  return (
        <>
          {nowSteps !== 3 ? arrowRotare !== true ? null : <div className='inputNameListValue'>{arrowValueList.map((el) => { return < ButtonCount key={el} el={el} hiddenListFormStepHandle={hiddenListFormStepHandle} /> })}</div> : arrowRotare !== true ? null : <div className='inputNameListValue'>{arrowValueList.map((el) => { return < ButtonCount key={el} el={el} hiddenListFormStepHandle={hiddenListFormStepHandle} /> })}</div>}
        </>
  )
}

export default InputNameListValue
