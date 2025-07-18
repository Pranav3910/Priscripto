import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Navbar from './components/Navbar'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[9%]'>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='doctors' element={<Doctors/>}/>
        <Route path='doctors/:speciality' element={<Doctors/>}/>
        <Route path='my-profile' element={<MyProfile/>}/>
        <Route path='my-appointments' element={<MyAppointments/>}/>
        <Route path='appointment/:docId' element={<Appointment/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App