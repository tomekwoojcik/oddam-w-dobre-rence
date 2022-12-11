/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

const WhoWeHelpButton = ({ titleButton, source }) => {
  return (
      <li className='whoWeHelpButton'><NavLink to={source} className='button'>{titleButton}</NavLink></li>
  )
}

export default WhoWeHelpButton
