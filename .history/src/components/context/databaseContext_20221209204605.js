/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import supabase from '../../config/supabaseClient'

const DatabaseContext = createContext()

export function DatabaseProvider ({ children }) {
  const [fetchError, setfetchError] = useState(null)
  const [database, setDatabase] = useState(null)
  const [value, setValue] = useState('localCollections')
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from(value)
        .select()
      if (error) {
        setfetchError('Could not fetch the database')
        console.log(error)
        setDatabase(null)
      }
      if (data) {
        setDatabase(data)
        setfetchError(null)
      }
    }
    fetchData()
  }, [value])

  const getValue = (e, v) => {
    e.preventDefault()
    setValue(v)
  }
  const array = []

  // eslint-disable-next-line array-callback-return
  database.map((el) => {
  })

  return (
    <DatabaseContext.Provider value={{ database, fetchError, getValue }}>{children}</DatabaseContext.Provider>
  )
}

export default DatabaseContext

// odwołanie do wartości za pomocą const {rzecz} = useContext(DatabaseContext)