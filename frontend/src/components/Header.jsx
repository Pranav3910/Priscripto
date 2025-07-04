import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 w-full bg-primary h-auto'>
        {/* left side */}
        <div className='w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white'>
                Book Appointment <br />With Trusted Doctors
            </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-sm font-light text-white'>
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />schedule your appointment hassle-free.</p>
            </div>
            <a className='bg-white rounded-full flex py-3 px-8 m-auto md:m-0 gap-2 text-sm text-gray-600 hover:scale-105 transition-all duration-300' href="#speciality">
                Book appointment
            <img className='w-3' src={assets.arrow_icon} alt="" />
            </a>
        </div>
        {/* Right side */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header