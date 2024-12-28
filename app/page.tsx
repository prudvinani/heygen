
import VideoContent from "./Contentdata/VideoContent";
import AllYouNeed from "./Contentdata/AllYouNeed";
import Doit from "./Contentdata/Doit";
import Personalized from "./Contentdata/Personalized";
import Secure from "./Contentdata/Secure";
import Madewithheygen from "./Contentdata/Madewithheygen";

import NewData from "./Contentdata/NavbarCom";
import MeetData from "./Contentdata/MeetData";
import Language from "./Contentdata/Language";
import Footer from "./Contentdata/Footer";
import Hero from "./Contentdata/Herocontent";
import HeroBackground from "./Contentdata/Herocontent";
import NavbarCom from "./Contentdata/NavbarCom";




export default function Home() {
  return <div>


<NavbarCom/>






    <div className="mt-28">
      <p className="text-center px-4 text-2xl leading-tight  font-[350px]  antialiased font-montserrat md:text-[50px]">
        Create and translate videos <br />
        with HeyGen's AI Video Generator
      </p>
      <p className="text-center pt-5 font-inter font-montserrat text-sm md:text-[18px]  px-10 md:px-0">
        Produce studio-quality videos in 175 languages without a camera or crew.
      </p>   <div className="text-center">
        <button className="text-white bg-black rounded-3xl px-4 py-2 text-center mt-10 hover:bg-violet-400 ">Get started for free</button>
      </div>
      <p className="text-center mt-4 text-sm tracking-tight">Unlimited video | No credit card needed</p>
    </div>





<HeroBackground/>


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