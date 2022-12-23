import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'
import InputListForm from '../../atoms/inputListForm/inputListForm'
import InputNameListValue from '../../atoms/inputNameListValue/inputNameListValue'
const InputStepList = () => {
  const { inputName, listFormStepHandle, arrowRotare, arrowValueList, hiddenListFormStepHandle } = useContext(DatabaseContext)
  return (
        <div className='rowEnd'>
          <label className='inputName inputNameList'> Liczba 60l worków: <InputListForm inputName={inputName} listFormStepHandle={listFormStepHandle} arrowRotare={arrowRotare} />
          </label>
          <InputNameListValue arrowValueList={arrowValueList} hiddenListFormStepHandle={hiddenListFormStepHandle} />
        </div>
  )
}

export default InputStepList
