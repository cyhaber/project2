import React, { useContext, useState } from 'react'

// import icon 
import {RiWindowFill, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'

// import handle menu 
import {Menu} from '@headlessui/react'

import {PropertyContext} from './PropertyContext'
const PriceDropdown = () => {


  const {price, setPrice} = useContext(PropertyContext)
  const [isOpen, setIsOpen] = useState(false)
  const prices = [
    {
      value: 'Price range  (any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '200000 - 400000',
    },
    {
      value: '530000 - 600000',
    },
    {
      value: '900000 - 1000000',
    },
  ]

  return <Menu as="div" className='dropdown relative'>
    <Menu.Button onClick={() => setIsOpen(!isOpen)}  className='dropdown-btn w-full text-left py-10'>
      <RiWindowFill className='dropdown-icon-primary'/>
    <div>
      <div className='text-[15px] font-medium leading-tight'>
      {price}

      </div>
      <div className='text-[13px]'>Select your property</div>
      {
        isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-primary'/>
        ) : (
          <RiArrowDownSLine className='dropdown-icon-primary'/>
        )
      }
    </div>
    <Menu.Items className='dropdown-menu bg-white rounded-lg w-full top-[105%] -left-[0.1rem] max-w-[340px] backdrop-blur-lg '>
      {prices.map((price, index) => {
        return (
          <Menu.Items 
          onClick={(() => setPrice(price.value))}
          className='cursor-pointer hover:text-violet-700 text-black transition font-semibold' as="li" key={index}>
          {price.value}
          </Menu.Items>
        )
      })}
     </Menu.Items>
    </Menu.Button>
  </Menu>
}

export default PriceDropdown
