import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getOneUser } from '../../api/auth'
import { useQuery } from '@tanstack/react-query'
import { getOneProfile } from '../../api/profile'
import Container from '../../components/shared/Container'
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import qrCode from "../../../public/image/qrcode_new3.png"

const OrderDetails = () => {
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });
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
    <Container>
    <div ref={contentRef} class="text-sm leading-6  border-2 border-red-500 rounded-2xl m-4 md:w-[50%] mx-auto">
    <figure class="relative border-2 border-blue-500 m-2 flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
    <div className='md:flex'>
        <blockquote class="mt-6 w-[90%] text-slate-700  dark:text-slate-300">
            <p><strong>Father:</strong> {data.fname} </p>
            <p><strong>Mother:</strong> {data.mname} </p>
            <p><strong>SID:</strong> {data.sid} </p>
            <p><strong>NID:</strong> {data.nid} </p>
            <p><strong>Course Status:</strong> {data.status} </p>
            <p><strong>Phone:</strong> {oneprofile.phone} </p>
            <p><strong>Date Of Birth:</strong> {oneprofile.dob} </p>
        </blockquote>
        <div className='border-2 rounded-xl border-black text-center mt-2 md:w-[30%] flex justify-center items-center p-2'>
            <img className='w-[30%] md:w-[100%]' src={qrCode} alt="" />
        </div>
        </div>
        <figcaption class="flex items-center space-x-4 justify-center">
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-[80%] rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={oneprofile.image} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{oneprofile.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.email}</p>
    </div>
</a>
        </figcaption>
        
        
    </figure>
    <div className=' text-center m-2 w-[80%] mx-auto flex justify-center items-center font-extrabold'>Arafat Motors Driving Training School</div>
</div>
<div className='text-center'>
<button className='w-[50%] bg-red-500 rounded-xl mx-auto text-center h-10 hover:bg-blue-500 hover:text-white font-bold text-xl ' onClick={() => reactToPrintFn()}>Print</button>

</div>
</Container>
   
  )
}

export default OrderDetails
