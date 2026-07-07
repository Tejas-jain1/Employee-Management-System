import React from 'react'

const CompleteTask = ({data}) => {
  return (
  
       <div className='flex-shrink-0 w-full lg:w-[300px] h-auto lg:h-full rounded-xl p-5 bg-fuchsia-900'>


           <div className='flex justify-between items-center '>
              
             <h3 className='bg-red-600 py-1 text-white px-3 text-sm rounded'>{data.category}</h3>
              <h4 className='text-sm text-white'>{data.taskDate}</h4>     
           </div>
           <h2 className='mt-5 font-semibold text-white text-2xl'>{data.taskTitle}</h2>
             <p className='text-sm text-white mt-2'> {data.taskDescription}</p>
    
             <div className='mt-2'>
                <button className='w-full bg-green-500  mt-3 text-black rounded'>Completed</button>
             </div>
     </div>
  )
}

export default CompleteTask
