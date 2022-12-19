import React from 'react'
import OneSquare from '../../atoms/oneSquare/oneSquare'

const RowSquare = () => {
  return (
      <div className='rowSquare'>
          <OneSquare num={'1'} text={'Wybierz rzeczy'} />
          <OneSquare num={'2'} text={'Spakuj je w worki'} />
          <OneSquare num={'3'} text={''} />
          <OneSquare num={'4'} />
        </div>
  )
}

export default RowSquare
