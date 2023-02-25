import React from 'react'
import moment from 'moment';


const Footer = () => {
  return (
    <section className='w-full text-center mt-20 '>
        <footer  className='py-10'>
            <h4 className='text-violet-900 text-[20px] font-semibold'>&copy; Fajar anugrah {moment().format('YYYY')} 🚀</h4>
        </footer>
    </section>
        
  )
}

export default Footer
