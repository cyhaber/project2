import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai' 
const  SignUp = () => {

const [viewPassword, setViewPassword] = useState(false)

const toggleView = () => {
    setViewPassword(!viewPassword)
}

  return (
    <section className='m-auto flex w-full max-w-[100px] h-[59vh] mt-40 mb-40 justify-center items-center'>
        <div>
    
     <form className='flex flex-col mx-auto gap-y-5 w-[360px] lg:w-full px-10  border border-gray-900  py-10 rounded-lg'> 
     <h1 className='text-violet-900 mx-auto lg:left-0 -left-6 relative text-center font-semibold text-[50px]'>Form Pendaftaran</h1>
     <p className='text-[20px] mb-10 text-center'>Silahkan Mendaftar terlebih dahulu</p>
        <input className='rounded-lg px-5 py-2 outline-none' type='text' placeholder='FirstName' defaultValue='ex. fajar'></input>
        <input className='rounded-lg px-5 py-2 outline-none' type='text' placeholder='LastName' defaultValue='ex. anugrah'></input>
        <input className='rounded-lg px-5 py-2 outline-none' type='email' placeholder='Email' defaultValue='ex. admin@fajar.com'></input>
        <div className='flex justify-center items-center pr-2 rounded-lg bg-white'>
        <input className='rounded-lg px-5 w-full py-2 z-10 outline-none' placeholder='Password'
        type={viewPassword ? 'text' : 'password' } defaultValue='yourpassword(!@#$%^&*(ABC)(abc))'
        ></input>
       <p onClick={(() => toggleView())} className='z-20 mx-auto pointer text-[20px]'>{viewPassword ? <AiFillEye/> : <AiFillEyeInvisible/> } </p></div> 
       <Link href='#' className='bg-violet-900 w-[7rem] text-[20px] text-white text-center rounded-lg py-3'>Sign Up</Link>
        <p className='text-[12px] text-red-600 -mt-4'><Link to='#'>lupa password ?</Link></p>
     </form>
    </div>
    </section>
   
  )
}

export default SignUp

