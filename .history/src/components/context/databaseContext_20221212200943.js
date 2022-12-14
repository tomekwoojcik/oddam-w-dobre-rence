/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import supabase from '../../config/supabaseClient'

const DatabaseContext = createContext()

export function DatabaseProvider ({ children }) {
  const [fetchError, setfetchError] = useState(null)
  const [database, setDatabase] = useState(null)
  const [value, setValue] = useState('localCollections')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('')
  const [inputError, setInputError] = useState(null)
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
  const sentDataContactUs = async (e) => {
    e.preventDefault()
    if (!userName || !userEmail || !message) {
      setInputError('Please fill in all the fields coreectly')
      return
    }

    if (!userEmail.includes('@')) {
      setInputError('Please fill @ in email input')
    }
  }

  return (
    <DatabaseContext.Provider value={{ database, fetchError, getValue, setUserName, setUserEmail, setMessage, userEmail, userName, message, sentDataContactUs, inputError }}>{children}</DatabaseContext.Provider>
  )
}

export default DatabaseContext

// odwołanie do wartości za pomocą const {rzecz} = useContext(DatabaseContext)