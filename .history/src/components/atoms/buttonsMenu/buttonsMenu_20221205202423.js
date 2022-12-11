import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonsMenu = ({ source, linkName }) => {
  return (
        <li><NavLink to={source}>{linkName}</NavLink></li>
  )
}

export default ButtonsMenu
