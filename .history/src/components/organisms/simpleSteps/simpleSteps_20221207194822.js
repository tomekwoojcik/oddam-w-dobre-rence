import React from 'react'
import SimpleStepsTitle from '../../atoms/simpleStepsTitle/simpleStepsTitle'
import DecorationAssets from '../../atoms/decorationAssets/decorationAssets'

const SimpleSteps = () => {
  return (
    <div className='simpleSteps'>
          <SimpleStepsTitle text={'Wystarczą 4 proste kroki'} />
          <DecorationAssets />
    </div>
  )
}

export default SimpleSteps
