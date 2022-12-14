/* eslint-disable react/prop-types */
import React from 'react'

const TextAreaInput = ({ labelText, placeholderText, handleInput, value }) => {
  return (
    <div className='rowContactUsLabel'>
      <label className='contactUsLabel'>
        {labelText}
      </label>
      <textarea value={value} onChange={(e) => { handleInput(e.target.value) }} className='contactUsTextArea' placeholder={placeholderText} />
    </div>
  )
}

export default TextAreaInput
