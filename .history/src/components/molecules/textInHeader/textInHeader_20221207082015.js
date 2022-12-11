import React from 'react'
import FirstPartText from '../../atoms/PartTextInHeader/firstPartText'

const TextInHeader = () => {
  return (
        <div className='textIn'>
          <FirstPartText textHeader={'Zacznij pomagać!'} />
          <FirstPartText textHeader={'Oddaj niechciane '} />
        </div>
  )
}

export default TextInHeader
