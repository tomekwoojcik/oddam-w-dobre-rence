/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const WhoWeHelpButton = ({ titleButton, value }) => {
  const { getValue } = useContext(DatabaseContext)

  return (
      <button type='button' onClick={() => { getValue(value) }} className='whoWeHelpButton'>{titleButton}</button>
  )
}

export default WhoWeHelpButton
