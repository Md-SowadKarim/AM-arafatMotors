import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Tittle = ({first,second,thired}) => {

  useEffect(()=>{
    Aos.init({
      duration:2000
    });
  })

  return (
    <div className='w-full my-8'>
        <div className='flex flex-col justify-center'>
            <h1 data-aos="fade-right"  className='text-gray-400 dark:text-white text-6xl font-extrabold italic mx-auto text-center'>{first} <span className='text-blue-500 text-6xl font-extrabold italic'>{second}</span></h1>
            <p data-aos="fade-left" className='text-2xl text-gray-500 font-bold mx-auto text-center'>{thired} </p>
            <hr data-aos="fade-up" className='h-1 bg-blue-400 w-[30%] my-2 mx-auto' />
        </div>
      
    </div>
  )
}

export default Tittle