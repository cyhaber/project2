import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='w-full mx-auto'>
        <div className='flex items-center mx-[5%] justify-between h-[5rem]'>
            <div>
             <h1 className='text-[40px] text-violet-800 font-bold '><Link to='/'>Fajar</Link></h1>
            </div>
            <div className='flex justify-between items-center text-[20px] gap-6'>
              <Link className='font-semibold gap-6' to="/signin" >Sign in</Link>
              <Link className='font-semibold bg-violet-700 px-[10px] lg:px-[20px] text-white rounded-xl py-[5px] lg:py-[10px]' to='/signup'>Sign up</Link>
            </div>
        </div>

    </div>
  )
}

export default Header