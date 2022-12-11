/* eslint-disable react/prop-types */
import DecorationAsets from '../decorationAssets/decorationAssets'
import signature from '../../../assets/Signature.png'
import React from 'react'

const AboutUsText = ({ aboutUsTextTitle, aboutUsTextinText }) => {
  return (
        <div className='aboutUsText'>
            <h3 className='aboutUsTextTitle'>{aboutUsTextTitle}</h3>
            <DecorationAsets />
            <p className='aboutUsTextinText'>{aboutUsTextinText}</p>
            <img to={signature} />
        </div>
  )
}

export default AboutUsText
