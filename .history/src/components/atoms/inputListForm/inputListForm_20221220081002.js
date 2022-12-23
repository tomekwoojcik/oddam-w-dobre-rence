import React from 'react'

const InputListForm = ({inputName, arrowRotare, listFormStepHandle}) => {
  return (
      <div onClick={() => { listFormStepHandle() }} className='listFormStep'><p className='listFormStepTitle'>{inputName}</p> {arrowRotare !== true ? <div className='arrow' /> : <div className='arrow arrowRotare' />} </div>
  )
}

export default InputListForm
