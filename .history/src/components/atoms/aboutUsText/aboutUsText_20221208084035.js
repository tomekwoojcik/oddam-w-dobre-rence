/* eslint-disable react/prop-types */
import DecorationAsets from '../decorationAssets/decorationAssets'
import React from 'react'

const AboutUsText = ({ aboutUsTextTitle }) => {
  return (
        <div className='aboutUsText'>
          <h3 className='aboutUsTextTitle'>{aboutUsTextTitle}</h3>
          <DecorationAsets/>
        </div>
  )
}

export default AboutUsText
