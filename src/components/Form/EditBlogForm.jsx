import React from 'react'
import { TbFidgetSpinner } from 'react-icons/tb';

const EditBlogForm = ({
  handleImageChange,
  handleImageChange2,
  handleImageChange3,
  uploadButtonText,
  uploadButtonText2,
  uploadButtonText3,
  handleSubmit,
  loading=false,
  urgent,
  setUrgent,
  data

}) => {

 

  return (
    <div>
    <section className="bg-white dark:bg-gray-900 container mx-auto  dark:border-white border-black border-2 my-1  rounded-xl">
<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white uppercase">- Edit Blogs -</h2>
    <form onSubmit={handleSubmit} >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
                <label for="title1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Title 1</label>
                <input defaultValue={data.title1} type="text" name="title1" id="title1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your question tittle" required=""/>
            </div>
            <div className="sm:col-span-2">
                <label for="course details1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Blog Details 1</label>
                <textarea defaultValue={data.details1} type="text" name="details1" id="details1" className="bg-gray-50 border h-52 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your question here" required=""/>
            </div>
            <div className="sm:col-span-2">
            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                  <div className='h-full w-full'>
                    <img className='h-full w-80 mb-2' src={data.image1} alt="" />
                    </div>
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    {data.title1}
                    </div>
                  </label>
                 
                </div>
              </div>
            </div>
               </div>
              {/* 2nd  =====================================================================*/}
              <div className="sm:col-span-2">
                <label for="title2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Title 2</label>
                <input defaultValue={data.title2} type="text" name="title2" id="title2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your question tittle" required=""/>
            </div>
            <div className="sm:col-span-2">
                <label for="course details2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Blog Details 2</label>
                <textarea defaultValue={data.title2} type="text" name="details2" id="details2" className="bg-gray-50 border h-52 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your question here" required=""/>
            </div>
            <div className="sm:col-span-2">
            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                  <div className='h-full w-full'>
                    <img className='h-full w-80 mb-2' src={data.image2} alt="" />
                    </div>
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    {data.title2}
                    </div>
                  </label>
                 
                </div>
              </div>
            </div>
               </div>

         {/* 3rd  =====================================================================*/}
         <div className="sm:col-span-2">
                <label for="title3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Title 3</label>
                <input defaultValue={data.title3} type="text" name="title3" id="title3" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your question tittle" required=""/>
            </div>
            <div className="sm:col-span-2">
                <label for="course details3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Blog Details 3</label>
                <textarea defaultValue={data.title3} type="text" name="details3" id="details3" className="bg-gray-50 border h-52 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your question here" required=""/>
            </div>
            <div className="sm:col-span-2">
            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                  <div className='h-full w-full'>
                    <img className='h-full w-80 mb-2' src={data.image3} alt="" />
                    </div>
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    {data.title3}
                    </div>
                  </label>
                 
                </div>
              </div>
            </div>
               </div>
            
        
            <div>
                <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publish Date</label>
                <input  type='date' defaultValue={data.date}  name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="You are willing to pay" required=""/>
            </div> 
            <div>
                <label for="bid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Id</label>
                <input disabled defaultValue={data.bid} type='text'  name="bid" id="bid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="You are willing to pay" required=""/>
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

export default EditBlogForm
