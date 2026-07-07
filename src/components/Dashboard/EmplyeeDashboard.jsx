import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmplyeeDashboard = (props) => {
  return (
  <div className='p-10 min-h-screen bg-gradient-to-br from-[#000000] via-[#0F172A] to-[#1E293B] '>

  
    <Header  changeUser={props.changeUser} data={props.data}/>
    <TaskListNumber  data={props.data}/>
    <TaskList  data={props.data}/>

  </div>
  )
}

export default EmplyeeDashboard
