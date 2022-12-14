/* eslint-disable react/prop-types */
import React from 'react'

const TextAreaInput = ({ labelText, placeholderText, handleInput }) => {
  return (
    <div className='rowContactUsLabel'>
      <label className='contactUsLabel'>
        {labelText}
      </label>
      <textarea onChange={handleInput(e => e.target.value)} className='contactUsTextArea' placeholder={placeholderText} />
    </div>
  )
}

export default TextAreaInput
