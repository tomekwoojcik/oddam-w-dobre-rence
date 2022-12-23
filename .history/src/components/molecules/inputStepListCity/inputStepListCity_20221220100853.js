import React from 'react'

const InputStepListCity = () => {
  return (
      <div className='rowEnd'>
          <label className='inputName inputNameList'> Liczba 60l worków: <InputListForm inputName={inputName} listFormStepHandle={listFormStepHandle} arrowRotare={arrowRotare} />
          </label>
          {arrowRotare !== true ? null : <div className='inputNameListValue'>{arrowValueList.map((el) => { return < ButtonCount key={el} el={el} hiddenListFormStepHandle={hiddenListFormStepHandle} /> })}</div>}
      </div>
  )
}

export default InputStepListCity
