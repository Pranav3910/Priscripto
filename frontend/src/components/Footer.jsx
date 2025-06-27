import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm'>
            <div>
                <img className='w-40 mb-5' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Priscripto is a modern hospital management system that simplifies healthcare operations. It helps hospitals manage patient records, appointments, billing, and staff workflows efficiently. Trusted by medical professionals, Priscripto improves coordination and enhances the quality of care across departments.</p>
            </div>
            <div>
                <h1 className='text-xl font-medium mb-5'>COMPANY</h1>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl font-medium mb-5'>GET IN TOUCH</h1>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+0-000-000-000</li>
                    <li>pranavmunde3910@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className='py-5 text-sm text-center'>
            © 2025 Crafted by Pranav with ❤️ and React.
        </div>
    </div>
  )
}

export default Footer