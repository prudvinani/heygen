import React from 'react'
import Image from 'next/image'
import personalized from "@/public/heygenall.webp"
const Personalized = () => {
  return (
  <div >
      <div className='grid grid-rows-1 md:grid-cols-2 px-10 md:mx-16 md:pt-20'>
    <div>
    <p className='text-6xl hidden md:block'>Personalized  </p>
    <p className='text-6xl pt-1 hidden md:block'>messages without a</p>
    <p className='text-6xl pt-1 hidden md:block'>person.</p>
{/* mobile */}
<p className=' text-3xl block md:hidden pt-16'>Personalized messages without a person</p>
    
        <p className='mt-5 font-montserrat font-medium'>Use your avatar to send personalized videos and branded landed  </p>
           <p className='font-montserrat font-medium'>to each contact in your CRM. Bump up qualified leads and</p>
           <p className='font-montserrat font-medium'> conversion rates with videos crafted for individuals, made at scale.</p>
        <button className='text-white bg-black px-4 py-2 rounded-full mt-5 mb-10'>Learn more</button>
    </div>


    <div className='overflow-hidden'>
                        <img 
                            className='inline-block rounded-[2rem] ll:min-w-[43rem]  max-h-[45rem] '
                            loading="lazy" src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66a9fecef2bdc8ab51fc0436_Frame%20538%20(1)-p-1080.webp">
                        </img>
                    </div>
    </div>
  </div>
  )
}

export default Personalized