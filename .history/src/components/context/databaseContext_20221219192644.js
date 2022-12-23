/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import supabase from '../../config/supabaseClient'
import FormStepOne from '../molecules/formSteps/formStepOne/formStepOne'
import FormStepSec from '../molecules/formSteps/formStepSec/formStepSec'

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
  const [loginInputError, setLoginInputError] = useState(null)
  const [user, setUser] = useState(null)
  const [nowSteps, setNowSteps] = useState(1)
  const [nowForm, setNowForm] = useState(null)
  const [dataForm, setDataForm] = useState({})
  const [toDonateForm, setToDonateForm] = useState(null)
  const [inputName, setInputName] = useState('— wybierz —')
  const [arrowRotare, setArrowRotare] = useState(false)

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
    }
  }, [database])

  const registerHandle = async (e) => {
    e.preventDefault()
    if (!emailUser || !password || !reapeatPassword || password !== reapeatPassword || !emailUser.includes('@')) {
      setRegisterInputError('Please fill in all the fields coreectly')
      return
    }
    const { user, session, error } = await supabase.auth.signUp({
      email: emailUser,
      password: password
    })
    if (error) {
      console.log(error)
      setRegisterInputError('Please fill in all the fields coreectly')
    }
    if (user) {
      setRegisterInputError(null)
      console.log(user)
    }
  }

  const logInHandle = async (e) => {
    e.preventDefault()
    if (!emailUser || !password || !emailUser.includes('@')) {
      setLoginInputError('Please fill in all the fields coreectly')
      return
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailUser,
      password: password
    })
    if (error) {
      console.log(error)
      setLoginInputError('Please fill in all the fields coreectly')
    }
    if (data) {
      setLoginInputError(null)
    }
  }
  const navigate = useNavigate()

  const logOutHandle = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const formStepsIncrement = (step) => {
    if (step !== 5) { setNowSteps(step += 1) }
  }
  const formStepsDecrement = (step) => {
    if (step !== 1) { setNowSteps(step -= 1) }
  }
  const itemsToDonateForm = () => {

  }
  useEffect(() => {
    switch (nowSteps) {
      case 1: setToDonateForm(<FormStepOne />); break
      case 2: setToDonateForm(<FormStepSec />); break
    }
  }, [nowSteps])
  const arrowValueList = [1, 2, 3, 4, 5]
  const listFormStepHandle = (e) => {
    console.log(e)
    setArrowRotare(true)
  }
  return (
    <DatabaseContext.Provider value={{ database, fetchError, getValue, setUserName, setUserEmail, setMessage, userEmail, userName, message, sentDataContactUs, inputError, arrayPaginate, pagesVisited, itemsPerPages, changePage, emailUser, setEmailUser, password, setPassword, reapeatPassword, setReapeatPassword, registerInputError, registerHandle, loginInputError, logInHandle, logOutHandle, user, formStepsIncrement, nowSteps, formStepsDecrement, toDonateForm, inputName, listFormStepHandle, arrowRotare, arrowValueList }}>{children}</DatabaseContext.Provider>
  )
}
export default DatabaseContext

// odwołanie do wartości za pomocą const {rzecz} = useContext(DatabaseContext)