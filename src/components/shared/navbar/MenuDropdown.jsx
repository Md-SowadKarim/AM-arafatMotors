import { AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const  MenuDropdown = () => {
   const [isOpen, setIsOpen] = useState(false)
   const { user,logOut } = useAuth()
  const navigate=useNavigate()

  // ================== =============================== ====================== >> dark and light mood setting


const handleLogout=()=>{
  logOut();
  navigate("/login");
  toast.success('Logout Sucessfully');
}



  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        <div className='hidden md:block'>
          <button className='disabled:cursor-not-allowed cursor-pointer dark:text-white  px-2 text-sm font-semibold rounded-full  transition'>
        
        
        <NavLink  className={({ isActive, isPending }) =>
    isPending ? "dark:text-white text-black" : isActive ? "bg-gray-300 px-4 py-2 rounded-lg text-black " : ""
  } to="/">Home</NavLink>
      
          </button>
          <button className='disabled:cursor-not-allowed cursor-pointer dark:text-white px-2 text-sm font-semibold rounded-full  transition'>
        
        
    
      
          </button>
      
          <button className='disabled:cursor-not-allowed cursor-pointer dark:text-white px-2  text-sm font-semibold rounded-full  transition'>
        
        
          <NavLink  className={({ isActive, isPending }) =>
    isPending ? "dark:text-white text-black" : isActive ? "bg-gray-300 px-4 py-2 rounded-lg text-black " : ""
  } to="/courses">Courses</NavLink>
  </button>
           <button className='disabled:cursor-not-allowed cursor-pointer dark:text-white px-2  text-sm font-semibold rounded-full  transition'>
  <NavLink  className={({ isActive, isPending }) =>
    isPending ? "dark:text-white text-black" : isActive ? "bg-gray-300 px-4 py-2 rounded-lg text-black " : ""
  } to="/verification">Verification</NavLink> 
  </button>
           <button className='disabled:cursor-not-allowed cursor-pointer dark:text-white px-2  text-sm font-semibold rounded-full  transition'>
        <NavLink  className={({ isActive, isPending }) =>
    isPending ? "dark:text-white text-black" : isActive ? "bg-gray-300 px-4 py-2 rounded-lg text-black " : ""
  } to="/about">About</NavLink>
      
          </button>
          <button className='disabled:cursor-not-allowed cursor-pointer dark:text-white px-2  text-sm font-semibold rounded-full  transition'>
        
        
        <NavLink  className={({ isActive, isPending }) =>
    isPending ? "dark:text-white text-black" : isActive ? "bg-gray-300 px-4 py-2 rounded-lg text-black " : ""
  } to="/contact">Contact</NavLink>
      
          </button>
          {
           ! user?.email ? 
            <button className='disabled:cursor-not-allowed cursor-pointer dark:text-white px-2  text-sm font-semibold rounded-full  transition'>
        
        
            <NavLink  className={({ isActive, isPending }) =>
        isPending ? "dark:text-white text-black" : isActive ? "bg-gray-300 px-4 py-2 rounded-lg text-black " : ""
      } to="/login">Login</NavLink>
          
              </button> 
              :
               <button onClick={handleLogout} className='disabled:cursor-not-allowed cursor-pointer dark:text-white px-2  text-sm font-semibold rounded-full  transition'>
        
        
               <NavLink  className={({ isActive, isPending }) =>
           isPending ? "dark:text-white text-black" : isActive ? "bg-gray-300 px-4 py-2 rounded-lg text-black " : ""
         } to="/logout">Logout</NavLink>
             
                 </button>
          }
          
         
          

        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px]  md:hidden border-neutral-200  flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        > <AiOutlineMenu className='text-black dark:text-white' />
           </div>
        {
          user?.email ? 
         
        
          <div className='hidden md:flex md:items-center'>
         
          <button className='disabled:cursor-not-allowed cursor-pointer dark:text-white px-2 text-sm font-semibold rounded-full  transition'>
        <NavLink  className={({ isActive, isPending }) =>
    isPending ? "dark:text-white text-black" : isActive ? "bg-gray-300 px-4 py-2 rounded-lg text-black " : ""
  } to="/dashboard">DashBoard</NavLink>
      
          </button>
      
           
         
        </div> : ""
        }
      </div>
      {isOpen && (
        <div className='absolute transition duration-2000 transform ease-in-out  rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>
            <Link
              to='/courses'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Courses
            </Link>
            <Link
              to='/verification'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Verification
            </Link>
            <Link
              to='/about'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              About Us
            </Link>

            <Link
              to='/contact'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Contact Us
            </Link>
            {
              user?.email?
              <Link
              to='/logout'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Logout
            </Link>
            :
            <Link
            to='/login'
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
          >
            Login
          </Link>
            }
            
           
            <Link
              to='/dashboard'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Dashboard
            </Link>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown
