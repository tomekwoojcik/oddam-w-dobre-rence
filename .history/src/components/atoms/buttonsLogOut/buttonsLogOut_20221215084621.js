/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'
const ButtonsLogOut = ({ source, buttonName }) => {
    const {} = useContext(DatabaseContext)
  return (
        <li className='buttonMenuItems'><button className='buttonMenu' to={source}>{buttonName}</button></li>
  )
}

export default ButtonsLogOut
