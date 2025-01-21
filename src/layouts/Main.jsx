import React from 'react'
import { Outlet } from 'react-router-dom'


import Navbar from '../../src/components/shared/navbar/Navbar'
import Footer from '../../src/components/shared/footer/Footer'


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
