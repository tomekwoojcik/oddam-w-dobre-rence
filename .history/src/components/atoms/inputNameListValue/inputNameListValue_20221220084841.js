/* eslint-disable react/prop-types */
import React from 'react'

const InputNameListValue = ({ arrowRotare, arrowValueList, hiddenListFormStepHandle, button}) => {
  return (
        <>
            {arrowRotare !== true ? null : <div className='inputNameListValue'>{arrowValueList.map((el) => { return  })}</div>}
        </>
  )
}

export default InputNameListValue
