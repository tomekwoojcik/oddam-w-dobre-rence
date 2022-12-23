import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'
import InputListForm from '../../atoms/inputListForm/inputListForm'
import ButtonCount from '../../atoms/buttonCount/buttonCount'
const InputStepList = () => {
    const { inputName, listFormStepHandle, arrowRotare, arrowValueList, hiddenListFormStepHandle } = useContext(DatabaseContext)
    return (
        <div className='rowEnd'>
            <label className='inputName inputNameList'> Liczba 60l worków: <InputListForm inputName={inputName} listFormStepHandle={listFormStepHandle} arrowRotare={arrowRotare} />
            </label>
            {arrowRotare !== true ? null : <div className='inputNameListValue'>{arrowValueList.map((el) => { return <ButtonCount />
        </div>
  )
}

            export default InputStepList
