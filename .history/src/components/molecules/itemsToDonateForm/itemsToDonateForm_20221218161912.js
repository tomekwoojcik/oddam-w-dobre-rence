import React from 'react'

const ItemsToDonateForm = () => {
    const {}
  const nowSteps = 2
  const allSteps = 4
  return (
        <div className='itemsToDonateForm'>
            <p className='steps'>Krok {`${nowSteps}/${allSteps}`}</p>
            <h3></h3>
            <form>
          </form>
          <div className='rowButton'>
            {nowSteps !== 1 ? <button className='itemsToDonateFormButton backButton'>Wstecz</button> : null}
              <button className='itemsToDonateFormButton'>Dalej</button>
          </div>
        </div>
  )
}

export default ItemsToDonateForm
