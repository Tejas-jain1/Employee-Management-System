import React, { createContext, useEffect, useState } from 'react'
import { getlocalStorage, setlocalStorage } from '../utils/localStorage'

export const AuthContext= createContext()
const AuthProvider = ({children}) => {


         const [userdata, setuserdata] = useState(null)


         const updateEmployees = (employees) => {
  localStorage.setItem("employees", JSON.stringify(employees))

  setuserdata((prev) => ({
    ...prev,
    employees,
  }))
}

         useEffect(() => {

  if (!localStorage.getItem("employees")) {
    setlocalStorage()
  }

  const { employees, admin } = getlocalStorage()
  setuserdata({ employees, admin })

}, [])
         


  return (

    <div>
  <AuthContext.Provider
  value={{
    ...(userdata || {}),
    updateEmployees,
  }}
>
  {children}
</AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
