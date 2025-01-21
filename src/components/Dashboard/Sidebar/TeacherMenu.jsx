import { BsFingerprint ,BsFillHouseAddFill} from 'react-icons/bs'

import useRole from '../../../hooks/useRole'
import MenuItem from './MenuItem'

import useAuth from '../../../hooks/useAuth'
import { updateRole } from '../../../api/auth'


const TeacherMenu = () => {
  const [role] = useRole()
  const { user } = useAuth()
  const email =user?.email
  const rolee='student'
console.log(user?.email)
  const handleClick=async()=>{
    const update=await updateRole({email,rolee})
    console.log(update)
    window.location.reload()
  }

  return (
    <>
       <h1 className='text-white mx-auto text-center px-4 py-2 bg-black'>Teacher Dashboard</h1>
      <h1 className='text-white mx-auto text-center px-4 py-2 bg-black'>Refer No: {user?.email}</h1>
      {/* <button onClick={handleClick} className='text-white mx-auto text-center px-4 py-2 bg-orange-500 flex items-center my-2 rounded-xl'> Switch to {role== "student"? "Student" : "Student"}</button>
      */}
      <MenuItem icon={BsFillHouseAddFill} label='Profile' address='my-profile' />
     

    

    

      
    </>
  )
}

export default TeacherMenu
