/* eslint-disable react/prop-types */
import React from 'react'

const InputContactFormEmail = ({ labelText, placeholderText, type }) => {
  return (
        <div className='divForm'>
            <label className='contactUsLabel'>
                {labelText}
            </label>
            <input className='contactUsInput' type={type} placeholder={placeholderText} />
        </div>
  )
}

export default InputContactFormEmail
