import React from 'react'
import { DatabaseProvider } from '../../components/context/databaseContext'
import AboutUsBar from '../../components/organisms/aboutUsBar/aboutUsBar'
import Header from '../../components/organisms/header/header'
import SimpleSteps from '../../components/organisms/simpleSteps/simpleSteps'
import ThreeColumns from '../../components/organisms/threeColumns/threeColumns'
import WhoWeHelp from '../../components/organisms/whoWeHelp/whoWeHelp'

const Home = () => {
  const {data}
  return (
    <div className='homePage'>
      <DatabaseProvider>
        <Header />
        <ThreeColumns />
        <SimpleSteps />
        <AboutUsBar />
        <WhoWeHelp whoWeHelpTitle={'Komu pomagamy?'} />
      </DatabaseProvider>
    </div>
  )
}

export default Home
