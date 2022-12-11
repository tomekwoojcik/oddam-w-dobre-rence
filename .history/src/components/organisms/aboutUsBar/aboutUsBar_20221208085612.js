import React from 'react'
import AboutUsImg from '../../atoms/aboutUsImg/aboutUsImg'
import AboutUsText from '../../atoms/aboutUsText/aboutUsText'

const AboutUsBar = () => {
  return (
        <div className='aboutUsBar'>
          <AboutUsText aboutUsTextTitle={'O nas'}/>
          <AboutUsImg/>
        </div>
  )
}

export default AboutUsBar
