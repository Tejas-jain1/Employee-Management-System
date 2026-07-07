import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
<div 

className="
  min-h-screen
  bg-gradient-to-br
  from-[#030712]
  via-[#111827]
  to-[#172554]
  p-3
  sm:p-5
">
  <Header data={{ firstName: "Admin" }}  changeUser={props.changeUser}/>

  <div className="mt-5">
    <CreateTask />
  </div>

  <div className="mt-4 flex-1 lg:overflow-hidden">
    <AllTask />
  </div>
</div>
  )
}

export default AdminDashboard