
import VideoContent from "./Contentdata/VideoContent";
import AllYouNeed from "./Contentdata/AllYouNeed";
import Doit from "./Contentdata/Doit";
import Personalized from "./Contentdata/Personalized";
import Secure from "./Contentdata/Secure";
import Madewithheygen from "./Contentdata/Madewithheygen";
import HeroBackground from "./Contentdata/Herocontent";
import MeetData from "./Contentdata/MeetData";
import Language from "./Contentdata/Language";
import Footer from "./Contentdata/Footer";
import NavbarCom from "./Contentdata/NavbarCom";
import Image from "next/image";
export default function Home() {
  return <div>


<NavbarCom/>






    <div className="mt-10 relative">
      <p className="text-center px-4 text-2xl leading-tight  font-[350px]  antialiased font-montserrat md:text-[50px]">
        Create and translate videos <br />
        with HeyGen &apos;s AI Video Generator
      </p>
      <p className="text-center pt-5 font-inter font-montserrat text-sm md:text-[18px]  px-10 md:px-0">
        Produce studio-quality videos in 175 languages without a camera or crew.
      </p>   <div className="text-center">
        <button className="text-white bg-black rounded-3xl px-4 py-2 text-center mt-10 hover:bg-violet-400 ">Get started for free</button>
      </div>
      <p className="text-center mt-4 text-sm tracking-tight">Unlimited video | No credit card needed</p>
    </div>





{/* <HeroBackground/> */}
 <div
      style={{
        backgroundImage: "url('https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db31dbefabba2ccab38c8b_hero-2%202.avif')",
     
        backgroundSize: "cover",
        backgroundPosition: "center -50px", 
        backgroundRepeat: "no-repeat",
      }}
    >
<div className="relative">
  {/* First Div: Video */}
  <video
    className="rounded-3xl px-5"
    style={{ borderRadius: "40px", paddingTop: "10px" }}
    src="https://res.cloudinary.com/diqmvbeg6/video/upload/v1727308210/06-HOME-hero_nyz3a8.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
  {/* Second Div: Content */}
  <div
  className="absolute hidden md:block bottom-2 left-6 px-4 py-3 md:bottom-10 md:left-28 text-[10px] md:text-xl font-medium tracking-tight bg-white bg-opacity-80 md:px-6 md:py-4 text-black font-montserrat rounded-3xl shadow-xl backdrop-blur-md"
  style={{ zIndex: 10 }}
>
  <div className="flex space-x-4">
    <Image
      src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db342e29294df7682b40e8_Avatar%201.avif"
      alt="Avatar 1"
      width={40}
      height={40}
      className="rounded-full w-[20px] h-[20px] md:w-[40px] md:h-[40px] "
    />
    <Image
      src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66eb0a35a235b95dd923f95a_headshot.webp"
      alt="Headshot"
      width={40}
      height={40}
      className=' w-[20px] h-[20px] md:w-[40px] md:h-[40px] '
    />
    <Image
      src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66d3fc1ed7d2e1a016725b5f_Mask_group-1-removebg-preview%20(1).avif"
      alt="Mask Group"
      width={40}
      height={40}
      className='rounded-full w-[20px] h-[20px] md:w-[40px] md:h-[40px] '
    />
  </div>
  <hr className="border-t-2 border-gray-300 my-2" />
  <p className=" text-[8px] md:text-xl pt-2">Hey there! Welcome to HeyGen, where</p>
  <p className=" text-[8px] md:text-xl">you can create and translate videos</p>
  <p className=" text-[8px] md:text-xl">without a camera or crew.</p>
</div>

</div>


     
    </div>


    <p className="text-center text-sm md:text-medium font-montserrat pt-10">Trusted by over 45,000 customers |Rated 4.8/5 on G2</p>

    <MeetData />

    <VideoContent />
    <AllYouNeed />
    <Language />
    <Doit />
    <div className="hidden md:block">
    <Personalized />
    </div>
    <Secure />
    <Madewithheygen />  
    <Footer />

  </div>
}