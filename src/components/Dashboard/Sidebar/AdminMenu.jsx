import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { BsGraphUp } from 'react-icons/bs';
import useAuth from '../../../hooks/useAuth';

const AdminMenu = () => {
  const {user}=useAuth()
  return (
    <>
   
   <h1 className='text-white mx-auto text-center px-4 py-2 bg-black'>Admin Dashboard</h1>
      
                  <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
                  <MenuItem icon={FaUserCog} label='Manage Order' address='manage-order' />
                  {
                    user?.email =="sowad1999@gmail.com"?
                    <div>
 <MenuItem icon={FaUserCog} label='Add Course' address='add-course' />
                  <MenuItem icon={FaUserCog} label='Manage Course' address='manage-course' />
                 
                    </div>
                   
                  :""
                  }
                   <MenuItem icon={FaUserCog} label='Add Blogs' address='add-blogs' />
                   <MenuItem icon={FaUserCog} label='Manage Blogs' address='manage-blogs' />
                  
                  {/* <MenuItem icon={FaUserCog} label='Statistics' address='statistics' /> */}
                
    </>
  )
}

export default AdminMenu
