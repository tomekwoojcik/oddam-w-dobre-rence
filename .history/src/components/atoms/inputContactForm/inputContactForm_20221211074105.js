/* eslint-disable react/prop-types */
import React from 'react'

const InputContactForm = ({ labelText, placeholderText, type }) => {
  return (
        <div className='divForm'>
            <label className='contactUsLabel'>
                {labelText}
                <input className='contactUsInput' type={type} placeholder={placeholderText} />
            </label>
        </div>
  )
}

export default InputContactForm
