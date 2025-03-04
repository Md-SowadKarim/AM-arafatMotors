import React from 'react'
import { TbFidgetSpinner } from 'react-icons/tb';

const EditOrderFrom = ({
 data,
  handleSubmit

}) => {
//console.log(data)


  return (
    <div>
    <section className="bg-white dark:bg-gray-900 container mx-auto  dark:border-white border-black border-2 my-1  rounded-xl">
<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white uppercase">- Edit Order -</h2>
    <form onSubmit={handleSubmit} >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Name</label>
                <input defaultValue={data.name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your question tittle" required=""/>
            </div>
            <div className="sm:col-span-2">
            <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <select defaultValue={data.status} name='status'  id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Subject</option>
                    <option defaultValue="">pending</option>
                    <option defaultValue="">running</option>
                    <option defaultValue="">completed</option>
                   
                   
                
                   
                </select>
               </div>
          
           
             
         
           
        
            <div>
                <label for="phone1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number 1</label>
                <input defaultValue={data.phone1} type='text'  name="phone1" id="phone1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="You are willing to pay" required=""/>
            </div> 
            <div>
                <label for="phone2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number 2</label>
                <input defaultValue={data.phone2} type='text'  name="phone2" id="phone2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="You are willing to pay" required=""/>
            </div> 
            <div className="sm:col-span-2">
            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                  <div className='h-full w-full'>
                    <img className='w-40 md:w-80  mb-2' src={data.image} alt="" />
                    </div>
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    NID or BC
                    </div>
                  </label>
                 
                </div>
              </div>
            </div>
               </div>
             <div>
                <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Address</label>
                <input defaultValue={data.address} type='text' name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Specific tutors number" />
            </div> 
             <div>
                <label for="Fathers Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Fathers Name</label>
                <input defaultValue={data.fname} type='text' name="fname" id="fname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Specific tutors number" />
            </div> 
             <div>
                <label for="Mothers Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Mothers Name</label>
                <input defaultValue={data.mname} type='text' name="mname" id="mname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Specific tutors number" />
            </div> 
            
             <div>
                <label for="emergency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Emergency Contact</label>
                <input defaultValue={data.emergency} type='text' name="emergency" id="emergency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Specific tutors number" />
            </div> 
             <div>
                <label for="sdate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Starting Date</label>
                <input  type='date' name={data.sdate} id="sdate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Specific tutors number" />
            </div> 
             <div>
                <label for="cupon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Cupon</label>
                <input defaultValue={data.cupon}  type='text' name="cupon" id="cupon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Specific tutors number" />
            </div> 
           
           
    
          
            {/* <div className="sm:col-span-2">
                <label for="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Note</label>
                <textarea defaultValue="this is really a very good food to eat" id="note" name='note' rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Additional Note Here..."></textarea>
            </div> */}
        </div>
        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          {/* {loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Save & Continue'
          )} */}Save & Continue
        </button>
    </form>
</div>
</section>
  </div>
  )
}

export default EditOrderFrom
