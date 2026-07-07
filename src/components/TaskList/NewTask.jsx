import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ data, employee }) => {

  const { employees, updateEmployees } = useContext(AuthContext)

  const acceptTask = () => {

    const updatedEmployees = employees.map((emp) => {

      if (emp.id === employee.id) {

        const updatedTasks = emp.tasks.map((task) => {

          if (task === data) {
            return {
              ...task,
              newTask: false,
              active: true,
            }
          }

          return task
        })

        return {
          ...emp,
          tasks: updatedTasks,
          taskNumber: {
            ...emp.taskNumber,
            newTask: emp.taskNumber.newTask - 1,
            active: emp.taskNumber.active + 1,
          },
        }
      }

      return emp
    })

    updateEmployees(updatedEmployees)
  }
  return (
    <div className='flex-shrink-0 w-full lg:w-[300px] h-auto lg:h-full rounded-xl p-5 bg-pink-700'>


           <div className='flex justify-between items-center '>
              
             <h3 className='bg-red-600 py-1 text-white px-3 text-sm rounded'>{data.category}</h3>
              <h4 className='text-sm text-white'>{data.taskDate}</h4>     
           </div>
           <h2 className='mt-5 font-semibold text-white text-2xl'>{data.taskTitle}</h2>
             <p className='text-sm text-white mt-2'> {data.taskDescription}</p>
    
    <div className='mt-4'>
        <button
  onClick={acceptTask}
  className='w-full bg-blue-500 mt-3 text-white rounded'
>
  Accept Task
</button>
    </div>
    
     </div>

  )
}

export default NewTask
