/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const WhoWeHelpButton = ({ titleButton, value }) => {
  return (
        <button value={value} className='whoWeHelpButton'>{titleButton}</button>
  )
}

export default WhoWeHelpButton
