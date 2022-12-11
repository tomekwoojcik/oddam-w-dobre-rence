// /* eslint-disable react/prop-types */
// import React, { useContext } from 'react'
// import DatabaseContext from '../../context/databaseContext'

// const WhoWeHelpButton = ({ titleButton, value }) => {
//   const { getValue } = useContext(DatabaseContext)

//   return (
//       <input type='button' onClick={() => { getValue(value) }} value={value} className='whoWeHelpButton'>{titleButton}</input>
//   )
// }

// export default WhoWeHelpButton

/* eslint-disable react/prop-types */
import React from 'react'

const WhoWeHelpButton = ({ titleButton, value }) => {
  return (
        <button value={value} className='whoWeHelpButton'>{titleButton}</button>
  )
}

export default WhoWeHelpButton
