import React from 'react'
import IntroHeaderTitle from '../../atoms/introHeaderTitle/introHeaderTitle'
import DecorationAssets from '../../atoms/decorationAssets/decorationAssets'

const IntroHeaderStepsContext = () => {
  return (
      <div className='introHeader'>
          <IntroHeaderTitle />
          <DecorationAssets />
        <p className='textIntro'></p>

        </div>
  )
}

export default IntroHeaderStepsContext
