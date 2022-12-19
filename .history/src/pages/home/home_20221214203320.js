import React from 'react'
import { DatabaseProvider } from '../../components/context/databaseContext'
import SingUpContext from '../../components/context/signUpContext'
import AboutUsBar from '../../components/organisms/aboutUsBar/aboutUsBar'
import ContactUs from '../../components/organisms/contactUs/contactUs'
import Header from '../../components/organisms/header/header'
import SimpleSteps from '../../components/organisms/simpleSteps/simpleSteps'
import ThreeColumns from '../../components/organisms/threeColumns/threeColumns'
import WhoWeHelp from '../../components/organisms/whoWeHelp/whoWeHelp'

const Home = () => {
  return (
    <div className='homePage'>
      <DatabaseProvider>
          <Header />
          <ThreeColumns />
          <SimpleSteps />
          <AboutUsBar />
          <WhoWeHelp whoWeHelpTitle={'Komu pomagamy?'} />
          <ContactUs />
      </DatabaseProvider>

    </div>
  )
}

export default Home
