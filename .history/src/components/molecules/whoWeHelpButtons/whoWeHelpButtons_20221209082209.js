import React from 'react'
import WhoWeHelpButton from '../../atoms/whoWeHelpButton/whoWeHelpButton'

const WhoWeHelpButtons = () => {
  return (
      <form className='whoWeHelpButtonsList'>
            <WhoWeHelpButton value={''} titleButton={'Fundacjom'} />
            <WhoWeHelpButton titleButton={'Organizacjom pozarządowym'} />
            <WhoWeHelpButton titleButton={'Lokalnym zbiórkom'} />
        </form>
  )
}

export default WhoWeHelpButtons
