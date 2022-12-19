/* eslint-disable react/prop-types */
import React from 'react'

const OneSquare = ({ num, text }) => {
  return (
        <div className='square'>
            <h4 className='number'>{num}</h4>
            <p className='textSquare'>{text}</p>
        </div>
  )
}

export default OneSquare
