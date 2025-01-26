import React from 'react'
import { TbFidgetSpinner } from 'react-icons/tb';

const AddUserFrom = ({
 
  uploadButtonText,
  handleSubmit,
  preProfile,
  loading=false
}) => {

 console.log(preProfile)

  return (
    <div>
    <section className="bg-white dark:bg-gray-900 container mx-auto  dark:border-white border-black border-2 my-1  rounded-xl">
<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white uppercase">- Profile -</h2>
    <form onSubmit={handleSubmit} >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Name</label>
                <input required type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Full Name"/>
            </div>
            {/* <div className="sm:col-span-2">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
                <input defaultValue="user@gmail.com" type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your question tittle" required=""/>
            </div> */}
          
            <div className="sm:col-span-2">
            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                  <input
                     // onChange={e => handleImageChange(e.target.files[0])}
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
                    <div className='bg-blue-500 mt-1 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
              </div>
             
         
           
        
            <div>
                <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input  type='text'  name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Phone Number" required="true"/>
            </div> 
             <div>
                <label for="preaddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Present Address</label>
                <input  type='text' name="preaddress" id="preaddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Present Address" required />
            </div> 
             <div>
                <label for="peraddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Permanent Address</label>
                <input  type='text' name="peraddress" id="peraddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Permanent Address" required />
            </div> 
             <div>
                <label for="emergency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Emergency Contact</label>
                <input required  type='text' name="emergency" id="emergency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Emergency Contact" />
            </div> 
             <div>
                <label for="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Date of Birth</label>
                <input required type='date' name="dob" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Specific tutors number" />
            </div> 
             <div>
                <label for="nid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> NID Number</label>
                <input required  type='text' name="nid" id="nid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="NID Number" />
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

export default AddUserFrom
