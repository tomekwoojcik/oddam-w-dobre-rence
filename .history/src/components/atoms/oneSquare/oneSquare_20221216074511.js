/* eslint-disable react/prop-types */
import React from 'react'

const OneSquare = ({ num, text }) => {
  return (
      <div className='square'>
          < div className='introSquare'>
              <h4 className='number'>{num}</h4>
              <p className='textSquare'>{text}</p>
          </div>
        </div>
  )
}

export default OneSquare
