import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getAllOrder, getOneOrder } from '../../../api/order'
import { useQuery } from '@tanstack/react-query'

const UserDetails = () => {
    const data=useLoaderData()
    //console.log(data)
    const [ord,setOrd]=useState([])
    const { data: order = [], refetch } = useQuery({
        queryKey: ['userOrderr'],
        queryFn: async () => await getAllOrder(),   
      })
        const[load,setLoad]=useState(false)
      //console.log(order)
      var order2=[]
     order2=order.filter((od)=>od?.email == data?.email)
    //console.log(order2)
   
  return (
    <div>
     
{/* <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={data.image} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name : {data.name}</h5>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Email : {data.email}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Address : {data.preaddress}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Address : {data.peraddress}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">NID : {data.nid}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Phone : {data.phone}</p>
    </div>
</a>
{
    
} */}



<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="h-auto rounded-lg ">


        <a href="#" className="group relative block rounded-xl bg-black">
          <img
            alt="image"
            src={data.image}
             className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">


            <p className="text-xl font-bold text-white sm:text-2xl">{data.name}</p>

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

        <div className="bg-slate-300 rounded-xl">
          <div className="px-4 sm:px-0">
            <h3 className=" px-4 text-xl mx-auto text-center font-semibold text-gray-900">Applicant Information</h3>
            <p className="mt-1 max-w-2xl text-center px-4 text-sm/6 text-gray-500">Personal details and application.</p>




          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Full name</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.name}</dd>
              </div>
              {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Father Name</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.fname}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Mother Name</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.mname}</dd>
              </div> */}
            
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Email address</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.email}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">NID Number</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.nid}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Phone Number</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.phone}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Emergency</dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.emergency}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Present Address </dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.preaddress}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 px-4 font-medium text-gray-900">Permanent Address </dt>
                <dd className="mt-1 px-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{data.peraddress}</dd>
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

export default UserDetails
