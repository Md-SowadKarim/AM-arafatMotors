import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getOneUser, verifyUser } from '../../api/auth'
import useAuth from '../../hooks/useAuth'
import Loader from '../../components/shared/Loader'
import toast from 'react-hot-toast'
import Tittle from '../../components/shared/tittle/Tittle'
import VerificationCard from './VerificationCard'
import DataTable from 'react-data-table-component'
import { FaCalendarDay } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'
import Container from '../../components/shared/Container'


const Verification = () => {
    const { user } = useAuth()
    
    const { data: profile={} , refetch, } = useQuery({
        queryKey: ['verifyUser'],
        queryFn: async () => await getOneUser(email), 
      })
      console.log(profile)
   
      const [load,setLoad]=useState(false)
      
 

      console.log(user)
const data= useLoaderData()
    console.log(data) 
   
   const [order,setOrder]=useState([])
      var order2=[]
  const handleSubmit=async e=>{
    setLoad(true)
    e.preventDefault()
  
      const form = e.target
      const  email=form.email.value
      const  dob=form.dob.value

      const profile= await getOneUser(email)
      console.log(profile)
      if(!profile){
        toast.error("there is no profile with this email")
      }else if(profile.dob !== dob){
        toast.error("Date Of Birth Is Not Matched")
      }else{
        toast.success("profile matched successfully")
        order2=data.filter((od)=>od?.sid == profile.sid)
        setOrder(order2)
       console.log(order2)
       console.log(order)
      }
 

    setLoad(false)
     
 }
 
 const columns = [
     {
         name: 'Title/Image ',
         selector: row => (
           <div className='p-1 '>
            <div className="flex items-center">
                 <div className="flex flex-col text-center justify-center">                   
                 <img className="object-cover mx-auto w-20 rounded-xl border-black border-2" src={row.Course.image} alt="Avatar"/>
                     <a href="#" className="mx-2 font-semibold text-black" tabindex="0" role="link">{row.Course.title}</a> 
                    </div>
                 
             </div>
           </div>
         )
     },
     {
         name: 'Duration/Lesson',
         selector: row => (
           <div className='my-5'>
         <div className='flex  gap-3 my-3 items-center'>
         <h1 className='text-black font-bold '> {row.Course.duration}</h1>
         </div>
       
         <div className='flex gap-2  items-center'>
             <h1 className='text-black '> {row.Course.lesson}  </h1>
             </div>
        
        
           </div>
         )
     },
     {
      name: 'Statrting Date',
      selector: row => (
          <div >
            
             <button className='bg-blue-600 px-4 py-3 rounded-lg text-white' >{row.sdate}</button>
          
          </div>
          )
  },
     {
       name: 'Details',
       selector: row => (
           <div >
             <Link to={`/orderDetails/${row.oid}`}>
              <button className='bg-blue-600 px-4 py-3 rounded-lg text-white' onClick={e=> console.log("its clicked the edit button")}>Details</button>
              </Link>
           </div>
           )
   },
   {
    name: 'Status',
    selector: row => (
        <div >
          
           <button className='bg-blue-600 px-4 py-3 rounded-lg text-white' >{row.status}</button>
          
        </div>
        )
},
 
 // {
 //  name:"Host",
 //  selector :row=>(
 //   <div className=''>
 //     <div className="flex items-center">
 //                 <div className="flex flex-col text-center justify-center">                   
 //                 <h1>{row.host}</h1>
 //                    </div>
                 
 //             </div>
 //   </div>
 //  )
 // },
 
  
 ];
 if(load) return <Loader/>
  return (
    <div>
      <Helmet>
                <link rel="canonical" href="/verification" />
                <title> Verification | Arafat Motors</title>
                <meta name='description' content='This is the Contact Us page of '></meta>
                <meta name='keywords' content='contact, get in touch, let us know, call us, email us , contact us, inform us, pagla mart contact, pm contact'></meta>
            
                </Helmet>
        <Tittle first="Verify Your" second="Student" thired="Check out the position now.."/>
        <h5 class="mb-2 text-2xl font-bold tracking-tight mx-auto text-center text-gray-900 dark:text-white">ভেরিফিকেশনের জন্য জন্ম তারিখ আপডেট রাখুন </h5>
     
     <form onSubmit={handleSubmit}  className="max-w-md mx-auto">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative text-center">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <div>
        <input  name='email'  type="text" id="default-search" className="block w-full mb-2 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="student@gmail.com" required />
        <input  name='dob'  type="date" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date Of Birth with right formate" required />
       
        </div>
        <button   type="submit" className="text-white my-4 mx-auto bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
   
       </div>
</form>
{
  order.map((d)=>{
    <VerificationCard />
  })
}
<Container>
<DataTable className=' bg-red-600 dark:bg-gray-900'
           columns={columns}
          
           data={order}
       /> </Container>
    </div>
  )
}

export default Verification
