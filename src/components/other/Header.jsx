import React from 'react'

const Header = (props) => {



const logOutUser=()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
  
  // window.location.reload()
}




  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-white text-2xl font-medium'>
        Hello <br />
        <span className='text-white text-3xl font-bold'>
        {props.data ? props.data.firstName : "Admin"} 👋
        </span>
      </h1>

      <button onClick={logOutUser} className='bg-red-500 active:scale-95 rounded-xl text-white text-lg px-3 py-2'>
        Log out
      </button>
    </div>
  )
}

export default Header