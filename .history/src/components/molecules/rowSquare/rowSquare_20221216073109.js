import React from 'react'
import OneSquare from '../../atoms/oneSquare/oneSquare'

const RowSquare = () => {
  return (
      <div className='rowSquare'>
          <OneSquare num={'1'} />
          <OneSquare num={'2'} />
          <OneSquare num={'3'} />
          <OneSquare num={'4'} />
        </div>
  )
}

export default RowSquare
