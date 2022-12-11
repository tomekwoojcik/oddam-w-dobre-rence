import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
        <div className='footer'>
          <p className='textFooter'>Copyright by Coders Lab</p>
          <div className='mediaFooter'>
              <NavLink to={'facebook.pl'}> <div className='media-button facebook' /></NavLink>
              <NavLink><div className='media-button instagram' /></NavLink>
          </div>
        </div>
  )
}

export default Footer
