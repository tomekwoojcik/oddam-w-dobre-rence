import React from 'react'
import AboutUsImg from '../../atoms/aboutUsImg/aboutUsImg'
import AboutUsText from '../../atoms/aboutUsText/aboutUsText'

const AboutUsBar = () => {
  return (
        <div className='aboutUsBar'>
          <AboutUsText />
          <AboutUsImg/>
        </div>
  )
}

export default AboutUsBar
