import React from 'react'
import WhoWeHelpListArray from '../whoWeHelpListArray/whoWeHelpListArray'

const WhoWeHelpList = () => {
  return (
        <div className='whoWeHelpList'>
            <p className='whoWeHelpListParagraf'>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
          </p>
          <WhoWeHelpListArray/>
        </div>
  )
}

export default WhoWeHelpList
