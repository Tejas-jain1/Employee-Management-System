import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmplyeeDashboard from './components/Dashboard/EmplyeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getlocalStorage, setlocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

const [user, setUser] = useState(null)
const [loggedInUserData, setloggedInUserData] = useState(null)
const authData=useContext(AuthContext)


useEffect(()=>{
  const loggedInUser=localStorage.getItem('loggedInUser')
  
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setloggedInUserData(userData.data)
  }
} , [])



useEffect(() => {
  if (
    user === "employee" &&
    authData?.employees &&
    loggedInUserData
  ) {
    const updatedEmployee = authData.employees.find(
      (emp) => emp.id === loggedInUserData.id
    );

    if (updatedEmployee) {
      setloggedInUserData(updatedEmployee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: updatedEmployee,
        })
      );
    }
  }
}, [authData, user]);




const handleLogin = (email, password) => {

  if (email === "admin@example.com" && password === "1234") {
    setUser("admin");
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "admin" })
    );
    return;
  }

  if (authData) {
    const employee = authData.employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      setUser("employee");
      setloggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data:employee })
      );
      
    }
  }
else{
  alert("Invalid Credentials")
}
  
}


  return (



    
  <>
    {!user && <Login handleLogin={handleLogin} />}

    {user === "admin" && <AdminDashboard  changeUser={setUser} />}

    {user =="employee" ? <EmplyeeDashboard   changeUser={setUser} data={loggedInUserData}/> : null}
  </>


  )
}

export default App
