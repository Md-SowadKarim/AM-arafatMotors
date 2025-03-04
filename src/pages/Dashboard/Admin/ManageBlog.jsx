import React, { useEffect, useState } from 'react'

import { Link, useLoaderData } from 'react-router-dom'
import  DataTable  from 'react-data-table-component';
import { FaCalendarDay } from 'react-icons/fa';

import Loader from '../../../components/shared/Loader';
import { deleteOneCourse, getAllCourse } from '../../../api/course';
import { useQuery } from '@tanstack/react-query';
import { deleteOneBlog, getAllBlog } from '../../../api/blogs';

const ManageBlog = () => {
    const { data: blog = [], refetch } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => await getAllBlog(),
      })

  const[load,setLoad]=useState(false)
//const [data,setData]=useState([])
const [data2,setData2]=useState([])
    const data= useLoaderData()
    //console.log(data)

    // useEffect(() => {
    //   setLoad(true)
    //   getAllProduct()
    //   .then(data => {
    //       //console.log("data ",data)
    //       setData(data)
    //       //console.log(data)
    //       //console.log("this is sowad")
    //     setLoad(false)
    //   })
    // },[])
    
 const [yes,setYes]=useState(true)
    const [order,setOrder]=useState([])
    var order2=[]
const handleSubmit=async e=>{
   setLoad(true)
 e.preventDefault()
 setYes(false)
   const form = e.target
   const  s=form.email.value
 
   
 order2=blog.filter((od)=>od?.bid == s)
 setOrder(order2)
//console.log(order2)
  //console.log(s)
  
  //console.log(yes)
   setLoad(false)
    
}
const handleSeeAll=()=>{

  setYes(true)
  //console.log(yes)
  }
const handdleDelete=async(bid)=>{
    //console.log(bid)
    try{
      await deleteOneBlog(bid)
      refetch()
      }catch(err){
          //console.log(err.message)
      }
  
  }


const columns = [
    {
        name: 'Title/Image ',
        selector: row => (
          <div className='p-1 '> 
           <div className="flex items-center">
                <div className="flex flex-col text-center justify-center">                   
                <img className="object-cover mx-auto w-20 rounded-xl border-black border-2" src={row.image1} alt="Avatar"/>
                    <a href="#" className="mx-2 font-semibold text-black" tabindex="0" role="link">{row.title1}</a>
                   </div>
                
            </div>
          </div>
        )
    },
    {
        name: 'Title/Image ',
        selector: row => (
          <div className='p-1 '>
           <div className="flex items-center">
                <div className="flex flex-col text-center justify-center">                   
                <img className="object-cover mx-auto w-20 rounded-xl border-black border-2" src={row.image2} alt="Avatar"/>
                    <a href="#" className="mx-2 font-semibold text-black" tabindex="0" role="link">{row.title2}</a>
                   </div>
                
            </div>
          </div>
        )
    },
    {
        name: 'Title/Image ',
        selector: row => (
          <div className='p-1 '>
           <div className="flex items-center">
                <div className="flex flex-col text-center justify-center">                   
                <img className="object-cover mx-auto w-20 rounded-xl border-black border-2" src={row.image3} alt="Avatar"/>
                    <a href="#" className="mx-2 font-semibold text-black" tabindex="0" role="link">{row.title3}</a>
                   </div>
                
            </div>
          </div>
        )
    },
    
    {
      name: 'Edit',
      selector: row => (
          <div >
            <Link to={`edit-blog/${row.bid}`}>
             <button className='bg-blue-600 px-4 py-3 rounded-lg text-white' >Edit</button>
             </Link>
          </div>
          )
  },
  {
    name: 'Delete',
    selector: row => (
      <div>
      <button className="bg-blue-600 px-4 py-3 rounded-lg text-white" onClick={()=>document.getElementById(`${row.bid}`).showModal()}>Delete</button>
<dialog id={row.bid} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box p-4 border-2 border-black">
    <h3 className="font-bold text-white text-lg">Hello!</h3>
    <p className="py-4 text-xl text-red-400 ">Would you like to delete this Blog ? ✂✂</p>
    <div className="modal-action">
      
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
         <button className='bg-blue-600 px-4 py-3 rounded-lg text-white mr-5' onClick={()=>handdleDelete(row.cid)}>Yes</button>
        <button className='bg-blue-600 px-4 py-3 rounded-lg text-white'>No</button>
      </form>
    </div>
  </div>
</dialog>
        
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
// else if(data2.length >=1){
// <h1>this is  one product</h1>
// }
else

  return (
    <div>
     <div >
<form onSubmit={handleSubmit} className="max-w-md mx-auto">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        
        <input  name='email'  type="text" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Blog Id=bid" required />
        <button   type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
<button className='px-3 py-2 bg-black text-white rounded-lg mx-auto flex justify-center my-2' onClick={handleSeeAll}>See All Data</button>
</div>
<div>

</div>
<div className='container mx-auto space-y-3 p-5 rounded-lg text-center'>
      <h1 className= '  font-extrabold font-poppins text-2xl'>This Is Manage My Blogs  Page</h1>
      <hr className='h-1 mb-3 w-[50%] mx-auto bg-blue-500'/>
      {
        yes==true? <DataTable className=' bg-red-600 dark:bg-gray-900'
        columns={columns}
       
        data={blog}
    /> :
    <DataTable className=' bg-red-600 dark:bg-gray-900'
            columns={columns}
           
            data={order}
        /> 
      }
       
         
        
       
         
      
    
          
           
           
    </div>


    </div>
  )
}

export default ManageBlog

