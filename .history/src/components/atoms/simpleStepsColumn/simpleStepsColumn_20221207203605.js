/* eslint-disable react/prop-types */
import React from 'react'

const SimpleStepsColumn = ({ source, simpleStepsColumnTitle, simpleStepsColumnText }) => {
  return (
    <div className='simpleStepsColumn'>
          <img className='simpleStepsColumnImg' src={source} />
          <h4 className='simpleStepsColumnTitle' >{simpleStepsColumnTitle}</h4>
          <hr />
          <p>{simpleStepsColumnText}</p>
    </div>
  )
}

export default SimpleStepsColumn
