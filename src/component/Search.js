import React, { useContext } from 'react';
import LocationDropdown from './LocationDropdown'
import PropertyDropdown from './PropertyDropdown';
import PriceDropdown from './PriceDropdown';
// import icons 
import {RiSearch2Line} from 'react-icons/ri'

// import context 
import { PropertyContext } from './PropertyContext';

const Search = () => {
  const {handleClick} = useContext(PropertyContext)
  return (
    <div className='px-[30px] mb-[20rem]  py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between z-[99]
    gap-4 lg:gap-x-3 lg:-top-32 lg:shadow-1 relative bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
          <LocationDropdown/>
          <PropertyDropdown/>
          <PriceDropdown/>
      <button onClick={(() => handleClick())} className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg 
      flex justify-center text-white items-center  text-lg'>
            <RiSearch2Line/>
      </button>
    </div>
      
  )
};

export default Search;
