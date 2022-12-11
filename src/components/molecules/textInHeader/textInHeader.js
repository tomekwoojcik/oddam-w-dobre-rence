import React from 'react'
import FirstPartText from '../../atoms/partTextInHeader/firstPartText'

const TextInHeader = () => {
  return (
        <div className='textIn'>
          <FirstPartText textHeader={'Zacznij pomagać!'} />
          <FirstPartText textHeader={'Oddaj niechciane rzeczy w zaufane ręce'} />
        </div>
  )
}

export default TextInHeader
