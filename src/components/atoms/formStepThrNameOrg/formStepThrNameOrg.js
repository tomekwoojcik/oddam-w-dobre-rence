import React, { useContext } from 'react'
import DatabaseContext from '../../context/databaseContext'

const FormStepThrNameOrg = () => {
  const { nameOrg, setNameOrg } = useContext(DatabaseContext)
  return (
    <input type={'text'} value={nameOrg} onChange={(e) => { setNameOrg(e.target.value) }} className={'formStepThrNameOrgInputName'} />
  )
}

export default FormStepThrNameOrg
