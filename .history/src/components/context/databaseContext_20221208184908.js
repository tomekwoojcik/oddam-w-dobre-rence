/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

const DatabaseContext = createContext()

export function DatabaseProvider ({ children }) {
  return (
      <DatabaseContext.Provider value={{}}>{ children }</DatabaseContext.Provider>
  )
}

export default DatabaseContext
