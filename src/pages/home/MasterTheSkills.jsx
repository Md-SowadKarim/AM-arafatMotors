import image from "/public/image/imggakkery4.jpg"
import image2 from "/public/image/skill1.jpg"
import image3 from "/public/image/skill2.jpg"
import image4 from "/public/image/skill3.jpg"
import image5 from "/public/image/Scooters.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const MasterTheSkills = () => {
  useEffect(()=>{
    Aos.init({
      duration:2000
    });
  })

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <div className="h-auto rounded-lg ">

        <img
          src={image}
          className="  sm:mt-0 lg:mt-36 border-4 border-blue-500 rounded-xl "
          alt=""
        />



      </div>
      {/* 2part */}


      <div className="h-auto rounded-lg ">
        <div>
          <div className="max-w-lg md:max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Master the skills to drive your career
            </h2>
            <hr data-aos="fade-right"  className="h-1 w-[80%] bg-blue-500 my-2 " />

            <p className="mt-4 text-gray-700">
              Get certified, master modern tech skills, and level up your career whether you’re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.
            </p>
          </div>
        </div>


        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-2">

        
          {/* 1sp */}

          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-blue-50 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
           <img src={image2} alt="" />
            </div>
            <div className="flex flex-col justify-center align-middle">
           
              <p className="capitalize">Manual & Auto Car</p>
            </div>
          </div>
          {/* 2and */}

          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-blue-50 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
            <img src={image3} alt="" />
            </div>
            <div className="flex flex-col justify-center align-middle">
      
              <p className="capitalize">Auto Car</p>
            </div>
          </div>


        </dl>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-2">
          {/* 1st */}
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-blue-50 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
            <img src={image4} alt="" />
            </div>
            <div className="flex flex-col justify-center align-middle">
             
              <p className="capitalize">Manual</p>
            </div>
          </div>

         {/* 3nd */}

         <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-blue-50 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
            <img src={image5} alt="" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              
              <p className="capitalize">Scooter</p>
            </div>
          </div>

        </dl>





      </div>
    </div>
  );
};

export default MasterTheSkills;