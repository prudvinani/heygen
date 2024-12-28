import Image from "next/image"
import nvidia from "@/public/nvidia.avif"
import publics from '@/public/public.avif'
import hubspot from '@/public/hotspot.avif'
import circle from "@/public/circle.avif"
import  salesforce from "@/public/salesforce.avif"
import bmw from "@/public/bwm.avif"
import ogilvy from "@/public/ogily.avif"
import heygen1 from "@/public/heygen1.webp"


const MeetData = () => {
  return (
    <div>
        <div className="hidden md:block">
<div className="flex justify-between mx-10 pt-6 pb-10 ">
<Image src={circle} width={30} height={30} alt="nvidia " className="bg-gray-600" />
<Image src={publics} width={30} height={30} alt="nvidia" />

<Image src={hubspot} width={100} height={30} alt="nvidia" />
<Image src={nvidia} width={100} height={30} alt="nvidia" />


<Image src={circle} width={30} height={30} alt="nvidia" />
<Image src={salesforce} width={120} height={30} alt="nvidia" />

<Image src={bmw} width={30} height={30} alt="nvidia" />
<Image src={ogilvy} width={80} height={30} alt="nvidia" />
</div>
</div>


<div className="grid grid-rows-1 md:grid-cols-2 md:mx-52 ">
<div className="px-10 mt-5">
<Image src={heygen1} height={400} width={400} alt="heygen1"  />

</div>



<div>
<p className="text-6xl hidden md:block">Meet your new </p>
<p className="text-6xl  hidden md:block">spokesperson.</p>
<p className="text-3xl block md:hidden px-10 pt-5">Meet your new spokesperson</p>

<p className="pt-6 px-10 md:px-0">It’s you. Well, an AI version of you that speaks 175 languages, moves naturally, and always follows the script. Create your own avatar with just a webcam, or use one of our avatars. Change voice, clothes, or background with a click.</p>

<div className="px-10"><button className="text-white bg-black w-full p-3 rounded-full mt-4 ">Sign up for free</button>

    </div>
    
      </div>
  
  
  
  </div>
    </div>
  )
}

export default MeetData