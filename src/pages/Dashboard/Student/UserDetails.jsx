import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getAllOrder, getOneOrder } from '../../../api/order'
import { useQuery } from '@tanstack/react-query'

const UserDetails = () => {
    const data=useLoaderData()
    console.log(data)
    const [ord,setOrd]=useState([])
    const { data: order = [], refetch } = useQuery({
        queryKey: ['userOrderr'],
        queryFn: async () => await getAllOrder(),   
      })
        const[load,setLoad]=useState(false)
      console.log(order)
      var order2=[]
     order2=order.filter((od)=>od?.email == data?.email)
    console.log(order2)
   
  return (
    <div>
     
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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
    
}
    </div>
  )
}

export default UserDetails
