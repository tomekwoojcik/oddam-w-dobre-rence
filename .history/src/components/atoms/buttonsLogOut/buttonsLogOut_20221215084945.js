/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'
const ButtonsLogOut = ({ source, buttonName }) => {
  const { logOutHandle } = useContext(DatabaseContext)
  return (
        <li className='buttonMenuItems'><button onClick={(e) => { logOutHandle(e) }} className='buttonMenu'>{buttonName}</button></li>
  )
}

export default ButtonsLogOut
