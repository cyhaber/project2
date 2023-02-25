import React from 'react'
import imgBanner from '../assets/img/1.webp'
import Search from './Search'
import {RiWhatsappFill} from 'react-icons/ri'
function Banner() {
  return (
    <section className='w-full bg-[#eaeeff] max-h-[640px] mt-[40px] mx-auto'>
       <div className='flex flex-col lg:flex-row mb-20'>
        {/* img  */}   
        <div className='hidden flex-1 lg:flex '>
              <img src={imgBanner} className='w-[580px]  h-[450px]' alt='img banner'></img>
        </div>
        {/* text  */}
        <div className='flex flex-col flex-1 items-center lg:items-start  lg:ml-8 '>
          <h1 className='text-black text-center lg:text-left text-[40px] font-bold lg:text-[58px] leading-none '>
            <span className='text-violet-900 '>STORE</span> Penyedia berbagai templet</h1>
         
          <p className='max-w-[450px] mt-10 font-4xl lg:text-[20px] font-semibold px-4 lg:px-0  text-center lg:text-left'>✔HTML, ✔CSS, ✔JS, ✔CSS Tailwind, dan ✔Bootstrap. dan juga mendapatkan update terbaru🚀 dari program yang sudah anda di beli. Jika ada yang mau di tanyakan bisa hubungin admin😊</p>
         
          <a href='https://wa.me/' target='_blank' rel="noreferrer" className='bg-violet-700 h-16 w-40 flex justify-center items-center rounded-lg text-[24px] font-bold text-white gap-2 mt-2'><RiWhatsappFill className='text-green-400'/>fajar</a>
        </div>
       </div>
       <Search/>
    </section>
  )
}

export default Banner
