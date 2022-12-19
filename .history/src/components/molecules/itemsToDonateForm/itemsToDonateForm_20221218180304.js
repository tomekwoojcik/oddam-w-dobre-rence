import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const ItemsToDonateForm = () => {
  const { formStepsIncrement, nowSteps, formStepsDecrement } = useContext(DatabaseContext)
  const allSteps = 4
  return (
        <div className='itemsToDonateForm'>
            {nowSteps !== 5 ? <p className='steps'>Krok {`${nowSteps}/${allSteps}`}</p> : null}
            <h3></h3>
          <form className='ToDonateForm'>
            </form>
            <div className='rowButton'>
                {nowSteps !== 1 ? <button onClick={() => { formStepsDecrement(nowSteps) }} className='itemsToDonateFormButton backButton'>Wstecz</button> : null}
                {nowSteps !== 5 ? <button onClick={() => { formStepsIncrement(nowSteps) }} className='itemsToDonateFormButton'>Dalej</button> : <button className='itemsToDonateFormButton formButtonCheck'>Potwierdzam</button>}
            </div>
        </div>
  )
}

export default ItemsToDonateForm
