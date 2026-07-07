import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div id='tasklist' className='flex flex-col lg:flex-row gap-5 mt-10 lg:h-72 lg:overflow-x-auto w-full'>
      

   {data.tasks.map((elem, idx)=>{

      if(elem.active){
       return <AcceptTask key={idx} data={elem} employee={data} />
      }
      if(elem.newTask){
return <NewTask key={idx} data={elem} employee={data} />
      }
      if(elem.completed){
       return <CompleteTask key={idx} data={elem} employee={data} />
      }
      if(elem.failed){
       return <FailedTask key={idx} data={elem} employee={data} />
      }

   })}






    </div>
  )
}

export default TaskList
