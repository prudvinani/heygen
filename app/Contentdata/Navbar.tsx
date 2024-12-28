import React from 'react'
import heygen from "@/public/heygen.svg"
import Image from 'next/image'
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
            <div className="flex justify-between mx-6 my-3 items-center">



{/* image */}
<div>




<div className="flex space-x-9 items-center">

  <Image src={heygen} width={130} height={40} alt="heygen"/>



 <div className="   flex items-center  pl-8 text-[13px] " > <p className='hidden md:block'>Platform </p> <FaAngleDown className="ml-1 hidden md:block"/> </div>
 <div className="flex items-center  text-[13px] font-medium "> <p className='hidden md:block'>Solutions </p> <FaAngleDown className="ml-1  hidden md:block" /> </div>
 <div className="flex items-center text-[13px] "> <p className='hidden md:block'>Resources </p> <FaAngleDown className="ml-1 hidden md:block "/> </div>
 <div className="flex items-center  text-[13px] "> <p className='hidden md:block'>Pricing </p> <FaAngleDown className="ml-1 hidden md:block"/> </div>
 <div className="flex items-center  text-[13px] ">  <p className='hidden md:block'>Exterprise </p> <FaAngleDown className="ml-1 hidden md:block"/> </div>
 <div className="flex items-center text-[13px]"> <p className='hidden md:block'>Company </p> <FaAngleDown className="ml-1 hidden md:block"/> </div>
</div>

</div>





<div className="flex items-center space-x-2">
  <p className='hidden md:block'>Login</p>
  <button className="border-2 border-gray-950 rounded-3xl px-4 py-2  text-sm font-medium  text-center tracking-tight  hidden md:block">Contact sales</button>
  <button className="text-white bg-black rounded-3xl px-4 py-2 text-sm font-medium  text-center tracking-tight hover:bg-violet-600 hidden md:block">Sign up for free</button>
</div>





</div>



<div></div>
    </div>
  )
}   

export default Navbar