/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

const WhoWeHelpButton = ({ titleButton, source }) => {
  return (
      <li className='whoWeHelpButton'><button className='button'>{titleButton}</button></li>
  )
}

export default WhoWeHelpButton
