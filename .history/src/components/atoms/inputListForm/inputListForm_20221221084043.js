/* eslint-disable react/prop-types */
import React from 'react'

const InputListForm = ({ inputName, arrowRotare, listFormStepHandle }) => {
  return (
      <div onClick={(e) => { listFormStepHandle(e) }} className='listFormStep'><p className='listFormStepTitle'>{inputName}</p> {arrowRotare !== true ? <div className='arrow' /> : <div className='arrow arrowRotare' />} </div>
  )
}

export default InputListForm
