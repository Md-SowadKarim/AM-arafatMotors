
import CountUp from 'react-countup';
import image1 from "../../assets/image/graduated.png"
import image2 from "../../assets/image/online-learning.png"
import image3 from "../../assets/image/students.png"
import image4 from "../../assets/image/branch.png"
import car from "../../assets/image/carSlide.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react';
const Banner = () => {
  useEffect(()=>{
    Aos.init({
      duration:2000
    });
  })

  return (
    <div>

      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
{/* bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] */}
      <section
        className="relative bg-cover bg-[url(https://i.imghippo.com/files/lNjk4995c.jpg)]  bg-center bg-no-repeat rounded-xl"
      >
        
        <div
          className={`absolute  inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-`}
        ></div>
        <div
          className="relative mx-auto lg:pt-44 text-center max-w-screen-xl px-4 py-32 sm:px-6 lg:flex gap-6  lg:items-center lg:px-8"
        >
          <div className="max-w-xl lg:w-[50%] text-center ltr:sm:text-left rtl:sm:text-right">
           <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full lg:ml-8 bg-red-600 md:text-2xl rounded-full bg-rose- px-12 py-3  font-medium text-white shadow focus:outline-none focus:ring  sm:w-auto"
              >
               স্বল্প খরচে বৈধ ড্রাইভিং লাইসেন্সের কাজে সহায়তা সহ ড্রাইভিং শেখানো হয়।



              </a>

            </div>
            <h1 className="text-3xl font-extrabold text-white my-2 sm:text-5xl">
            মহিলাদের প্রশিক্ষণের জন্য সু ব্যবস্থা আছে। 


            </h1>
            <h1 className="text-3xl font-extrabold bg-blue-500 p-2 rounded-xl text-white my-2 sm:text-5xl">
            এখানে আবাসনের সুব্যবস্থা রয়েছে।


            </h1>

            <p data-aos="zoom-in-down" className="mt-8 lg:ml-6 max-w-lg text-red-500 bg-white  font-bold text-xl/relaxed">
           Arafat Motor Driving Training School
            </p>

         
          </div>
          <div className='lg:w-[50%] text-center '>
          <img data-aos="fade-right" className='w-full h-auto mx-auto mt-4' src={car} alt="" />
          </div>
          
          
        </div>
      </section>


      <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className=" bg-slate-400 flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <img className="h-14 w-14" src={image1} alt="" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">
                <CountUp
                  start={0}
                  end={1200}
                  duration={5}
                >
                  1200

                </CountUp>

              </p>
              <p className="capitalize">GRADUATED FROM HERE</p>
            </div>
          </div>
          <div className=" bg-slate-400  flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <img className="h-14 w-14" src={image2} alt="" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">
                <CountUp
                  start={0}
                  end={5}
                  duration={5}
                >
                  7

                </CountUp>

              </p>
              <p className="capitalize">INSTUCTORS NUMBER</p>
            </div>
          </div>
          <div className=" bg-slate-400  flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <img className="h-14 w-14" src={image3} alt="" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">
                <CountUp
                  start={0}
                  end={35}
                  duration={5}
                >
                  127

                </CountUp>
              </p>
              <p className="capitalize">PRESENT STUDENTS</p>
            </div>
          </div>
          <div className=" bg-slate-400 flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <img className="h-14 w-14" src={image4} alt="" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">
                <CountUp
                  start={0}
                  end={1}
                  duration={5}
                >
                  1

                </CountUp>
              </p>
              <p className="capitalize">BRANCH</p>
            </div>
          </div>
        </div>
      </section>
    </div>






  );
};

export default Banner;