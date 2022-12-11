/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonsLoginLogout = ({ source, buttonName }) => {
  return (
        <li><NavLink to={source}>{buttonName}</NavLink></li>
  )
}

export default ButtonsLoginLogout
