/* eslint-disable react/prop-types */
import React from 'react'
const ButtonsLogOut = ({ source, buttonName }) => {
  return (
        <li className='buttonMenuItems'><button className='buttonMenu' to={source}>{buttonName}</button></li>
  )
}

export default ButtonsLogOut
