import React from 'react'
import { Link } from 'react-router-dom'

const Learn = () => {
  return (
    <div className='mb-9'>
      <span className="relative flex justify-center mb-9 ">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-blue-500 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-white px-6 text-4xl my-8 font-semibold ">Learning Hub</span>
                </span>
        <div>
            <div className='md:flex justify-between gap-2'>
                <Link className='flex-1 hover:bg-blue-500 hover:text-white border-4 border-red-500 p-1 rounded-xl h-auto py-4 animate-bounce' to="/sign1">
                <div className='flex-1 hover:bg-blue-500 hover:text-white border-4 border-red-500 p-1 rounded-xl h-auto py-4 animate-bounce'><h1 className='font-bold text-center'>LEARNING FORM ONE</h1></div>
                </Link>
                <Link className='flex-1 hover:bg-blue-500 hover:text-white border-4 border-red-500 p-1 rounded-xl h-auto py-4 ' to="/sign2">
                <div className='flex-1 hover:bg-blue-500 hover:text-white border-4 border-red-500 p-1 rounded-xl h-auto py-4'><h1 className='font-bold text-center'>LEARNING FORM TWO</h1></div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Learn
