import React from 'react'
import heygenallyou from "@/public/heygenall.webp"
import Image from 'next/image'

import { FaAngleRight } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
const AllYouNeed = () => {
  return (
    <div className='md:pt-20'>
        <p className='md:text-center text-3xl md:text-5xl px-8 mt-4 md:mt-0 tracking-tight'>All you need is words.</p>
        <p className='text-center pt-4 md:block hidden'>Write your script (or get some help with built-in ChatGPT), and watch an avatar read it</p>
        <p className='text-center  md:block hidden'> flawlessly  in one take. Need to change something? No reshoots necessary, just edit the text.</p>
        <p className='px-8 block md:hidden pt-4'>Write your script (or get some help with built-in ChatGPT), and watch an avatar read it flawlessly  in one take. Need to change something? No reshoots necessary, just edit the text.</p>
<div className='text-center'>
<button className="text-white bg-black rounded-3xl px-4 py-2 text-center mt-5">Sign up for free</button>
</div>   





<div className='hidden md:block'>
<div className='flex justify-center items-center px-10'>


<div className=' rounded-[0.5rem] border border-white  bg-stone-700 p-4 mt-10  '>
<p className='flex text-white font-semibold items-center border-1.1'> 🌍Alloy <FaAngleRight/> <FaPlayCircle/></p>
                                <div className='border rounded-3xl p-3 mt-2'>
                                <p className='text-[0.9rem] text-white mt-2'>
                                    Welcome to HeyGen! Give me  </p>
                                <p className='text-white'> script to read, and make edits</p>
                                <p className='text-white font-medium'>a any time you want.</p>
                                </div>
                            </div>






<div className='flex  items-center justify-center mt-7 '>
<p><Image src={heygenallyou} width={400} height={400} alt='heygenallyouneeed'/>
</p></div>
</div>

</div>





     </div>
  )
}

export default AllYouNeed