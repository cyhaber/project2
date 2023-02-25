import React from 'react'

// ? import icon 
import {BiArea} from 'react-icons/bi'
import {AiFillCodeSandboxCircle} from 'react-icons/ai'

const  PropertiDuct = ({ product }) => {
    const {image, type, location, address, bedrooms,  price} = product;
  return (
    <div className='bg-white z-10 rounded-lg w-full relative  mx-auto mt-10 pointer p-5'>

        {/* img  */}

      <img className='mb-8' src={image} alt='product-ds'></img>


        {/* type and location  */}

      <div className='flex mb-4  gap-x-4 text-sm'>
        <div className='bg-green-500 px-3 text-white py-1 rounded-full font-semibold'>{type}</div>
      <div className='bg-violet-500  px-3 py-1 text-white rounded-full font-semibold'>{location}</div>
      </div>

        {/* alamat  */}

      <div className='mb-4 text-lg max-w-[260px] font-semibold text-gray-700'>{address}</div>

    {/* icon badrom dan area  */}
    <div className='flex gap-x-4 my-4 '>
        <div className='flex gap-x-2 justify-center items-center text-gray-600'>
            <div><AiFillCodeSandboxCircle/></div>
            <div>{bedrooms}</div>
        </div>

        <div className='flex gap-x-2 justify-center items-center'>
            <div><BiArea/></div>
            <div>{bedrooms}</div>
        </div>
    </div>
 {/* penutup icon badrom dan area  */}

        {/* harga  */}
    <div className='font-semibold text-violet-800'>Rp.{price}</div>
    </div>
  )
}

export default PropertiDuct
