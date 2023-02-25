import React, { useContext} from 'react'

// import property context 
import  {PropertyContext} from './PropertyContext'


// import componenr 
import PropertyDuct from './PropertiDuct'

import {Link} from 'react-router-dom'

// import spinner 
import { ImSpinner9} from 'react-icons/im'


function PropertyList() {
  const {houses, loading} = useContext(PropertyContext)
  // jika true maka akan terjadi loading 
  if(loading){
    return (
      <div>
      <ImSpinner9 className=' animate-spin text-violet-700 text-4xl lg:mt-[100px]  mt-[200px] mb-[200px] mx-auto'></ImSpinner9>
      <p className='mb-[200px] mx-auto  text-center relative w-[95%] -mt-[12rem]'>Tunggu dulu masih loading <br/> jika lama silahkan klik tombol search kembali 😊 </p>
      </div>
      
    )
  }
  if(houses.length < 1 ){
    return <div className='flex justify-center items-center lg:mt-0 md:mt-40 mt-[20rem]  font-semibold mb-[300px]'>Data tidak di temukan 😥</div>
  }




  return <section className='py-20 z-10 bg-[#eaeeff] '>
        <div className='container mx-auto'>
          <div className='grid rounded-lg grid-cols-1 lg:grid-cols-3 md:gap-x-4  lg:-mt-40 mt-20 md:grid-cols-2  lg:gap-14'>
            {houses.map((product, index) => {
              return <Link to={`/product/${product.id}`} key={index}>
                <PropertyDuct product={product}/>
              </Link>
            })}
          </div>
        </div>

  </section>
}

export default PropertyList
