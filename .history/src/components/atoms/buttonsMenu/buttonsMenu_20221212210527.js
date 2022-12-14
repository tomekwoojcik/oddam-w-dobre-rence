/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

// eslint-disable-next-line react/prop-types
const ButtonsMenu = ({ source, linkName }) => {
  return (
    <li className='buttonItem'><Link className="button" activeClass="active" to={source} spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
      {linkName}
    </Link></li>
  )
}

export default ButtonsMenu
