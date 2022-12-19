/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import supabase from '../../config/supabaseClient'

const SingUpContext = createContext()

export function SingUpProvider ({ children }) {
  const [emailUser, setEmailUser] = useState('')
  const [password, setPassword] = useState('')
  const [loginInputError, setLoginInputError] = useState('')
  const logInHandle = async (e) => {
    e.preventDefault()
    if (!emailUser || !password || !emailUser.includes('@')) {
      setLoginInputError('Please fill in all the fields coreectly')
      return
    }
    const { user, session, error } = await supabase.auth.signUp({
      email: emailUser,
      password: password
    })
    if (error) {
      console.log(error)
      setLoginInputError('Please fill in all the fields coreectly')
    }
    if (user) {
      setLoginInputError(null)
      console.log(user)
    }
  }

  return (
      <SingUpContext.Provider value={{ emailUser, setEmailUser, password, setPassword }}>{children}</SingUpContext.Provider>
  )
}
export default SingUpContext

// odwołanie do wartości za pomocą const {rzecz} = useContext(DatabaseContext)