import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { FaCalendarDay } from 'react-icons/fa';
import { getAllOrder, getUserOrder } from '../../../api/order'
import useAuth from '../../../hooks/useAuth'
import DataTable from 'react-data-table-component'
import { Link, useLoaderData } from 'react-router-dom'
import Loader from '../../../components/shared/Loader'

const MyCourse = () => {
  const{user}=useAuth()
 
  // const { data: order = [], refetch } = useQuery({
  //   queryKey: ['userOrder'],
  //   queryFn: async () => await getAllOrder(),   
  // })
  const data=useLoaderData()
  console.log(data)
    const[load,setLoad]=useState(false)
    const[ord,setOrd]=useState([])
      var order2=[]
 order2=data.filter((od)=>od?.email == user?.email)
console.log(order2)
//setOrd(order2)

  // const handdleDelete=async(cid)=>{
  //   console.log(cid)
  //   try{
  //     await deleteOneCourse(cid)
  //     refetch()
  //     }catch(err){
  //         console.log(err.message)
  //     }
  
  // }


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
        <h1 className='flex items-center gap-3  text-black '><FaCalendarDay/></h1>
        <h1 className='text-black '>Duration : {row.Course.duration}</h1>
        </div>
      
        <div className='flex gap-2  items-center'>
            <h1 className='text-black '> Lesson {row.Course.lesson}  😊</h1>
            </div>
       
          </div>
        )
    },
    {
        name: 'Status',
        selector: row => (
          <div className='my-5'>
        <div className='flex  gap-3 my-3 items-center'>
        <h1 className='flex items-center gap-1  text-black '><FaCalendarDay/></h1>
        <h1 className='text-black '>Status : {row.status}</h1>
        </div>
      
        
       
          </div>
        )
    },
    {
      name: 'Details',
      selector: row => (
          <div >
            <Link to={`/course/${row.Course.cid}`}>
             <button className='bg-blue-600 px-4 py-3 rounded-lg text-white' onClick={e=> console.log("its clicked the edit button")}>Details</button>
             </Link>
          </div>
          )
  },
//   {
//     name: 'Details',
//     selector: row => (
//       <div>
//       <button className="bg-blue-600 px-4 py-3 rounded-lg text-white" onClick={()=>document.getElementById(`${row._id}`).showModal()}>Delete</button>
// <dialog id={row._id} className="modal modal-bottom sm:modal-middle">
//   <div className="modal-box p-4 border-2 border-black">
//     <h3 className="font-bold text-white text-lg">Hello!</h3>
//     <p className="py-4 text-xl text-red-400 ">Would you like to delete this order ? ✂✂</p>
//     <div className="modal-action">
      
//       <form method="dialog">
//         {/* if there is a button in form, it will close the modal */}
//          <button className='bg-blue-600 px-4 py-3 rounded-lg text-white mr-5' onClick={()=>handdleDelete(row.oid)}>Yes</button>
//         <button className='bg-blue-600 px-4 py-3 rounded-lg text-white'>No</button>
//       </form>
//     </div>
//   </div>
// </dialog>
        
//       </div>
//       )
// },
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



//if(load) return <Loader/>
// else if(data2.length >=1){
// <h1>this is  one product</h1>
// }
//else

  return (
    <div>
     
{/* <form  className="max-w-md mx-auto">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        
        <input disabled name='ser' type="text" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search With Product Id=pid" required />
        <button disabled  type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form> */}
<div>

</div>
<div className='container mx-auto space-y-3 p-5 rounded-lg text-center'>
      <h1 className= '  font-extrabold font-poppins text-2xl'>My Course Page</h1>
      <hr className='h-1 mb-3 w-[50%] mx-auto bg-blue-500'/>
     <DataTable className=' bg-red-600 dark:bg-gray-900'
            columns={columns}
            data={order2}
        />
          
           
           
    </div>


    </div>
  )
}

export default MyCourse 

