/* eslint-disable react/prop-types */
import React from 'react'

const TextAreaInput = ({ labelText, placeholderText }) => {
  return (
        <div className='rowContactUsLabel'>
            <label className='contactUsLabel'>
                {labelText}
            </label>
                <textarea className='contactUsTextArea' placeholder={placeholderText} />
        </div>
  )
}

export default TextAreaInput
