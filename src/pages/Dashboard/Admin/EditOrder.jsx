import React, { useState } from 'react'
import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router-dom'
//import BuyNowForm from '../../components/Form/BuyNowForm'

import toast from 'react-hot-toast'


import { Helmet } from 'react-helmet-async'
//import AddOrderFrom from '../../components/Form/AddOrderForm'


import EditOrderFrom from '../../../components/Form/EditOrderForm'
import Loader from '../../../components/shared/Loader'
import useAuth from '../../../hooks/useAuth'
import { addOrder, getOneOrder } from '../../../api/order'
import { useQuery } from '@tanstack/react-query'

const EditOrder = () => {
  const navigate=useNavigate()
  const[loading,setLoading]=useState(false)
 const d=useParams()
    const { data: order={} , refetch } = useQuery({
        queryKey: ['oneOrder'],
        queryFn: async () => await getOneOrder(d.oid), 
      })
    const data=useLoaderData()
    //console.log("data........................",data)
    //console.log(order)
   
    const oid2=Math.floor(Math. random() * (99999999-10000000+1)) + 10000000
    const  oid="SID"+oid2
    const { user } = useAuth()
    const user2 = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
     
    }
   

    
  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const status = form.status.value
    const phone1 = form.phone1.value
    const phone2 = form.phone2.value
    const sdate = form.sdate.value
    const address = form.address.value
    const emergency = form.emergency.value
    const cupon = form.cupon.value
   


    const orderData = {
      "name": name,
      "email": data.email,
      "phone1": phone1,
      "phone2": phone2,
      "address": address,
      "emergency": emergency,
      "sdate": sdate,
      "cupon": cupon,
      "Course": data.Course,
      "status": status, 
      "oid": data.oid,
      "user": data.user,
      
     

      
    
  
    }
   
 
  
  
   

 

   try {
     
    

      const data3 = await addOrder(orderData,data.oid)
      //console.log(data3)
      toast.success('Order Updeted')
      refetch()
      navigate("/dashboard/manage-order")
     
    } catch (err) {
      //console.log(err)
      toast.error(err.message)
    } finally {
      setLoading(false)
    }

     console.table(orderData)
     setLoading(false)
    
   }
if(loading) return <Loader/>
// else if(data.stock == 1){
//   <h1>stock out</h1>
// }
else
  return (
    <div>
      {/* <Helmet>
                  <link rel="canonical" href="/buy" />
                  <title> Order-Now | PM</title>
                  <meta name='description' content={data.details}></meta>
                  <meta name='description' content={data.title}></meta>
                  <meta name='keywords' content={data.keywords}></meta>
          
                </Helmet> */}
     <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
      <div class="relative max-w-xs overflow-hidden rounded-xl bg-cover bg-no-repeat">
  <img
    src={data.Course.image}
    class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
</div>

        <div class="mt-6 sm:mt-8 lg:mt-0">
          <h1
            class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
          >{data.Course.title}
          
          </h1>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
          <div className='flex items-center gap-2'>
            <p class="text-4xl font-extrabold leading-tight text-orange-500">{data.Course.price} Tk</p>
            <span class="text-sm text-slate-900  dark:text-gray-400 line-through">{data.lesson} </span>
          </div>
          {/* {
            data.stock >=1 ? <h1 className='font-extrabold text-green-500'>In Sotck : {data.stock} piece</h1> : <h1 className='font-extrabold text-red-500'>Out Of Stock</h1>
          } */}
          

          
          </div>
          <div>
            <h1 className=' dark:text-blue-500 mt-2 font-extrabold animate-bounce text-2xl text-blue-600'> Course Duration : {data.Course.duration}</h1>
          </div>
        

         

        
        </div>
      </div>
    </div>
  </section>
 
    <EditOrderFrom  data={data} handleSubmit={handleSubmit} />

  
  
    </div>
  )
}

export default EditOrder
