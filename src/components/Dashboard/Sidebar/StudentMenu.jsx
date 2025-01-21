import { BsFingerprint ,BsFillHouseAddFill} from 'react-icons/bs'

import useRole from '../../../hooks/useRole'
import MenuItem from './MenuItem'

import useAuth from '../../../hooks/useAuth'
import { updateRole } from '../../../api/auth'
import { useEffect, useState } from 'react'


const StudentMenu = () => {

  const [role] = useRole()
  console.log(role)
  const { user } = useAuth()
  const email =user?.email
  const rolee='teacher'
console.log(user?.email)
  const handleClick=async()=>{
    const update=await updateRole({email,rolee})
    console.log(update)
    window.location.reload()
  }



  return (
    <>
      <h1 className='text-white mx-auto text-center px-4 py-2  bg-black'>Student Dashboard</h1>
      {/* <h1 className='text-white mx-auto text-center px-4 py-2 bg-black'>Refer No: {user?.email}</h1> */}
      {/* <button onClick={handleClick}  className='text-white mx-auto text-center flex items-center my-2 px-4 py-2 bg-orange-500 rounded-xl'> Switch to {role== "student"? "teacher" : role}</button> */}

      <MenuItem icon={BsFillHouseAddFill} label='Profile' address='my-profile' />
     
      <MenuItem icon={BsFillHouseAddFill} label='My Course' address='my-course' />

    

      
    </>
  )
}

export default StudentMenu
