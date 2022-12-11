import React from 'react'
import DatabaseContext from '../../components/context/databaseContext'
import AboutUsBar from '../../components/organisms/aboutUsBar/aboutUsBar'
import Header from '../../components/organisms/header/header'
import SimpleSteps from '../../components/organisms/simpleSteps/simpleSteps'
import ThreeColumns from '../../components/organisms/threeColumns/threeColumns'
import WhoWeHelp from '../../components/organisms/whoWeHelp/whoWeHelp'

const Home = () => {
  return (
    <div className='homePage'>
      <DatabaseContext>
        <Header />
        <ThreeColumns />
        <SimpleSteps />
        <AboutUsBar />
        <WhoWeHelp whoWeHelpTitle={'Komu pomagamy?'} />
      </DatabaseContext>
    </div>
  )
}

export default Home
