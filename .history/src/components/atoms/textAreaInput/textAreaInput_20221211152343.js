/* eslint-disable react/prop-types */
import React from 'react'

const TextAreaInput = ({ labelText, placeholderText }) => {
    return (
        <div>
            <label className='contactUsLabel'>
                {labelText}
                <textarea className='contactUsTextArea' placeholder={placeholderText} />
            </label>
        </div>
    )
}

export default TextAreaInput
