import React from 'react'
import { TbFidgetSpinner } from 'react-icons/tb';

const EditCourseForm = ({
  
  handleSubmit,
data


}) => {
console.log(data)
 

  return (
    <div>
    <section className="bg-white dark:bg-gray-900 container mx-auto  dark:border-white border-black border-2 my-1  rounded-xl">
<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white uppercase">- Edit Course -</h2>
    <form onSubmit={handleSubmit} >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
                <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Title</label>
                <input defaultValue={data.title} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your question tittle" required=""/>
            </div>
            <div className="sm:col-span-2">
                <label for="course details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Course Details</label>
                <textarea defaultValue={data.details} type="text" name="details" id="details" className="bg-gray-50 border h-52 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your question here" required=""/>
            </div>
            <div className="sm:col-span-2">
            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                  <div className='h-full w-full'>
                    <img className='w-40 md:w-80 mb-2' src={data.image} alt="" />
                    </div>
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    {data.title}
                    </div>
                  </label>
                 
                </div>
              </div>
            </div>
               </div>
            {/* <div className="sm:col-span-2">
            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      onChange={e => handleImageChange(e.target.files[0])}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
               </div> */}
         
            
        
            <div>
                <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price (BDT)</label>
                <input defaultValue={data.price} type='number'  name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="You are willing to pay" required=""/>
            </div> 
             <div>
                <label for="duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration</label>
                <input defaultValue={data.duration} type='text' name="duration" id="duration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Specific tutors number" />
            </div> 
            <div>
                <label for="lesson" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Lesson</label>
                <input defaultValue={data.lesson} type='number'  name="lesson" id="lesson" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="You are willing to pay" required=""/>
            </div> 
            <div>
                <label for="cid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Id</label>
                <input disabled defaultValue={data.cid} type='text'  name="cid" id="cid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="You are willing to pay" required=""/>
            </div> 
            <div>
                <label for="practical" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Practical Class </label>
                <input defaultValue={data.practical} type='text'  name="practical" id="practical" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="You are willing to pay" required=""/>
            </div> 
            <div>
                <label for="mechanical" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mechanical Class</label>
                <input defaultValue={data.mechanical} type='text'  name="mechanical" id="mechanical" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="You are willing to pay" required=""/>
            </div> 
            <div>
                <label for="dt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Daily Time</label>
                <input defaultValue={data.dt} type='text'  name="dt" id="dt" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="You are willing to pay" required=""/>
            </div> 
    
          
          
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

export default EditCourseForm

