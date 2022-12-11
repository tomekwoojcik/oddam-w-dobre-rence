import React from 'react'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ButtonsInRightPartContext = ({ source, buttonName }) => {
  return (
        <li className='buttonItem'><NavLink className='button' to={source}>{buttonName}</NavLink></li>
  )
}

export default ButtonsInRightPartContext
