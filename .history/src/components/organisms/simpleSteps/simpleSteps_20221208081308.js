import React from 'react'
import SimpleStepsTitle from '../../atoms/simpleStepsTitle/simpleStepsTitle'
import DecorationAssets from '../../atoms/decorationAssets/decorationAssets'
import SimpleStepsBar from '../../molecules/simpleStepsBar/simpleStepsBar'
import ButtonsInRightPartContext from '../../atoms/buttonsInRightPartContext/buttonsInRightPartContext'
const SimpleSteps = () => {
  return (
        <div className='simpleSteps'>
            <SimpleStepsTitle text={'Wystarczą 4 proste kroki'} />
            <DecorationAssets />
            <SimpleStepsBar />
            <ButtonsInRightPartContext buttonName={'ODDAJ RZECZY'} />
        </div>
  )
}

export default SimpleSteps
