import React from 'react'

const ButtonCount = () => {
  return (
      <button value={el} onClick={(e) => { hiddenListFormStepHandle(e.target.value) }} className='listButton' key={el}>{el}</button>
  )
}

export default ButtonCount
