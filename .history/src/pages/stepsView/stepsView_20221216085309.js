import React from 'react'
import RowForm from '../../components/atoms/rowForm/rowForm'
import FormSteps from '../../components/organisms/formSteps/formSteps'
import HeaderStepsView from '../../components/organisms/headerStepsView/headerStepsView'
import ContactUs from '../../components/organisms/contactUs/contactUs'
const StepsView = () => {
  return (
    <div className='stepsPage'>
      <HeaderStepsView />
      <RowForm />
      <FormSteps />
      <ContactUs/>
    </div>
  )
}

export default StepsView
