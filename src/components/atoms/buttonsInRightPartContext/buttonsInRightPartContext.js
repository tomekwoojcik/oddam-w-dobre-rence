import React from 'react'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ButtonsInRightPartContext = ({ source, buttonName }) => {
  return (
    <div className='buttonItemMenuContext'><NavLink className='buttonMenuContext' to={source}>{buttonName}</NavLink></div>
  )
}

export default ButtonsInRightPartContext
