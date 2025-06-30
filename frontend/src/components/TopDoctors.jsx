import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const {doctors} = useContext(AppContext);
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm: w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0,10).map((items, index)=>{
                return<div onClick={()=>{navigate(`/appointment/${items._id}`)}} key={index} className='w-[200px] border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                        <img className='bg-blue-50' src={items.image} alt="" />    
                        <div className='p-4'>
                            <div className='flex items-center text-sm text-center text-green-500 gap-2'>
                                <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
                            </div>
                                <p className='text-gray-900 font-medium text-lg'>{items.name}</p>
                                <p className='text-gray-600 text-sm'>{items.speciality}</p>  
                        </div>
                    </div>
                
            })}
        </div>
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0);}} className='bg-blue-50 text-gray-60 mt-10 px-12 py-3 rounded-full cursor-pointer'>More</button>
    </div>
  )
}

export default TopDoctors