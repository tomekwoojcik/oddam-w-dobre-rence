/* eslint-disable react/prop-types */
import React from 'react'
import { Outlet } from 'react-router-dom'
import DecorationAssets from '../../atoms/decorationAssets/decorationAssets'
import WhoWeHelpButtons from '../../molecules/whoWeHelpButtons/whoWeHelpButtons'

const WhoWeHelp = ({ whoWeHelpTitle }) => {
  return (
    <div className='whoWeHelp'>
      <h3 className='whoWeHelpTitle'>{whoWeHelpTitle}</h3>
      <DecorationAssets />
      <WhoWeHelpButtons />
      <Outlet/>
    </div>
  )
}

export default WhoWeHelp
