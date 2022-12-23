import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'
import ButtonCount from '../../atoms/buttonCount/buttonCount'
import InputListForm from '../../atoms/inputListForm/inputListForm'

const InputStepListCity = () => {
  const { inputName, listFormStepHandle, arrowRotare, arrowValueList, hiddenListFormStepHandle } = useContext(DatabaseContext)

  return (
      <div className='rowEnd'>
          <label className='inputName inputCityList'> <InputListForm inputName={inputName} listFormStepHandle={listFormStepHandle} arrowRotare={arrowRotare} />
          </label>
          {arrowRotare !== true ? null : <div className='inputNameListValue'>{arrowValueList.map((el) => { return < ButtonCount key={el} el={el} hiddenListFormStepHandle={hiddenListFormStepHandle} /> })}</div>}
      </div>
  )
}

export default InputStepListCity
