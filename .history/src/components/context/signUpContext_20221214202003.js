/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import supabase from '../../config/supabaseClient'

const SingUpContext = createContext()

export function SingUpProvider ({ children }) {
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

  return (
        <DatabaseContext.Provider value={{ database, fetchError, getValue, setUserName, setUserEmail, setMessage, userEmail, userName, message, sentDataContactUs, inputError, arrayPaginate, pagesVisited, itemsPerPages, changePage, emailUser, setEmailUser, password, setPassword, reapeatPassword, setReapeatPassword, registerInputError, registerHandle }}>{children}</DatabaseContext.Provider>
  )
}
export default DatabaseContext

// odwołanie do wartości za pomocą const {rzecz} = useContext(DatabaseContext)