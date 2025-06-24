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

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='*' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='doctors' element={<Doctors/>}/>
        <Route path='my-profile' element={<MyProfile/>}/>
        <Route path='my-appointments' element={<MyAppointments/>}/>
      </Routes>
    </div>
  )
}

export default App