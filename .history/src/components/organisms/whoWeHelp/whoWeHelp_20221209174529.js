/* eslint-disable react/prop-types */
import React from 'react'
import DecorationAssets from '../../atoms/decorationAssets/decorationAssets'
import WhoWeHelpButtons from '../../molecules/whoWeHelpButtons/whoWeHelpButtons'
import WhoWeHelpList from '../../molecules/whoWeHelpList/whoWeHelpList'

const WhoWeHelp = ({ whoWeHelpTitle }) => {
  return (
    <div className='whoWeHelp'>
      <h3 className='whoWeHelpTitle'>{whoWeHelpTitle}</h3>
      <DecorationAssets />
      <WhoWeHelpButtons />
      <WhoWeHelpList/>
    </div>
  )
}

export default WhoWeHelp
