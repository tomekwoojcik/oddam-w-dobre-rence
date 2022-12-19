import React from 'react'
import DecorationAssets from '../../atoms/decorationAssets/decorationAssets'
import FormRegister from '../formRegister/formRegister'

const RegistForm = () => {
  return (
        <div className='loginForm'>
            <h3 className='logInHeader'>Załóż konto</h3>
            <DecorationAssets />
            <FormRegister />
        </div>
  )
}

export default RegistForm
