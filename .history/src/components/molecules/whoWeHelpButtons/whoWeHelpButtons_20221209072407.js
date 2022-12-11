import React from 'react'
import WhoWeHelpButton from '../../atoms/whoWeHelpButton/whoWeHelpButton'

const WhoWeHelpButtons = () => {
  return (
        <ul>
            <WhoWeHelpButton titleButton={'Fundacjom'} />
            <WhoWeHelpButton titleButton={'Organizacjom pozarządowym'} />
            <WhoWeHelpButton titleButton={'Lokalnym zbiórkom'} />
        </ul>
  )
}

export default WhoWeHelpButtons
