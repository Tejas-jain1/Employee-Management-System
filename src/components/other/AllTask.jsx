import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'
const AllTask = () => {

const authData=useContext(AuthContext)




  return (
<div

  className="
    bg-[#1c1c1c]
    p-5
    rounded
    mt-5
    
  "
>

<div className="bg-fuchsia-700 mb-2 py-2 px-2 rounded  text-white flex justify-between items-center">

<h2 className="w-2/5 lg:w-1/5 text-[10px] sm:text-sm lg:text-lg font-medium">Employee Name</h2>
 <h3 className="w-[15%] lg:w-1/5 text-[10px] sm:text-sm lg:text-lg font-medium text-center">New Task</h3>

<h5 className="w-[15%] lg:w-1/5 text-[10px] sm:text-sm lg:text-lg font-medium text-center">Active Task</h5>

<h5 className="w-[15%] lg:w-1/5 text-[10px] sm:text-sm lg:text-lg font-medium text-center">Completed</h5>

<h5 className="w-[15%] lg:w-1/5 text-[10px] sm:text-sm lg:text-lg  font-medium text-center">Failed</h5>
  
  </div> 
  
  

{authData.employees.map((elem) => {
  return  <div
  key={elem.id}
  className="border-2 border-purple-700 mb-2 py-2 px-2 flex justify-between items-center rounded"
>

 <h2 className="w-2/5 lg:w-1/5 text-[12px] sm:text-sm lg:text-lg font-medium text-white">
  {elem.firstName}
</h2>

<h3 className="w-[15%] lg:w-1/5 text-[12px] sm:text-sm lg:text-lg text-center text-blue-400">
  {elem.taskNumber.newTask}
</h3>

<h5 className="w-[15%] lg:w-1/5 text-[12px] sm:text-sm lg:text-lg text-center text-yellow-400">
  {elem.taskNumber.active}
</h5>

<h5 className="w-[15%] lg:w-1/5 text-[12px] sm:text-sm lg:text-lg text-center text-white">
  {elem.taskNumber.completed}
</h5>

<h5 className="w-[15%] lg:w-1/5 text-[12px] sm:text-sm lg:text-lg text-center text-red-600">
  {elem.taskNumber.failed}
</h5>
  
  </div> 
    
    
      
})}
       


    </div>
  )
}

export default AllTask
