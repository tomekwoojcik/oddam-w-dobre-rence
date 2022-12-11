import React from 'react'
import WhoWeHelpButton from '../../atoms/whoWeHelpButton/whoWeHelpButton'

const WhoWeHelpButtons = () => {
  return (
      <form className='whoWeHelpButtonsList'>
          <WhoWeHelpButton value={'foundation'} titleButton={'Fundacjom'} />
          <WhoWeHelpButton value={'foundation'} titleButton={'Organizacjom pozarządowym'} />
            <WhoWeHelpButton titleButton={'Lokalnym zbiórkom'} />
        </form>
  )
}

export default WhoWeHelpButtons
