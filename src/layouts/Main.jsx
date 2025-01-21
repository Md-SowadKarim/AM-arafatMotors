import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar/Navbar'
import Footer from '../components/shared/footer/Footer'

const Main = () => {
  return (
    <div>
       <Navbar />
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
        <Footer/>
      </div>
    </div>
  )
}

export default Main
