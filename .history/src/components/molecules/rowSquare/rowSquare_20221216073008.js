import React from 'react'
import OneSquare from '../../atoms/oneSquare/oneSquare'

const RowSquare = () => {
  return (
      <div className='rowSquare'>
          <OneSquare num={''} />
          <OneSquare />
          <OneSquare />
          <OneSquare />
        </div>
  )
}

export default RowSquare
