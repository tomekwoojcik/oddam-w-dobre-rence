import React from 'react'
import AboutUsBar from '../../components/organisms/aboutUsBar/aboutUsBar'
import Header from '../../components/organisms/header/header'
import SimpleSteps from '../../components/organisms/simpleSteps/simpleSteps'
import ThreeColumns from '../../components/organisms/threeColumns/threeColumns'

const Home = () => {
  return (
    <div className='homePage'>
      <Header />
      <ThreeColumns />
      <SimpleSteps />
      <AboutUsBar />
      <Who
    </div>
  )
}

export default Home
