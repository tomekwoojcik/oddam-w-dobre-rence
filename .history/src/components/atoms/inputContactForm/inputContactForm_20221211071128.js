/* eslint-disable react/prop-types */
import React from 'react'

const InputContactForm = ({ labelText, placeholderText }) => {
  return (
        <label className='contactUsLabel'>
            {labelText}
          <input className='contactUsInput' type={'text'} placeholder={placeholderText} />
        </label>
  )
}

export default InputContactForm
