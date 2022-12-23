/* eslint-disable react/prop-types */
import React from 'react'

const ButtonCount = ({ el }) => {
  return (
      <button value={el} onClick={(e) => { hiddenListFormStepHandle(e.target.value) }} className='listButton' key={el}>{el}</button>
  )
}

export default ButtonCount
