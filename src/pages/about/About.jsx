import React from 'react'
import Tittle from '../../components/shared/tittle/Tittle'
import Container from '../../components/shared/Container'
import News from './News'
import { Helmet } from 'react-helmet-async'
import car from "/src/image/Car.jpg"
import image2 from "/src/image/Government_Seal_of_Bangladesh.svg.png"
import image3 from "/src/image/Emblem_of_Bangladesh_Road_Transport_Authority_(BRTA).svg.png"
import image4 from "/src/image/Khulna ploice.jpeg"
import image5 from "/src/image/images (1).png"

const About = () => {
  return (
   <div>
    <Helmet>
              <link rel="canonical" href="/about" />
              <title> About | Arafat Motors</title>
              <meta name='description' content='This is the Contact Us page of '></meta>
              <meta name='keywords' content='contact, get in touch, let us know, call us, email us , contact us, inform us, pagla mart contact, pm contact'></meta>
          
              </Helmet>
    <Container>
    <section>
      <Tittle first="About" second="Us" thired="Arafat Motor Driving Training School"/>
    {/* <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100"> */}
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img src={car} alt="" className="w-full -mt-8 h-60 sm:h-96 rounded-xl" />
        </div>
    {/* </div> */}
    </section>
    <section className="py-6  text-center">
            <div className="container flex flex-col justify-center p-4 mx-auto">

                <div className="pb-20 text-center">
                <h1 className="text-3xl font-semibold  ">We Are Certified By</h1>
                <hr className='sm:w-[90%] md:w-[50%] h-2 bg-blue-500 mx-auto my-2'/>
                </div>
         
            


                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                           

                       <div className='border-4 border-blue-500 p-4 rounded-xl'>

                       <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image2} />


                         <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Government of Bangladesh</h3>
                       </div>
                       <div className='border-4 border-blue-500 p-4 rounded-xl'>

                       <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image3} />


                         <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Bangladesh Road Transport Authority</h3>
                       </div>
                       <div className='border-4 border-blue-500 p-4 rounded-xl'>

                       <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image4} />

                         <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Khulna Metropolitan Police</h3>
                       </div>
                       <div className='border-4 border-blue-500 p-4 rounded-xl'>

                       <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image5} />

                         <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Global Alliance Of NGOs For Road Safety</h3>
                       </div>
 </div>
            </div>
        </section>
        <section className="dark:bg-gray-800 dark:text-gray-100">
  


      <div className="container flex flex-col justify-center p-4 mx-auto">

                <div className="pb-20 text-center">
                <h1 className="text-3xl font-semibold  ">FAQ</h1>
                <hr className='sm:w-[90%] md:w-[50%] h-2 bg-blue-500 mx-auto my-2'/>
                </div>


        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-400">
              <h3 className="text-3xl font-semibold">Frequently Asked Questions</h3>
              <span className="text-sm font-bold tracki uppercase dark:text-gray-400">Arafat Motor Driving School</span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="space-y-4">
              <details
                className="group border-s-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-gray-900">

                    Why should you choose PATHWAY Driving Training School?
                  </h2>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  PATHWAY Driving Training School is a BRTA Registered Driving Training Centre. We always conduct training programs with the safety of the trainees in mind
                </p>
              </details>

              <details
                className="group border-s-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-gray-900">
                    What makes PATHWAY Driving Training School different?
                  </h2>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  PATHWAY Driving Training School provides training under the supervision of qualified trainers and a structured curriculum. Also, we have special arrangements for women.
                </p>
              </details>
              <details
                className="group border-s-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-gray-900">
                    Why Pathway Driving Training School is the best in Khulna
                  </h2>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Pathway Driving School ensures maximum safety of the trainees along with international quality driving training at a low cost in Dhaka. As a result it has become the best driving training center
                </p>
              </details>
              <details
                className="group border-s-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg font-medium text-gray-900">
                    Is there a certificate at the end of the driving training?
                  </h2>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Yes. Pathway Driving Training School provides certificate to all students after successful completion of driving course. This certificate has an online verification facility. Expats can use this training certificate at the expatriate workplace.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="dark:bg-gray-800 dark:text-gray-100">
        
        <div className="container flex flex-col justify-center p-4 mx-auto">

<div className="pb-20 text-center">
<h1 className="text-3xl font-semibold  ">Our Feature</h1>
<hr className='sm:w-[90%] md:w-[50%] h-2 bg-blue-500 mx-auto my-2'/>
</div>
         


            <div className="grid items-center gap-4 xl:grid-cols-5">
                <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                    <h2 className="text-4xl font-bold">Why Choose Pathway Driving Training School?</h2>
                    <p className="dark:text-gray-400">Get certified, master modern tech skills, and level up your career — whether you’re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.</p>
                </div>
                <div className="p-6 xl:col-span-3">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid content-center gap-4">
                            <div className="p-6 rounded te shadow-md dark:bg-gray-900">
                            <div className="flex text-center mt-4 space-x-4">
                                   
                                   <div className="pl-6 ">
                                       <p className="text-lg font-semibold">Certificate</p>
                                       <hr className='sm:w-[90%] md:w-[150%] h-4 bg-blue-500 mx-auto my-2'/>
                                        </div>
                               </div>
                                <p>Award of recognition certificate to those who successfully complete the course.</p>
                               
                            </div>
                            <div className="p-6 rounded te shadow-md dark:bg-gray-900">
                            <div className="flex text-center mt-4 space-x-4">
                                   
                                   <div className="pl-6 ">
                                       <p className="text-lg font-semibold">Experienced Trainer</p>
                                       <hr className='sm:w-[90%] md:w-[150%] h-4 bg-blue-500 mx-auto my-2'/>
                                   </div>
                               </div>
                                <p>Training provided under BRTA approved and experienced instructors.</p>
                               
                            </div>
                            
                        </div>
                        <div className="grid content-center gap-4">
                        <div className="p-6 rounded te shadow-md dark:bg-gray-900">
                            <div className="flex text-center mt-4 space-x-4">
                                   
                                   <div className="pl-6 ">
                                       <p className="text-lg font-semibold">Trainee Safety</p>
                                       <hr className='sm:w-[90%] md:w-[150%] h-4 bg-blue-500 mx-auto my-2'/>
                                   </div>
                               </div>
                                <p>International standard books and teaching materials for driving training.</p>
                               
                            </div>
                        <div className="p-6 rounded te shadow-md dark:bg-gray-900">
                            <div className="flex text-center mt-4 space-x-4">
                                   
                                   <div className="pl-6 ">
                                       <p className="text-lg font-semibold">Training Modules</p>
                                       <hr className='sm:w-[90%] md:w-[150%] h-4 bg-blue-500 mx-auto my-2'/>
                                   </div>
                               </div>
                                <p>Only PDTS follows international standard driving training and curriculum.</p>
                               
                            </div>
                        <div className="p-6 rounded te shadow-md dark:bg-gray-900">
                            <div className="flex text-center mt-4 space-x-4">
                                   
                                   <div className="pl-6 ">
                                       <p className="text-lg font-semibold">Theory Class</p>
                                       <hr className='sm:w-[90%] md:w-[150%] h-4 bg-blue-500 mx-auto my-2'/>
                                   </div>
                               </div>
                                <p>Conducted in air-conditioned and modern multimedia classrooms.</p>
                               
                            </div>
                        
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <News/>
    </Container>
   </div>
  )
}

export default About
