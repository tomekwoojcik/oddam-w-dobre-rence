/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

const DatabaseContext = createContext()

const DatabaseProvider = ({ children }) => {
  return (
      <DatabaseContext.Provider value={{}}>{ children }</DatabaseContext.Provider>
  )
}

export default DatabaseContext
