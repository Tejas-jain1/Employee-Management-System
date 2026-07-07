import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ data, employee }) => {

  const { employees, updateEmployees } = useContext(AuthContext)



const completeTask = () => {

  const updatedEmployees = employees.map((emp) => {

    if (emp.id === employee.id) {

      const updatedTasks = emp.tasks.map((task) => {

        if (task === data) {
          return {
            ...task,
            active: false,
            completed: true,
          }
        }

        return task
      })

      return {
        ...emp,
        tasks: updatedTasks,
        taskNumber: {
          ...emp.taskNumber,
          active: emp.taskNumber.active - 1,
          completed: emp.taskNumber.completed + 1,
        },
      }
    }

    return emp
  })

  updateEmployees(updatedEmployees)
}

const failedTask = () => {

  const updatedEmployees = employees.map((emp) => {

    if (emp.id === employee.id) {

      const updatedTasks = emp.tasks.map((task) => {

        if (task === data) {
          return {
            ...task,
            active: false,
            failed: true,
          }
        }

        return task
      })

      return {
        ...emp,
        tasks: updatedTasks,
        taskNumber: {
          ...emp.taskNumber,
          active: emp.taskNumber.active - 1,
          failed: emp.taskNumber.failed + 1,
        },
      }
    }

    return emp
  })

  updateEmployees(updatedEmployees)
}




  
  return (
        <div className='flex-shrink-0 w-full lg:w-[300px] h-auto lg:h-full rounded-xl p-5 bg-purple-700'>


           <div className='flex justify-between items-center '>
              
             <h3 className='bg-red-600 py-1 text-white px-3 text-sm rounded'>{data.category}</h3>
              <h4 className='text-sm text-white'>{data.taskDate}</h4>     
           </div>
           <h2 className='mt-5 font-semibold text-white text-2xl'>{data.taskTitle}</h2>
             <p className='text-sm text-white mt-2'>
              {data.taskDescription}
             </p>
   
          <div className='flex justify-between mt-4'>
         <button
  onClick={completeTask}
  className='bg-green-500 hover:bg-green-600 py-1 px-2 text-sm rounded text-white'
>
  Mark as Completed
</button>

<button
  onClick={failedTask}
  className='bg-red-500 hover:bg-red-600 py-1 px-2 text-sm rounded text-white'
>
  Mark as Failed
</button> 

</div>
     </div>
  )
}

export default AcceptTask
