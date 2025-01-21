import React from 'react'
import useAuth from '../../hooks/useAuth'
import Loader from '../../components/shared/Loader'
import { sendEmailVerification } from 'firebase/auth'
import toast from 'react-hot-toast'
import { getToken } from '../../api/auth'
import { useLocation, useNavigate } from 'react-router-dom'

const PassReset = () => {
    const {  loading ,resetPassword} = useAuth()
   const navigate = useNavigate()
   const location = useLocation()
   const from = location?.state?.from?.pathname || '/login'
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const result=await resetPassword(email)
        await getToken(result?.user?.email)
        navigate(from, { replace: true })
        toast.success('Reset Mail Send Successfully')
        
    }
  
  return (
 <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Pass-Word</h1>
          <p className='text-sm text-gray-400'>
            Reset Your Password
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
          
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >Send Link
            </button>
          </div>
        </form>
       
      
       
      
      </div>
    </div>
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input name='email' type="text" placeholder='type your email' />
    //     <button type='submit'>send link</button>
    //   </form>
    // </div>
  )
}

export default PassReset
