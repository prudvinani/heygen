import Image from "next/image"
import heygen from "@/public/heygen.svg"
import c2 from "@/public/c2pa.avif"
import cai2ss from "@/public/c2pa.avif"
import { CiLinkedin } from "react-icons/ci";
import { LuYoutube } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (

        <div
            className="pt-20r"

            style={{
                backgroundImage: "url('https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db31dbefabba2ccab38c8b_hero-2%202.avif')",
            }}

        >
            <div className="flex flex-col md:flex-row justify-between px-10 mt-10 space-y-7 font-montserrat">
                <div>
                    <Image src={heygen} alt="heygen" width={100} height={50} />
                    <button className="text-white bg-black rounded-3xl px-4 py-2 text-center mt-5 hover:bg-violet-500">Get started for free</button>
                    <p className="mt-5 ml-4">Login</p>
                </div>



                <div>
                    <div>
                        <p className="text-violet-500 font-semibold">Pricing</p>
                        <p>Pricing Plans</p>
                        <p> API Pricing</p>
                    </div>


                    <div className="md:pt-32">
                        <p className="text-violet-500 font-semibold">HeyGen fro Enterprise</p>
                        <p>Enterprise</p>
                        <p>Content Sales</p>

                    </div>
                </div>



                <div>
                    <div>
                        <p className="text-violet-500 font-semibold">Products</p>

                        <p> Avatar Video</p>
                        <p>API</p>
                        <p>Video Translation</p>
                        <p>Personalized Video</p>
                        <p>Interactive Avatar</p>
                    </div>


                    <div className="md:pt-14">
                        <p className="text-violet-500 font-semibold">Features</p>
                        <p>AI Avatars</p>
                        <p>AI Voices</p>
                        <p>AI Tools</p>
                        <p>Product Overviews</p>
                        <p>Scaled Outreach</p>
                        <p>Zapier Integration</p>



                        <p className="font-semibold text-violet-500">Partners</p>
                        <p> App Integrations</p>
                    </div>


                </div>



                <div>
                    <div>
                        <p className="text-violet-500 font-semibold">Industry</p>
                        <p>Agencies</p>
                        <p>E- Learning</p>
                    </div>




                    <div>
                        <p className="text-violet-500 font-semibold md:pt-32 ">Resources</p>
                        <p>Blog</p>
                        <p>Customer Stories</p>
                        <p>Affiliate Program</p>
                        <p>Webinars</p>
                        <p>Help Center</p>
                        <p>Community</p>
                        <p>How to Guides</p>
                        <p>API Docs</p>
                        <p>FAQ</p>
                        <p>Tutorials</p>
                        <p>Whats New</p>
                    </div>



                </div>



                <div>

                    <div>
                        <p className="text-violet-500 font-semibold">Teams</p>
                        <p>Marketing</p>
                        <p>Learning & Development</p>
                        <p>Localization</p>
                        <p>Sales Enablement</p>
                    </div>

                    <div>
                        <p className="text-violet-500 font-semibold md:pt-20">Company</p>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Competitors</p>
                        <p>Trust & Safety</p>
                        <p>AI Research</p>
                        <p>Security Portal</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Moderation Policy</p>
                        <p>Cookie Preference</p>
                    </div>
                </div>






            </div>






            <div className="flex flex-col pt-10 md:flex-row justify-between px-10 items-center">



                <div className="text-[10px]">
                    <p>@Copyright HeyGen</p>
                    <p>12130 Millennium Drive Suite 300, </p>
                    <p>Los Angeles, CA 90094</p>
                </div>


                <div className="hidden md:block">
                    <div className="flex items-center space-x-2  ">
                        <Image src={c2} alt="c2" width={30} height={30} />
                        <div>
                            <p className="text-[8px]">Content  </p>
                            <p className="text-[8px]">initiative</p>
                            <p className="text-[8px]">Authenticity</p>
                        </div>
                        <Image src={cai2ss} alt="c2" width={30} height={30} />

                    </div>
                </div>






                <div className="flex space-x-3 pt-11">
                    <CiLinkedin size={20} />
                    <LuYoutube size={20} />
                    <FaXTwitter size={20} />
                </div>


            </div>
        </div>
    )
}

export default Footer