import image from "../../../public/image/rana sp.jpg"
import image2 from "../../../public/image/Sabbir Hosain .jpg"
import image3 from "../../../public/image/Tanvir Hosain.jpg"
import image4 from "../../assets/e/e7.jpg"

const TrustUs = () => {


  return (





    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          We are very happy because we have happy customers
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
          Arafat Driving Training School is a BRTA registered Driving Training Centre. [Reg. No: 116/2018] It is the first and only driving school in Bangladesh that has its own learning management software (LMS).
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>


      <div className="relative flex items-center justify-center w-full dark:text-gray-50">
        <button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-400 focus:ri focus:ri focus:ri dark:bg-gray-900">

        </button>
        <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            {/*  */}
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
              <div className="flex space-x-1">
                <img alt="" src={image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                  <a rel="noopener noreferrer" href="#" className="text-xl font-semibold">Rana Hosain</a>
                  
            
                </div>
              </div>
              <div>


                <p className="text-xl text-start dark:text-black font-semibold">Enrolling in Arafat Driving school was  a really good decision i made for my driving education .The instruction were incredible skilled ar teaching .They have a  supportive learning environment that allowed me to ask question and make mistakes without felling judged. </p>
              </div>

            </div>

          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            {/*  */}
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
              <div className="flex space-x-1">
                <img alt="" src={image4} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                  <a rel="noopener noreferrer" href="#" className="text-xl font-semibold">Rakib Hossain</a>
                  
            
                </div>
              </div>
              <div>


                <p className="text-xl text-start dark:text-black font-semibold">আরাফাত ড্রাইভিং স্কুলে ভর্তি করা আমার ড্রাইভিং শিক্ষার জন্য সত্যিই একটি ভাল সিদ্ধান্ত ছিল। নির্দেশনা ছিল অবিশ্বাস্য দক্ষ আর শিক্ষণ .তাদের একটি সহায়ক শিক্ষার পরিবেশ রয়েছে যা আমাকে প্রশ্ন জিজ্ঞাসা করতে এবং কোনো ভুল হলে আমাদের সংশোধন করতে দেয়।</p>
              </div>

            </div>

          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            {/*  */}
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
              <div className="flex space-x-1">
                <img alt="" src={image2} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                  <a rel="noopener noreferrer" href="#" className="text-xl font-semibold">Sabbir Hossain</a>
                  
            
                </div>
              </div>
              <div>


                <p className="text-xl text-start dark:text-black font-semibold">A highly Recommended driving  training School .Good services , friendly People Theory classes also available with practical classes.i am happy with my </p>
              </div>

            </div>

          </div>
      
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            {/*  */}
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
              <div className="flex space-x-1">
                <img alt="" src={image3} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                  <a rel="noopener noreferrer" href="#" className="text-xl font-semibold">Tanvir Ahamed</a>
                  
            
                </div>
              </div>
              <div>


                <p className="text-xl text-start dark:text-black font-semibold">Enrolling in Arafat Driving school was  a really good decision i made for my driving education .The instruction were incredible skilled ar teaching .They have a  supportive learning environment that allowed me to ask question and make mistakes without felling judged. </p>
              </div>

            </div>

          </div>

          {/* 2 */}
         




        </div>
        <button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-400 focus:ri focus:ri focus:ri dark:bg-gray-900">

        </button>
      </div>



    </section>


















  );
};

export default TrustUs;