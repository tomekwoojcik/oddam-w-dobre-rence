/* eslint-disable react/prop-types */
import React from 'react'
import DecorationAssets from '../../atoms/decorationAssets/decorationAssets'

const WhoWeHelp = ({ whoWeHelpTitle }) => {
  return (
        <div className='whoWeHelp'>
            <h3 className='whoWeHelpTitle'>{whoWeHelpTitle}</h3>
            <DecorationAssets />
        </div>
  )
}

export default WhoWeHelp
