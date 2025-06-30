import React, { useState, useContext, useEffect } from 'react'
import {AppContext} from '../context/AppContext'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Doctors = () => {
  const {speciality} = useParams();
  const [filterDoc, setFilterdoc] = useState([]);
  const navigate = useNavigate();
  const {doctors} = useContext(AppContext);
  const applyFilter = ()=>{

    if(speciality){
      setFilterdoc(doctors.filter((doc)=>doc.speciality === speciality));
    }
    else{
      setFilterdoc(doctors);
    }
  }

  useEffect(()=>{
    applyFilter();
  },[doctors, speciality])

  return (
    <div>
        <p className='text-gray-600'>Browse through the doctors specialist.</p>
        <div className='flex flex-col sm:flex-row gap-5 mt-5'>
          <div className=' text-sm text-gray-600 flex-col gap-4 hidden sm:flex'>
            <p onClick={()=>speciality === "General physician" ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[93vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? 'bg-indigo-50' : ''}`}>General physician</p>
            <p onClick={()=>speciality === "Gynecologist" ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[93vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? 'bg-indigo-50' : ''}`}>Gynecologist</p>
            <p onClick={()=>speciality === "Dermatologist" ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[93vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? 'bg-indigo-50' : ''}`}>Dermatologist</p>
            <p onClick={()=>speciality === "Pediatrician" ? navigate('/doctors') : navigate('/doctors/Pediatrician')} className={`w-[93vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatrician" ? 'bg-indigo-50' : ''}`}>Pediatrician</p>
            <p onClick={()=>speciality === "Neurologist" ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[93vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? 'bg-indigo-50' : ''}`}>Neurologist</p>
            <p onClick={()=>speciality === "Gastroenterologist" ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[93vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? 'bg-indigo-50' : ''}`}>Gastroenterologist</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {filterDoc.map((items, index)=>{
                return<div onClick={()=>navigate(`/appointment/${items._id}`)} key={index} className='w-auto border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
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
        </div>
    </div>
  )
}

export default Doctors