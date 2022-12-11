import React from 'react'
import Header from '../../components/organisms/header/header'
import SimpleSteps from '../../components/organisms/simpleSteps/simpleSteps'
import ThreeColumns from '../../components/organisms/threeColumns/threeColumns'

const Home = () => {
  return (
    <div className='homePage'>
      <Header />
      <ThreeColumns />
      <SimpleSteps/>
    </div>
  )
}

export default Home
