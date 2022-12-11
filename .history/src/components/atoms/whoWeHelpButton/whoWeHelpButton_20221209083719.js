/* eslint-disable react/prop-types */
import React, { useContext } from 'react'

const WhoWeHelpButton = ({ titleButton, value }) => {
  return (
        <button value={value} className='whoWeHelpButton'>{titleButton}</button>
  )
}

export default WhoWeHelpButton
