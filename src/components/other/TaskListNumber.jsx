import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
      
       <div className='rounded-xl  bg-blue-900 py-6 px-9'>

   <h2 className='text-gray-200 text-3xl font-semibold'>{data.taskNumber.newTask}</h2>
   <h3 className=' text-gray-300 text-3xl font-medium text-xl'>New Task</h3>

       </div>


     <div className='rounded-xl  bg-cyan-900 py-6 px-9'>

   <h2 className='text-gray-200 text-3xl font-semibold'>{data.taskNumber.completed}</h2>
   <h3 className=' text-gray-300 text-3xl font-medium text-xl'>Completed Task</h3>

       </div>



            <div className='rounded-xl  bg-fuchsia-900 py-6 px-9'>

   <h2 className='text-gray-200 text-3xl font-semibold'>{data.taskNumber.active}</h2>
   <h3 className=' text-gray-300 text-3xl font-medium text-xl'>Accepted Task</h3>

       </div>

            <div className='rounded-xl  bg-pink-900 py-6 px-9'>

   <h2 className='text-gray-200 text-3xl font-semibold'>{data.taskNumber.failed}</h2>
   <h3 className=' text-gray-300 text-3xl font-medium text-xl'>Failed Task</h3>

       </div>

    </div>
  )
}

export default TaskListNumber
