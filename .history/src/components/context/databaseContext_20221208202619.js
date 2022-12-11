/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'

const DatabaseContext = createContext()

export function DatabaseProvider({ children }) {
    const [fetchError, setfetchError] = useState(null)
    const [database, setDatabase] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            
        }
    }, [])
    return (
        <DatabaseContext.Provider value={{}}>{children}</DatabaseContext.Provider>
    )
}

export default DatabaseContext

// odwołanie do wartości za pomocą const {rzecz} = useContext(DatabaseContext)