/* eslint-disable react/prop-types */
import React from 'react'

const WhoWeHelpListItem = ({ name, organizationGoal, items }) => {
  return (
        <li className='whoWeHelpListItem'>
          <div className='whoWeHelpListItemContent'>
              <div className='leftPart'>
                  <h3 className='organizationName'>{`"${name}"`}</h3>
                  <p className='organizationGoal'>{organizationGoal}</p>
              </div>
              <p className='items'>{items}</p>
          </div>
        </li>
  )
}

export default WhoWeHelpListItem
