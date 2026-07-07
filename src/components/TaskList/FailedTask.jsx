import React from 'react'

const FailedTask = ({data}) => {
  return (
   
       <div className='flex-shrink-0 w-full lg:w-[300px] h-auto lg:h-full rounded-xl p-5 bg-indigo-700'>


           <div className='flex justify-between items-center '>
              
             <h3 className='bg-pink-600 py-1 text-white px-3 text-sm rounded'>{data.category}</h3>
              <h4 className='text-sm text-white'>{data.taskDate}</h4>     
           </div>
           <h2 className='mt-5 font-semibold text-white text-2xl'>{data.taskTitle}</h2>
             <p className='text-sm text-white mt-2'> {data.taskDescription}</p>
    
             <div className='mt-2'>
                <button className='w-full bg-red-500  text-white mt-3 rounded'>Failed</button>
             </div>
     </div>
  )
}

export default FailedTask
