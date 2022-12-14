import React from 'react'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ButtonsMenu = ({ source, linkName }) => {
  return (
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          Test 1
        </Link>
        <li className='buttonItem'><NavLink className="button" to={source}>{linkName}</NavLink></li>
  )
}

export default ButtonsMenu
