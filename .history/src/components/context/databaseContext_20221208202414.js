/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

const DatabaseContext = createContext()

export function DatabaseProvider ({ children }) {
  const [fetchError, setfetchError] = useState(null)
    const [database, setDatabase] = useState(null)
    
  return (
      <DatabaseContext.Provider value={{}}>{ children }</DatabaseContext.Provider>
  )
}

export default DatabaseContext

// odwołanie do wartości za pomocą const {rzecz} = useContext(DatabaseContext)