/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
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
  const [arrayPaginate, setArrayPaginate] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  const [emailUser, setEmailUser] = useState('')
  const [password, setPassword] = useState('')
  const [reapeatPassword, setReapeatPassword] = useState('')
  const [registerInputError, setRegisterInputError] = useState(null)

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
    if (!userName || !userEmail || !message || !userEmail.includes('@')) {
      setInputError('Please fill in all the fields coreectly')
      return
    }
    const { data, error } = await supabase
      .from('users')
      .insert({ userName, userEmail, message })
    if (error) {
      console.error(error)
      setInputError('Please fill in all the fields coreectly')
    }
    if (data) {
      console.log(data)
      setInputError(null)
    }
  }

  const itemsPerPages = 3
  const pagesVisited = pageNumber * itemsPerPages
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  useEffect(() => {
    if (database) {
      setArrayPaginate(database.slice(0, 3))
      console.log(database.lenght)
    }
  }, [database])

  const registerHandle = async (e) => {
    e.preventDefault()
    if (!emailUser || !password || !reapeatPassword || password !== reapeatPassword || !emailUser.includes('@')) {
      setRegisterInputError('Please fill in all the fields coreectly')
      return
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailUser,
      password: password
    })
    if (error) {
      console.log(error)
      setRegisterInputError('Please fill in all the fields coreectly')
    }
    if (data) {
      setRegisterInputError(null)
      console.log(data)
    }
  }

  return (
    <DatabaseContext.Provider value={{ database, fetchError, getValue, setUserName, setUserEmail, setMessage, userEmail, userName, message, sentDataContactUs, inputError, arrayPaginate, pagesVisited, itemsPerPages, changePage, emailUser, setEmailUser, password, setPassword, reapeatPassword, setReapeatPassword, registerInputError, registerHandle }}>{children}</DatabaseContext.Provider>
  )
}
export default DatabaseContext

// odwołanie do wartości za pomocą const {rzecz} = useContext(DatabaseContext)