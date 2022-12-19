import React from 'react'

const ItemsToDonateForm = () => {
  const nowSteps = 1
  const allSteps = 4
  return (
      <div className='itemsToDonateForm'>
          <p className='steps'>Krok {`${nowSteps}/${allSteps}`}</p>
          <form>
          </form>
          <button className='itemsToDonateFormButton'></button>
        </div>
  )
}

export default ItemsToDonateForm
