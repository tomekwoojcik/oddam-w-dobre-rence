/* eslint-disable react/prop-types */
import React from 'react'
import { Button } from 'react-scroll'

const InputNameListValue = ({ arrowRotare, arrowValueList, hiddenListFormStepHandle, button}) => {
  return (
        <>
            {arrowRotare !== true ? null : <div className='inputNameListValue'>{arrowValueList.map((el) => { return <Button })}</div>}
        </>
  )
}

export default InputNameListValue
