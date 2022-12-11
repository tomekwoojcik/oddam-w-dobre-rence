import React from 'react'
import AboutUsBar from '../../components/organisms/aboutUsBar/aboutUsBar'
import Header from '../../components/organisms/header/header'
import SimpleSteps from '../../components/organisms/simpleSteps/simpleSteps'
import ThreeColumns from '../../components/organisms/threeColumns/threeColumns'
import WhoWeHelp from '../../components/organisms/whoWeHelp/whoWeHelp'

const Home = () => {
  return (
    <div className='homePage'>
      <Header />
      <ThreeColumns />
      <SimpleSteps />
      <AboutUsBar />
      <WhoWeHelp whoWeHelpTitle={'Komu pomagamy?'} />
    </div>
  )
}

export default Home
