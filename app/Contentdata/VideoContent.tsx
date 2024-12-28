import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"




const VideoContent = () => {
  return (
    <div  >
        <p className='text-center text-3xl   md:text-5xl px-4 hidden md:block md:pt-32'>Video for content creators like you.</p>

        {/* mobile screen */}
        <p className='md:text-center  px-8 text-3xl  block md:hidden mt-7'>Video for content creators </p>
        <p className='block md:hidden  text-3xl px-8 '>like you.</p>
        <p className=' pt-5 px-8 md:text-center'>Whatever you do, whoever you work with — here&apos;s how HeyGen can help.</p>



   <div className="grid grid-rows-1a md:grid-cols-2 md:mx-56 mt-12">

    <div className=' mt-5 '>
    <video
    className="rounded-3xl px-5"
    src="https://resource.heygencdn.com/homepage/AImail_final_opt.mp4"
    autoPlay
    loop
    muted
    playsInline
  />    </div>

 <div className='mt-5'> 
 <Accordion type="single" collapsible className="w-full px-10 ">
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-xl md:text-3xl '>Marketing</AccordionTrigger>
        <AccordionContent>
        Make product explainers and how-to&apos;s for anyone, anywhere, instantly.
        <p>- learn more</p>


        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='text-xl md:text-3xl '>Sales</AccordionTrigger>
        <AccordionContent>
        Train new reps, provide the latest competitive intelligence, and teach reps to sell new products with localized, engaging videos they can watch on-demand. Or reach out to leads with personalized videos made just for them.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='text-xl md:text-3xl '>Learning & Development</AccordionTrigger>
        <AccordionContent>
        Nobody wants to read training docs and e-learning content, and now they don&apos;t have to.
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-4">
        <AccordionTrigger className='text-xl md:text-3xl '>Localization</AccordionTrigger>
        <AccordionContent>
        Translate ads, courses, video podcasts and more to reach your global audience. Say sayonara to dubbing and bonjour to AI voice and lip sync.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
 </div>
   </div>


    </div>
  )
}

export default VideoContent