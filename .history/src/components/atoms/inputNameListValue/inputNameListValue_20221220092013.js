/* eslint-disable react/prop-types */
import React from 'react'
// import ButtonCount from '../buttonCount/buttonCount'

const InputNameListValue = ({ arrowRotare, arrowValueList, hiddenListFormStepHandle, button }) => {
    return (
        <>
            {arrowRotare !== true ? null : <div className='inputNameListValue'>{arrowValueList.map((el) => { return { button } })}</div>}
        </>
    )
}

export default InputNameListValue
