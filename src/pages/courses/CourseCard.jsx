import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Aos from 'aos'
import 'aos/dist/aos.css'


const CourseCard = ({data}) => {
  console.log(data)

  useEffect(()=>{
    Aos.init({
      duration:2000
    });
  })



 
  return (
    <div>
      
      
      <div data-aos="fade-right"  class="rounded-lg border-2 border-blue-500  md:w-[320px] lg:w-auto   bg-gray-500 px-1 pt-2 shadow-sm  dark:bg-gray-900">
      <div
          className='
              aspect-square 
              w-full
              relative 
              overflow-hidden 
              rounded-xl
             

              mx-auto
            '
        >
          <img
            className='
                object-cover h-[100%] w-full hover:scale-110 transition  duration-300 ease-in-out
              '
            src={data?.image}
            alt='product image'
          />
          <div
            className='
              absolute top-3 right-3 
            '
          ></div>
        </div>
        {/* <div class="h-56 w-full">
        <div class="relative max-w-xs  rounded-xl bg-cover bg-no-repeat">
  <img
    src={data.image}
    class="max-w-xs transition w-full duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
</div>
        </div> */}
        <div data-aos="fade-left" class="p-2 m-1 bg-gray-300 rounded-xl">
          <div class=" flex items-center justify-between ">
                       <div class="flex items-center  ">
            
              <div className='flex items-center gap-2 justify-end'>
            <p class="text-2xl mb-1 font-extrabold leading-tight text-blue-500 mr-6">{data.price} Tk     </p>
            <div class="flex items-center gap-2">
              <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{data.duration} - <span className='text-black'>Offline</span></p>
            </div>
            </div>
              
             
            </div>
          </div>

          <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{data.title}</a>

          <div class=" flex mt-1 items-center gap-2">
            <div class="flex items-center">
              <svg class="h-4 w-4 text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>

              <svg class="h-4 w-4 text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>

              <svg class="h-4 w-4 text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>

              <svg class="h-4 w-4 text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>

              <svg class="h-4 w-4 text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
            </div>

            <p class="text-sm font-medium text-gray-900 dark:text-white">5.0</p>
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Ratings</p>
          </div>

          <ul class="mt-2 flex items-center justify-between gap-4">
            

            
          </ul>

          <div class="mt-1 px-2 flex items-center justify-between gap-4 pb-1">
          <Link to={`/course/${data?.cid}`} className='col-span-1 cursor-pointer group'>
          <button type="button" class="inline-flex items-center text-gray-500 dark:text-gray-400 rounded-lg bg-primary-700 p-1 py-2.5 text-sm font-medium border-gray-500  dark:border-white border-2 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <span class="sr-only"> Quick Drive </span>
                <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                  <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
               Details
            </button>
             </Link>
         
             <Link to={`/buy/${data?.cid}`} className='col-span-1 cursor-pointer group'>

            <button  type="button" class="inline-flex items-center animate-pulse bg-blue-500  text-white rounded-lg bg-primary-700 p-2 py-2.5 text-sm  border-gray-500  dark:border-white border-2 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <svg
                class="w-5 h-5 -ms-2 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
              Enroll
            </button>
            </Link>
          </div>
        </div>
        </div>
       
    </div>
  )
}

export default CourseCard
