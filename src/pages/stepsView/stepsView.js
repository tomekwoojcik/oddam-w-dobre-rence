import React from 'react'
import RowForm from '../../components/atoms/rowForm/rowForm'
import FormSteps from '../../components/organisms/formSteps/formSteps'
import HeaderStepsView from '../../components/organisms/headerStepsView/headerStepsView'
import ContactUs from '../../components/organisms/contactUs/contactUs'
import { DatabaseProvider } from '../../components/context/databaseContext'
const StepsView = () => {
  return (
    <DatabaseProvider>
      <div className='stepsPage'>
        <HeaderStepsView />
        <RowForm />
        <FormSteps />
        <ContactUs />
      </div>
    </DatabaseProvider>
  )
}

export default StepsView
