/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'
import InputListForm from '../../atoms/inputListForm/inputListForm'
import InputNameListValue from '../../atoms/inputNameListValue/inputNameListValue'
const InputStepList = ({ inputText, button }) => {
  const { inputName, listFormStepHandle, arrowRotare, arrowValueList, hiddenListFormStepHandle } = useContext(DatabaseContext)
  return (
        <div className='rowEnd'>
            <label className='inputName inputNameList'> {inputText}  <InputListForm inputName={inputName} listFormStepHandle={listFormStepHandle} arrowRotare={arrowRotare} />
            </label>
            <InputNameListValue arrowRotare={arrowRotare} arrowValueList={arrowValueList} hiddenListFormStepHandle={hiddenListFormStepHandle} />
        </div>
  )
}

export default InputStepList
