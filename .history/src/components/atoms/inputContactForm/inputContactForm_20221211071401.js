/* eslint-disable react/prop-types */
import React from 'react'

const InputContactForm = ({ labelText, placeholderText, type }) => {
  return (
        <label className='contactUsLabel'>
            {labelText}
          <input className='contactUsInput' type={type} placeholder={placeholderText} />
        </label>
  )
}

export default InputContactForm
