import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

import { Helmet } from 'react-helmet-async'
import Container from '../../components/shared/Container'

const CourseDetails = () => {
    const data=useLoaderData()
    console.log(data)

  
  return (

<Container>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-4 mb-8">
        <div className="h-auto rounded-lg  lg:col-span-2">


            {/*
Heads up! 👋

This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            <section
                className="overflow-hidden bg-[url('')] bg-cover bg-top bg-no-repeat from-neutral-600"

                
            >
                <div className="bg-blue-500 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">



                        <header className="bg-white">
                            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{data.title}</h1>

                                        <p className="mt-1.5 text-lg text-slate-700">
                                           Visit Our Office Without Appoinment
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <button
                                            className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
                                            type="button"
                                        >
                                            <span className="text-sm font-medium"> {data.lesson}+ Lesson </span>

                                            
                                        </button>
                                        <button
                                            className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
                                            type="button"
                                        >
                                            <span className="text-sm font-medium"> {data.dt}+  </span>

                                            
                                        </button>

                                        <button
                                            className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                                            type="button"
                                        >
                                            {data.duration}                                        </button>
                                    </div>
                                </div>
                            </div>
                        </header>






                    </div>
                </div>
            </section>


            <div>

                {/*
Heads up! 👋

This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

Plugins:
- @tailwindcss/forms
*/}

                <section className="bg-gray-50">
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                More Details
                            </h2>

                            <p className=" text-gray-500 sm:mt-4 sm:block">
                               {data.details}  </p>
                        </div>

                    </div>
                </section>


            </div>


        </div>
        <div className="h-auto rounded-lg">

            {/*
Heads up! 👋

This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <img
                    alt=""
                    src={data.image}
                    className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                <div className=" p-9 flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
        <span className="text-blue-500 text-2xl font-semibold ">FEE</span>
        <span className="text-blue-500 text-2xl font-semibold" >BDT:{data.price}</span>
      </div>

                   
<Link to={`/buy/${data?.cid}`}>
                    <div
                        className=" group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                        
                    >
                        <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                        <span
                            className="block border border-red-600 bg-blue-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                        >
                            ENROLL NOW
                        </span>
                    </div>
                    </Link>

                </div>
            </article>

            {/*
Heads up! 👋

theme: {
extend: {
animation: {
  border: 'background ease infinite',
},
keyframes: {
  background: {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  },
},
},
}
*/}

<article
className="mt-8 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>
<div className="rounded-[10px] bg-white p-4  sm:p-6">
<time  className="block text-center p-2 text-slate-800 font-semibold text-3xl  "> Inscludes </time>

<a href="#">
  <h3 className="mt-0.5 text-lg font-medium text-gray-900 text-start">
  <ul className="flex-1 mb-6 dark:text-gray-600">
        <li className="flex mb-2 space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span>Course Duration: {data.duration}</span>
        </li>
        <li className="flex mb-2 space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span> BDT {data.price}</span>
        </li>
        <li className="flex mb-2 space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span>{data.title}</span>
        </li>
        <li className="flex mb-2 space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span> Practical : {data.practical}</span>
        </li>
        <li className="flex mb-2 space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span> Mechanical : {data.mechanical}</span>
        </li>
          </ul>          
    
    
  </h3>
</a>


</div>
</article>





        </div>
    </div>
    </Container>

);
  
  
}

export default CourseDetails

