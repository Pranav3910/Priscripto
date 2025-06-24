import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
const Navbar = () => {
    const [token, setToken] = useState(true);
    const navigate = useNavigate();
  return (
    <div className='text-sm py-4 border-b-[#ADADAD] border-b-2 mb-5 flex justify-between items-center'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-center gap-5 font-medium '>
            <NavLink to="/home">
                <li className='py-1'>HOME</li>
                <hr className='h-0.5 mx-auto outline-none border-none bg-primary w-3/5 hidden' />
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='h-0.5 mx-auto outline-none border-none bg-primary w-3/5 hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='h-0.5 mx-auto outline-none border-none bg-primary w-3/5 hidden'/>
            </NavLink>
            <NavLink to='contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='h-0.5 mx-auto outline-none border-none bg-primary w-3/5 hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {!token? 
            <button onClick={()=>{navigate('/login')}} className='bg-primary text-white rounded-full py-3 font-light px-8 hidden md:block hover:cursor-pointer'>Create account</button>
            : 
            <div className='flex gap-2 items-center group relative'>
                    <img className='rounded-full w-8' src={assets.profile_pic} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium  z-20 hidden group-hover:block '>
                    <div className='text-gray-600 bg-stone-100 rounded min-w-48 flex flex-col gap-4 p-4'>
                        <p onClick={()=>{navigate('/my-profile')}} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>{navigate('/my-appointments')}} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={()=>{setToken(false)}} className='hover:text-black cursor-pointer'>Log out</p>
                    </div>
                </div>
            </div>
        } 
        </div>
    </div>
  )
}

export default Navbar