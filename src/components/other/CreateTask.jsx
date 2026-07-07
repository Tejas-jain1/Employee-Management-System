import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const authData = useContext(AuthContext)


   const [taskTitle, settaskTitle] = useState('')
   const [taskDescription, settaskDescription] = useState('')
   const [taskDate, settaskDate] = useState('')
   const [asignTo, setasignTo] = useState('')
   const [category, setcategory] = useState('')


     const [newtask, setnewtask] = useState({})



  const submitHandler = (e) => {
  e.preventDefault();

  const task = {
    taskTitle,
    taskDescription,
    taskDate,
    category,
    active: false,
    newTask: true,
    completed: false,
    failed: false,
  };

  const data = [...authData.employees];

  data.forEach((emp) => {
    if (emp.firstName === asignTo) {
      emp.tasks.push(task);
      emp.taskNumber.newTask += 1;
    }
  });

  authData.updateEmployees(data);

  setasignTo("");
  setcategory("");
  settaskDate("");
  settaskDescription("");
  settaskTitle("");
};


  return (
    <div className="mt-2 bg-[#1c1c1c] rounded-xl p-4 sm:p-5">

      <form onSubmit={(e)=>{
           submitHandler(e)

      }} className="flex flex-col lg:flex-row gap-5 lg:gap-10">

        
        <div className="w-full lg:w-1/2">

          <div className="mb-3">
            <h3 className="text-sm sm:text-base text-gray-300 mb-2">
              Task Title
            </h3>

            <input
            value={taskTitle}
            onChange={(e)=>{
              settaskTitle(e.target.value)
            }}
              type="text"
              placeholder="Make a UI Design"
              className="w-full border border-gray-600 bg-transparent rounded-md px-3 py-2 text-white outline-none text-sm sm:text-base"
            />
          </div>

          <div className="mb-3">
            <h3 className="text-sm sm:text-base text-gray-300 mb-2">
              Date
            </h3>

            <input
             value={taskDate}
            onChange={(e)=>{
              settaskDate(e.target.value)
            }}
              type="date"
              className="w-full border border-gray-600 bg-transparent rounded-md px-3 py-2 text-white outline-none text-sm sm:text-base"
            />
          </div>

          <div className="mb-3">
            <h3 className="text-sm sm:text-base text-gray-300 mb-2">
              Assign To
            </h3>

            <input
             value={asignTo}
            onChange={(e)=>{
              setasignTo(e.target.value)
            }}
              type="text"
              placeholder="Employee Name"
              className="w-full border border-gray-600 bg-transparent rounded-md px-3 py-2 text-white outline-none text-sm sm:text-base"
            />
          </div>

          <div>
            <h3 className="text-sm sm:text-base text-gray-300 mb-2">
              Category
            </h3>

            <input
             value={category}
            onChange={(e)=>{
              setcategory(e.target.value)
            }}
              type="text"
              placeholder="Design, Dev etc."
              className="w-full border border-gray-600 bg-transparent rounded-md px-3 py-2 text-white outline-none text-sm sm:text-base"
            />
          </div>

        </div>

        {/* Right */}

        <div className="w-full lg:w-1/2">

          <h3 className="text-sm sm:text-base text-gray-300 mb-2">
            Description
          </h3>

          <textarea
           value={taskDescription}
            onChange={(e)=>{
              settaskDescription(e.target.value)
            }}
            className="w-full h-32 sm:h-40 border border-gray-600 bg-transparent rounded-md p-3 text-white outline-none resize-none"
          />

          <button
            className="mt-4 w-full bg-purple-700 hover:bg-purple-800 py-3 rounded-md font-medium text-white"
          >
            Create Task
          </button>

        </div>

      </form>

    </div>
  )
}

export default CreateTask