import React from 'react'
import Image from 'next/image'
import flag from "@/public/flag.png"
const Language = () => {
  return (
    <div className='px-10'>
        {/* Every video you have in every language you need. */}
        <div className='bg-indigo-900 grid px-10 p-5 md:grid-cols-2 gap-5 md:gap-80 md:p-20 md:mx-20 rounded-3xl mt-10'>
        <div><p className="text-white text-3xl pt-5 md:text-5xl ">Every video you have in every language you need.  </p>
        
        <p className="text-white pt-5 ">Update existing videos to 175 languages and dialects in minutes. We can even translate for you or add subtitles, making sure lips and voice match perfectly for the world’s easiest, most effective localization.</p>
        <button className='bg-white px-4 py-2 rounded-full mt-4'>Learn more</button>
        </div>
        
        <div>
            <Image src={flag} width={300} height={600} alt='countryflag' className='rounded-3xl'/>
        
        </div>
        </div>
    </div>
  )
}

export default Language