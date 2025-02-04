import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getOneUser } from '../../api/auth'
import { useQuery } from '@tanstack/react-query'
import { getOneProfile } from '../../api/profile'

const OrderDetails2 = () => {

    const data=useLoaderData()
    //console.log(data)
    const { data: oneUser = [], refetch } = useQuery({
        queryKey: ['oneUserr'],
        queryFn: async () => await getOneUser(data?.email),   
      })
    const { data: oneprofile = [],  } = useQuery({
        queryKey: ['oneProfilee'],
        queryFn: async () => await getOneProfile(data?.email),   
      })
      //console.log(oneUser)
      //console.log(oneprofile)
  return (
    <div>
    
<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="h-auto mt-4 rounded-lg ">


        <a href="#" className="group relative block rounded-xl bg-black">
          <img
            className='
                object-cover h-[100%] w-full hover:scale-110 transition  duration-300 ease-in-out
              '
            src={data?.image}
            alt='product image'
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
<p className='mx-auto text-center text-xl text-white my-2 underline'>Course Details</p>

            <p className="text-xl font-bold text-white sm:text-2xl"> Title : {data.Course.title}</p>
            <p className="text-xl font-bold text-white sm:text-2xl">Duration : {data.Course.duration}</p>
            <p className="text-xl font-bold text-white sm:text-2xl">Price : {data.Course.price}</p>
            <p className="text-xl font-bold text-white sm:text-2xl">Mechanical Class : {data.Course.mechanical}</p>
            <p className="text-xl font-bold text-white sm:text-2xl">Practical Class : {data.Course.practical}</p>
            <p className="text-xl font-bold text-white sm:text-2xl">Details : {data.Course.details}</p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                {/* <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                  quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                </p> */}
              </div>
            </div>
          </div>
        </a>


      </div>




      <div className="h-auto rounded-lg bg-gray-200 lg:col-span-2">

        <div className="bg-slate-300  md:mt-4 rounded-xl">
          <div className="px-4 sm:px-0">
            <h3 className=" px-4 text-xl mx-auto text-center font-semibold text-gray-900">Applicant Information</h3>
            <p className="mt-1 max-w-2xl text-center mx-auto px-4 text-sm/6 text-gray-500">Personal details and application.</p>




          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Full name</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.name}</dd>
              </div>
              <div className="px-4 py-1  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 my-auto px-4 font-medium text-gray-900">User Image</dt>
                <dd className="mt-1  px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <img className='h-16' src={oneprofile.image} alt="" />
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Father Name</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.fname}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Mother Name</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.mname}</dd>
              </div>
            
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Email address</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.email}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">NID Number</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{oneprofile.nid}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Phone Number 1</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.phone1}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Phone Number 2</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.phone2}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Emergency</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.emergency}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Present Address </dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{oneprofile.preaddress}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Status  </dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.status}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Starting Date </dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.sdate}</dd>
              </div>
            
              {/* 
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                  
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span className="shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
         
         */}
            </dl>
          </div>
        </div>

      </div>
    </div>



    </div>
   
  )
}

export default OrderDetails2
