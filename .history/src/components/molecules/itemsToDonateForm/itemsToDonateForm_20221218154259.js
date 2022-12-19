import React from 'react'

const ItemsToDonateForm = () => {
  const nowSteps = 2
  const allSteps = 4
  return (
        <div className='itemsToDonateForm'>
            <p className='steps'>Krok {`${nowSteps}/${allSteps}`}</p>
            <h3></h3>
            <form>
            </form>
            {nowSteps !== 1 ? <button className='itemsToDonateFormButton'>Wstecz</button> : null}
            <button className='itemsToDonateFormButton'>Dalej</button>
        </div>
  )
}

export default ItemsToDonateForm
