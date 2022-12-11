/* eslint-disable react/prop-types */
// import React, { useContext } from 'react'
// import DatabaseContext from '../../context/databaseContext'

import React from 'react'

const WhoWeHelpButton = ({ titleButton, value }) => {
  //   const { getValue } = useContext(DatabaseContext)
  //   <input type='button' onClick={() => { getValue(value) }} value={value} className='whoWeHelpButton'>{titleButton}</input>

  return (
        <input type='button' className='whoWeHelpButton'>{titleButton}</input>
  )
}

export default WhoWeHelpButton
