/* eslint-disable react/prop-types */
import React from 'react'
import CounterInColumn from '../../atoms/counterInColumn/counterInColumn'
import TextInColumn from '../../atoms/textInColumn/textInColumn'
import TitleInColumn from '../../atoms/titleInColumn/titleInColumn'

const OneColumn = ({ counter, title, text }) => {
  return (
        <div className='oneColumn'>
            <CounterInColumn counterColumn={counter} />
            <TitleInColumn titleColumn={title} />
            <TextInColumn textColumn={text} />
        </div>
  )
}

export default OneColumn
