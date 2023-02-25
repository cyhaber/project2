import React, { useContext, useState } from 'react'

// import icon 
import {RiWindowFill, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'

// import handle menu 
import {Menu} from '@headlessui/react'

import {PropertyContext} from './PropertyContext'
const PropertyDropdown = () => {


  const {property, setProperty, properties} = useContext(PropertyContext)
  const [isOpen, setIsOpen] = useState(false)


  return <Menu as="div" className='  dropdown relative'>
    <Menu.Button onClick={() => setIsOpen(!isOpen)}  className='dropdown-btn py-10  w-full text-left'>
      <RiWindowFill className='dropdown-icon-primary'/>
    <div>
      <div className='text-[15px] font-medium leading-tight'>
      {property}

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
    <Menu.Items className='dropdown-menu bg-white rounded-lg w-full top-[105%] -left-[0.1rem] max-w-[340px] backdrop-blur-lg font-semibold '>
      {properties.map((property, index) => {
        return (
          <Menu.Items 
          onClick={(() => setProperty(property))}
          className='cursor-pointer hover:text-violet-700 text-black transition' as="li" key={index}>
          {property}
          </Menu.Items>
        )
      })}
     </Menu.Items>
    </Menu.Button>
  </Menu>
}

export default PropertyDropdown
