import React from 'react'
import SimpleStepsColumn from '../../atoms/simpleStepsColumn/simpleStepsColumn'

const SimpleStepsBar = () => {
  return (
        <div className='simpleStepsBar'>
            <SimpleStepsColumn />
            <SimpleStepsColumn />
            <SimpleStepsColumn />
            <SimpleStepsColumn />
        </div>
  )
}

export default SimpleStepsBar
