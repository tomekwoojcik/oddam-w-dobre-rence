import React from 'react'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ButtonsMenu = ({ source, linkName }) => {
  return (
        <li className='buttonItem'><NavLink className="button" to={source}>{linkName}</NavLink></li>
  )
}

export default ButtonsMenu
