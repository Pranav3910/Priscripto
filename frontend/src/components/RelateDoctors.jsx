import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelateDoctors = ({docId, speciality}) => {
    const {doctors} = useContext(AppContext);
    const navigate = useNavigate();
    const filteredDoc = doctors.filter(doc => doc.speciality == speciality && doc._id != docId);

    return <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {filteredDoc.map((items, index)=>{
                return<div onClick={()=>{navigate(`/appointment/${items._id}`); scrollTo(0 ,0)}} key={index} className='w-auto border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
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

}

export default RelateDoctors