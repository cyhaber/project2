import React from 'react'
import Banner from '../component/Banner'
import PropertyList from '../component/PropertyList'
function Home() {
  return (
        <div className='h-full bg-[#eaeeff]'>
            <Banner/>
            <PropertyList/>
        </div>
  )
}

export default Home
