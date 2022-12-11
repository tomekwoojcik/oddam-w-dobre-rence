/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const WhoWeHelpButton = ({ titleButton, value }) => {
  const { getValue } = useContext(DatabaseContext)

  return (
      <button onClick={() => { getValue(value) }} type='onSubmit' value={value} className='whoWeHelpButton'>{titleButton}</button>
  )
}

export default WhoWeHelpButton
