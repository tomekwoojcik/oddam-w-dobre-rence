/* eslint-disable react/prop-types */
import React from 'react'

const TextAreaInput = ({ labelText, placeholderText }) => {
  return (
        <label className='contactUsLabel'>
            {labelText}
            <textarea className='contactUsTextArea' placeholder={placeholderText} />
        </label>
  )
}

export default TextAreaInput
