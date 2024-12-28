import React from 'react'
import Image from 'next/image'
import aicpa from "@/public/aicpa.avif"
import gdprc from "@/public/gdprc.avif"
import cai2 from "@/public/newca2.avif"
import cai from "@/public/c2pa.avif"


const Secure = () => {
  return (
    <div className="flex flex-col md:flex-row   md:justify-between md:mx-60 md:mt-40 mx-5 pt-10 ">


<div className='grid grid-rows-2 items-center md:grid-cols-2 gap-4 md:mr-20 md:gap-3'>


<div className='bg-gray-300  rounded-3xl px-5 py-6 md:py-12 flex flex-row items-center justify-around md:flex-col md:justify-evenly'>
<div className='text-center '>
    <Image src={aicpa} width={80} height={80} alt='aicpa'    />      
</div>
<p className='text-sm text-center mt-4'>SOC 2 Type 2 Compliant </p>
    </div>     


    <div className='bg-green-400 rounded-3xl px-5 py-6 flex flex-row items-center justify-around md:flex-col md:justify-evenly  '>
<Image src={cai}  width={80} height={80}  alt='aicpa' />      
<p className='text-sm mt-4 text-center'>Coalition for Content Provenance and Authenticity (C2PA)Certified SOC 2 Compliant</p>
    </div> 

    <div className='bg-green-400 rounded-3xl px-5 py-6 md:py-12 flex flex-row items-center justify-around md:flex-col md:justify-evenly'>
<Image src={cai2}  width={80} height={80}  alt='aicpa' />      
<p className='text-sm text-center mt-4'>Content Authenticity Initiative</p>
    </div> 


    <div className='bg-gray-300  rounded-3xl px-5 py-6 md:py-10 flex flex-row items-center justify-around md:flex-col md:justify-evenly '>
<Image src={gdprc} width={80} height={80}  alt='aicpa' />      
<p className='text-sm text-center mt-4 ml-5 md:ml-0'>General Data Protection Regulation Compliant</p>
    </div> 
    
    
</div>

<div>
    <p className="md:text-6xl text-3xl  mt-5 px-5">Secure. Responsible. Ethical.</p>
    <p className='mt-4 text-sm px-5'>We are committed to safety, security </p>
    <p className='text-sm px-5'>AI avatars can only be created and shared with express consent and cannot be used to spread content that’s harmful to others.</p>
    <button className='text-white bg-black px-5 py-2 rounded-full mt-9 mx-4 hover:bg-violet-500'>Learn about Trust & Safety</button>

</div>
        
    </div>
  )
}

export default Secure