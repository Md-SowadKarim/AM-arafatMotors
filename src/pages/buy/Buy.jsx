import React, { useState } from 'react'
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom'
//import BuyNowForm from '../../components/Form/BuyNowForm'

import toast from 'react-hot-toast'
import Loader from '../../components/shared/Loader'

import { Helmet } from 'react-helmet-async'
import AddOrderFrom from '../../components/Form/AddOrderForm'
import useAuth from '../../hooks/useAuth'
import { addOrder } from '../../api/order'
import { getOneUser } from '../../api/auth'
import { useQuery } from '@tanstack/react-query'
import { imageUpload } from '../../api/utils'
import Container from '../../components/shared/Container'

const Buy = () => {
  const navigate=useNavigate()
  const { user } = useAuth()
  const[loading,setLoading]=useState(false)
  const [uploadButtonText, setUploadButtonText] = useState('NID or Birth-Certificate')
    const data=useLoaderData()
    const { data: oneUser={} , } = useQuery({
      queryKey: ['oneUser'],
      queryFn: async () => await getOneUser(user?.email), 
    })
   
    const oid2=Math.floor(Math. random() * (99999999-10000000+1)) + 10000000
    const  oid="OID"+oid2
   
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
  //  const email = form.email.value
    const phone1 = form.phone1.value
    const phone2 = form.phone2.value
    const fname = form.fname.value
    const mname = form.mname.value
    const sdate = form.sdate.value
    const address = form.address.value
    const emergency = form.emergency.value
    const cupon = form.cupon.value
    const image = form.image.files[0]
   
 const image_url = await imageUpload(image)

    const orderData = {
      "name": name,
      "email": user?.email,
      "phone1": phone1,
      "phone2": phone2, 
      "fname": fname, 
      "mname": mname, 
      "address": address,
      "emergency": emergency,
      "sdate": sdate,
      "cupon": cupon,
      "Course": data,
      "status": "pending", 
      // "image": uploadButtonText,
      "image":image_url.data.display_url,
      "oid": oid,
      "user": oneUser,
      "sid": oneUser.sid,
      
     

      
    
  
    }
   
 
  
  
   

 

   try {
     
    

      const data3 = await addOrder(orderData,oid)
      console.log(data3)
      toast.success('Order Completed')
      navigate("/thankyou")
     
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    } finally {
      setLoading(false)
    }

     console.table(orderData)
     
    
   }

     // Handle Image button text
  const handleImageChange = image => {
    setUploadButtonText(image.name)
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
                <Container>
     <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl border-2 border-blue-500 rounded-xl px-4 mx-auto 2xl:px-0">
      <div class="lg:grid lg:grid-cols-2  lg:gap-8 xl:gap-16">
      <div class="relative max-w-xs  items-center text-center mx-auto  overflow-hidden rounded-xl bg-cover bg-no-repeat">
  <img
    src={data.image}
    class="max-w-xs transition   duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
</div>

        <div class="mt sm:mt-8   lg:mt-0">
          <h1
            class="text-xl md:mt-8 font-semibold text-gray-900 sm:text-2xl dark:text-white"
          >{data.title}
          
          </h1>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
          <div className='flex items-center gap-2'>
            <p class="text-4xl font-extrabold leading-tight animate-bounce text-orange-500">{data.price} Tk</p>
            {/* <span class="text-sm text-slate-900  dark:text-gray-400 line-through">{data.lesson} TK</span> */}
          </div>
          {/* {
            data.stock >=1 ? <h1 className='font-extrabold text-green-500'>In Sotck : {data.stock} piece</h1> : <h1 className='font-extrabold text-red-500'>Out Of Stock</h1>
          } */}
          

          
          </div>
          <div>
            <h1 className=' dark:text-blue-500 mt-2 font-extrabold  text-xl text-blue-600'> Duration : {data.duration}</h1>
          </div>
          <div>
            <h1 className=' dark:text-blue-500 mt-2 font-extrabold  text-xl text-blue-600'> Practical : {data.practical} </h1>
          </div>
          <div>
            <h1 className=' dark:text-blue-500 mt-2 font-extrabold  text-xl text-blue-600'> Mechanical : {data.mechanical}</h1>
          </div>
        

         

        
        </div>
      </div>
    </div>
  </section>
  <AddOrderFrom handleImageChange={handleImageChange}
        
        uploadButtonText={uploadButtonText}   handleSubmit={handleSubmit} />
  </Container>
 
   

  
  
    </div>
  )
}

export default Buy
