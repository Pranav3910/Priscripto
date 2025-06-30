import React, { useContext, useEffect, useState } from 'react'
import{useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext'
import { assets } from '../assets/assets';
import RelateDoctors from '../components/RelateDoctors';

const Appointment = () => {
  const {docId} = useParams();
  const {doctors} = useContext(AppContext);
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState(0);
  
  const findDoc = ()=>{
    const docInfo = doctors.find(doc => doc._id === docId);
      setDocInfo(docInfo);
  }

  const getSchedule =  ()=>{
    setDocSlots([]);

    const today = new Date();
    for(let i = 0; i < 7; i++){
      let current = new Date(today);
      current.setDate(today.getDate() + i);

      let endDate = new Date();
      endDate.setDate(today.getDate() + i)
      endDate.setHours(21, 0, 0, 0);

      if(today.getDate() === current.getDate()){
        current.setHours(current.getHours() > 10 ?  current.getHours() + 1 : 10);
        current.setMinutes(current.getMinutes() > 30 ? 30 : 0);
      }
      else{
        current.setHours(10);
        current.setMinutes(0);
      }
      let timeSlots = [];
      while(current < endDate){
        let timeFormat = current.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        timeSlots.push({
          dateTime: current,
          Time: timeFormat
        })
        current.setMinutes(current.getMinutes() + 30);
      }
      setDocSlots(prev => [...prev, timeSlots])
    }
  }
  useEffect(()=>{
    findDoc();
  },[doctors, docId])

  useEffect(()=>{
      getSchedule();
  },[docInfo])

  return docInfo &&(
    <div>
        {/* ------------ Doctor Info ------------- */}
        <div className='flex flex-col sm:flex-row gap-4 '>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
          <div className='mb-0.5 border-1 border-gray-300 rounded-lg p-8 py-7 mx-2 sm:mx-0 m-[-80px] sm:m-0 bg-white'>
            <p className='flex gap-2 font-medium text-3xl text-shadow-700'>{docInfo.name} <img src={assets.verified_icon} alt="" /></p>
            <div className='flex gap-2 mt-1 text-gray-600 items-center'>
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className='text-xs py-0.5 rounded-full px-2 border-1 border-gray-300'>{docInfo.experience}</button>
            </div>
            <div className='pt-3'>
              <p className='flex gap-1 font-medium'>About <img className='w-3' src={assets.info_icon} alt="" /></p>
              <p className='pt-1 text-gray-600 text-sm max-w-[700px]'>{docInfo.about}</p>
            </div>
            <p className='mt-4 mb-0 text-gray-600 font-medium'>Appointment fees: ${docInfo.fees}</p>
          </div>
        </div>
        {/* ------------ Booking Slots ------------- */}
        <div className='sm:ml-72 sm:pl-4 mt-8 font-medium text-gray-700'>
          <p>Booking slots</p>
          <div className='flex gap-3 mt-4 w-full items-center overflow-x-scroll hide-scrollbar'>
            {docSlots.length && docSlots.map((items, index)=>{
              return <div key={index} onClick={()=> setSlotIndex(index)} className={`cursor-pointer min-w-16 text-center py-6 text-gray-600 rounded-full ${slotIndex == index ? 'bg-primary text-white' : ''} border-1 border-gray-400`}>
                <p>{items[0] && weekDays[items[0].dateTime.getDay()]}</p>
                <p>{items[0] && items[0].dateTime.getDate()}</p>
              </div>
            })}
          </div>
          <div className='flex gap-3 w-full mt-4 overflow-x-scroll hide-scrollbar'>
            {docSlots.length && docSlots[slotIndex].map((items, index)=>(
                <p onClick={()=>setSlotTime(items.Time)} key={index} className={`text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${items.Time == slotTime ? 'bg-primary text-white' : ''} text-[#949494] border border-gray-400`}>
                  {items.Time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className='bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6'>Book an appointment</button>
        </div>
        {/* ------------ Related Doctors ------------ */}
        <div className='flex flex-col items-center gap-4 my-16 text-[#262626]'>
          <h1 className="text-3xl font-medium">Related Doctors</h1>
          <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors.</p>
          <RelateDoctors docId={docId} speciality={docInfo.speciality}/>
        </div>
    </div>
  )
}

export default Appointment