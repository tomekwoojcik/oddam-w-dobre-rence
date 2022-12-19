import React from 'react'
import IntroHeaderTitle from '../../atoms/introHeaderTitle/introHeaderTitle'
import DecorationAssets from '../../atoms/decorationAssets/decorationAssets'
import RowSquare from '../rowSquare/rowSquare'

const IntroHeaderStepsContext = () => {
  return (
      <div className='introHeader'>
          <IntroHeaderTitle />
          <DecorationAssets />
          <p className='textIntro'>Wystarczą 4 proste kroki:</p>
          <RowSquare/>

        </div>
  )
}

export default IntroHeaderStepsContext
