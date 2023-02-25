import React, { useContext, useState } from 'react'

// import icon 
import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'

// import handle menu 
import {Menu} from '@headlessui/react'

import {PropertyContext} from './PropertyContext'
const LocationDropdown = () => {


  const {location, setLocation, locations} = useContext(PropertyContext)
  const [isOpen, setIsOpen] = useState(false)


  return <Menu as="div" className='dropdown relative '>
    <Menu.Button onClick={() => setIsOpen(!isOpen)}  className='dropdown-btn w-full text-left py-10'>
      <RiMapPinLine className='dropdown-icon-primary'/>
    <div>
      <div className='text-[15px] font-medium leading-tight'>
      {location}

      </div>
      <div className='text-[13px]'>Select your location</div>
      {
        isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-primary'/>
        ) : (
          <RiArrowDownSLine className='dropdown-icon-primary'/>
        )
      }
    </div>
    <Menu.Items className='dropdown-menu  rounded-lg w-full top-[105%] bg-white -left-[0.1rem] max-w-[340px] md:backdrop-blur-lg font-semibold'>
      {locations.map((location, index) => {
        return (
          <Menu.Items 
          onClick={(() => setLocation(location))}
          className='cursor-pointer hover:text-violet-700 text-black transition z-40 lg:backdrop-blur ' as="li" key={index}>
          {location}
          </Menu.Items>
        )
      })}
     </Menu.Items>
    </Menu.Button>
  </Menu>
}

export default LocationDropdown
