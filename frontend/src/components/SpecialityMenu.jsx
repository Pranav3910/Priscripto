import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col gap-4 py-16 items-center text-gray-800' >
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/3 text-sm text-center'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className='flex gap-4 sm:justify-center pt-5 w-full overflow-scroll'>
            {specialityData.map((item, index)=>{
                return <Link onClick={()=>scrollTo(0,0)} className='flex flex-col text-xs cursor-pointer items-center hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                    <img className='w-16 md:w-24 mb-2' src={item.image} alt="" />
                    <p className='text-sm font-extralight'>{item.speciality}</p>
                </Link>
            })}
        </div>
    </div>
  )
}

export default SpecialityMenu