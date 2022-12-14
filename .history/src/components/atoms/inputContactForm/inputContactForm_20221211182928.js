/* eslint-disable react/prop-types */
import React from 'react'

const InputContactForm = ({ labelText, placeholderText, type, handleInput }) => {
  return (
        <div className='divForm'>
            <label className='contactUsLabel'>
                {labelText}
            </label>
            <input on className='contactUsInput' type={type} placeholder={placeholderText} />
        </div>
  )
}

export default InputContactForm
