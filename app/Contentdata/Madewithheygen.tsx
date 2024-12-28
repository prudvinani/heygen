import React from 'react'
import Image from 'next/image'
import madewithheygen from "@/public/madewithheygen.png"
import twopeople from "@/public/twopeople.jpg"
import annal from '@/public/annal.jpg'
import { IoIosArrowForward } from "react-icons/io";
const Madewithheygen = () => {
    return (
        <div className='mt-20'>
            <p className='md:text-center md:text-5xl  text-xl text-left px-10  '>Made With HeyGen</p>


            <div className='grid grid-rows-1
             md:grid-cols-3 gap-4 md:gap-10 md:mx-40 md:mt-10 items-center px-10'>
                <div  className="group hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Image src={madewithheygen} width={300} height={400} alt='madewithheygen' />
                    <div className='flex space-x-4 mt-3 px-5'> <p className='text-[12px]  font-semibold'>Agency</p> <p className='text-[12px] font-semibold'>Personalized Video</p> <p className='text-[12px] font-semibold'>Localization</p></div>
                    <p className='md:text-xl px-5 mt-4 text-[15px] font-montserrat'>How Ogilvy used HeyGen to get Gen Z to talk about their emotions</p>

                    <p className='text-white bg-black p-3 rounded-full inline-block ml-5 mt-10 cursor-pointer hover:bg-violet-600'><IoIosArrowForward /></p>

                </div>


                <div  className="group hover:scale-105 transition-transform duration-300 ease-in-out" >
                    <Image src={twopeople} width={300} height={400} alt='madewithheygen' />
                    <div className='flex space-x-4 mt-3 px-5'> <p className='text-[12px] font-semibold'>Enterprise</p> <p className='text-[12px] font-semibold'>Personalized Video</p> <p className='text-[12px] font-semibold'>Marketing</p></div>
                    <p  className='md:text-xl px-5 mt-4 text-[15px] font-montserrat' >How Publicis Groupe used HeyGen to customize 100,000 thank you notes</p>
                    <p className='text-white bg-black p-3 rounded-full inline-block ml-5 mt-10 cursor-pointer hover:bg-violet-600'><IoIosArrowForward /></p>

                </div>


                <div className="group hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Image src={annal} width={300} height={400} alt='madewithheygen'  />


                    <div className='flex space-x-4 mt-3 px-5'> <p className='text-[12px] font-semibold'>Other</p> <p className='text-[12px] font-semibold'> Video Translation</p> <p className='text-[12px] font-semibold'>Localization</p></div>
                    <p  className='md:text-xl px-5 mt-4 text-[15px] font-montserrat'>How Argentina's President used HeyGen to translate speech at World Economic Forum</p>
                    <p className='text-white bg-black p-3 rounded-full inline-block ml-5 mt-10 cursor-pointer hover:bg-violet-600'><IoIosArrowForward /></p>

                </div>
            </div>

            <div className='text-center s'>
                <button className='bg-black text-white letter tracking-tight px-4 py-2 rounded-full'>View all customers stories</button>

            </div>

        </div>
    )
}

export default Madewithheygen