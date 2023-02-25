import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai' 
const  Login = () => {

const [viewPassword, setViewPassword] = useState(false)

const toggleView = () => {
    setViewPassword(!viewPassword)
}

  return (
    <section className='m-auto flex w-full max-w-[100px] h-[59vh] lg:mb-40 mt-40 justify-center items-center'>
    <div>

 <form className='flex flex-col mx-auto gap-y-5 w-[360px] lg:max-w-full lg:px-4 px-2  border border-gray-900  py-10 rounded-lg'> 
 <h1 className='text-violet-900 mx-auto text-center relative font-semibold text-[50px]'>Form Login</h1>
     <p className='text-[20px] text-center mb-10'>Silahkan Login terlebih dahulu</p>
        <input className='rounded-lg px-5 py-2 outline-none' type='text' placeholder='Username'></input>
        <input className='rounded-lg px-5 py-2 outline-none' type='email' placeholder='Email'></input>
        <div className='flex justify-center items-center pr-2 rounded-lg bg-white'>
        <input className='rounded-lg px-5 w-full py-2 z-10 outline-none' placeholder='Password'
        type={viewPassword ? 'text' : 'password' }
        ></input>
       <p onClick={(() => toggleView())} className='z-20 mx-auto pointer text-[20px]'>{viewPassword ? <AiFillEye/> : <AiFillEyeInvisible/> } </p></div> 
       <Link href='#' className='bg-violet-900 w-[7rem] text-[20px] text-white text-center rounded-lg py-3'>Login</Link>
        <p className='text-[12px] text-red-600 -mt-4'>lupa password ?</p>
     </form>
    </div>
    </section>
   
  )
}

export default Login

