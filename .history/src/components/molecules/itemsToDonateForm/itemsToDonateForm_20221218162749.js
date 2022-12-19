import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const ItemsToDonateForm = () => {
    const { formStepsIncrement, nowSteps } = useContext(DatabaseContext)
    const allSteps = 4
    return (
        <div className='itemsToDonateForm'>
            {<p className='steps'>Krok {`${nowSteps}/${allSteps}`}</p>}
            <h3></h3>
            <form>
            </form>
            <div className='rowButton'>
                {nowSteps !== 1 ? <button className='itemsToDonateFormButton backButton'>Wstecz</button> : null}
                <button onClick={() => { formStepsIncrement(nowSteps) }} className='itemsToDonateFormButton'>Dalej</button>
            </div>
        </div>
    )
}

export default ItemsToDonateForm
