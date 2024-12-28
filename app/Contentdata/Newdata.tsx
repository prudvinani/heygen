'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import heygen from "@/public/heygen.svg";
import { AlignJustify, X, ChevronDown } from 'lucide-react';

const NewData: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className='sticky top-0 left-0 right-0 z-50 w-full  py-2 pb-4 md:pb-1 bg-white'>
            <div>
                <div className='z-0 p-2 md:p-1 '>
                    <div className='w-full h-full '>
                        <div className='flex flex-1 justify-between items-center gap-2'>
                            <div className='flex flex-row justify-center items-center gap-12'>
                                <div className='flex-shrink-0 px-5 py-3'>
                                    <Image className='max-w-full h-auto inline-block align-middle' src={heygen} alt="heygenLogo" width={100} height={40} />
                                </div>
                                <div className='hidden lg:flex flex-row space-x-6 lg:space-x-6 text-base md:text-sm'>
                                    {['Platform', 'Solutions', 'Resources', 'Pricing', 'Enterprise', 'Company'].map((item) => (
                                        <button key={item} className='flex justify-between items-center text-left'>
                                            <span>{item}</span>
                                            <button className='text-gray-400 text-sm'><ChevronDown className='w-5 h-4' /></button>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Buttons for larger screens */}
                            <div className='flex justify-center items-center ml-auto mr-4 gap-2'>
                                <span className='hidden md:block'>Login</span>
                                <button className="border-2 border-gray-950 rounded-3xl px-4 py-2 text-sm font-medium text-center tracking-tight hidden md:block">Contact sales</button>
                                <button className="text-white bg-black rounded-3xl px-4 py-2 text-sm font-medium text-center tracking-tight hover:bg-violet-600 hidden md:block">Sign up for free</button>
                            </div>

                            {/* Hamburger menu for mobile */}
                            <div className='md:hidden '>
                                <button onClick={toggleMenu} className='focus:outline-none'>
                                    {isOpen ? <X /> : <div className='flex items-center'><button className="text-white text-sm bg-black px-6 py-2 rounded-3xl hover:bg-violet-500 mr-2">Sign up for free</button> <AlignJustify /></div>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className='text-base md:text-xs px-5'>
                        <div className='md:hidden backdrop-blur-lg'>
                            <div className='flex flex-col space-y-6'>
                                {/* Mobile Navigation Items */}
                                {['Platform', 'Solutions', 'Resources', 'Pricing', 'Enterprise','Company'].map((item) => (
                                    <button key={item} className='flex justify-between items-center text-left'>
                                        <span>{item}</span><ChevronDown />
                                    </button>
                                ))}
                            </div>

                            {/* Mobile Action Buttons */}
                            <div className='mt-10'>
                                <button className='px-5 py-2.5 bg-signup bg-black text-white hover:bg-violet-500 rounded-full hover:bg-bgsignupfree transition-all duration-300 ease-in-out'>Get Started for free</button>
                                <div className='mt-4'>
                                    <button className='mt-2 pl-4 bg-bglogin rounded-full py-2.5 px-5 hover:bg-primary hover:text-white'>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewData;
