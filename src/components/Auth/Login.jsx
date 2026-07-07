import React, { useState } from 'react'


const Login = ({handleLogin}) => {


const [email, setemail] = useState('')
const [password, setpassword] = useState('')




const SubmitHandler =(e)=>{
    
        e.preventDefault()
        handleLogin(email,password)
        console.log('email is' ,email)
        console.log('password is' ,password)
        setemail('')
        setpassword('')
 }


  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,#7c3aed_0%,#3b0764_30%,#111827_70%,#000000_100%)]">
       
     
        <div className=' border-2 border-purple-400 p-25 py-30 px-15 rounded-xl'>


         <form  
         onSubmit={(e)=>{
          SubmitHandler(e)
         }}
         
         className='flex items-center flex-col  justify-center' >
          

             <input 
             value={email}

                    onChange={(e)=>{
                      setemail(e.target.value)
                    }}

                 required
             
               className=' border-2 border-purple-500 bg-transparent text-xl py-3 px-5 rounded-full placeholder:text-gray-400 outline-none text-white'
             
             type="email" placeholder='Enter Your Email' />
             

             <input 

                 value={password}
                 onChange={(e)=>{
                  setpassword(e.target.value)
                 }}

                 required

                 className=' border-2 border-purple-500 bg-transparent text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-400 outline-none text-white'

             type="password" placeholder='Enter Password' />


             <button
               className='  border-purple-500 font-bold bg-purple-400 text-xl py-3 px-27 mt-5 rounded-ful text-white rounded-4xl border-none outline-none'
             
             >Log in</button>

         </form>


        </div>


    </div>
  )
}

export default Login
