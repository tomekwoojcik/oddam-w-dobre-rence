import React, { useContext } from 'react'
import WhoWeHelpButton from '../../atoms/whoWeHelpButton/whoWeHelpButton'

const WhoWeHelpButtons = () => {

  return (
        <form className='whoWeHelpButtonsList'>
            <WhoWeHelpButton value={'foundation'} titleButton={'Fundacjom'} />
            <WhoWeHelpButton value={'localCollections'} titleButton={'Organizacjom pozarządowym'} />
            <WhoWeHelpButton value={'non-governmentalOrganizations'} titleButton={'Lokalnym zbiórkom'} />
        </form>
  )
}

export default WhoWeHelpButtons
