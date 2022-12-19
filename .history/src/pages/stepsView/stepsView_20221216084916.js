import React from 'react'
import RowForm from '../../components/atoms/rowForm/rowForm'
import FormSteps from '../../components/molecules/formSteps/formSteps'
import HeaderStepsView from '../../components/organisms/headerStepsView/headerStepsView'
const StepsView = () => {
  return (
    <div className='stepsPage'>
      <HeaderStepsView />
      <RowForm />
      <FormSteps />
      
    </div>
  )
}

export default StepsView
