/* eslint-disable react/prop-types */
import React from 'react'

const SimpleStepsColumn = ({ source, simpleStepsColumnTitle, simpleStepsColumnText }) => {
  return (
    <div className='simpleStepsColumn'>
          <img src={source} />
          <h4>{simpleStepsColumnTitle}</h4>
          <hr />
          <p>{simpleStepsColumnText}</p>
    </div>
  )
}

export default SimpleStepsColumn
