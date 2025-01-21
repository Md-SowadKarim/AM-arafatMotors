import React from 'react'

const Tittle = ({first,second,thired}) => {
  return (
    <div className='w-full my-8'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-gray-400 dark:text-white text-6xl font-extrabold italic mx-auto text-center'>{first} <span className='text-blue-500 text-6xl font-extrabold italic'>{second}</span></h1>
            <p className='text-2xl text-gray-500 font-bold mx-auto text-center'>{thired} </p>
            <hr className='h-1 bg-blue-400 w-[30%] my-2 mx-auto' />
        </div>
      
    </div>
  )
}

export default Tittle