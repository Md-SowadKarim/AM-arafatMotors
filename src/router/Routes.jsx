import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from './../pages/Login/Login';
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";

import Profile from "../pages/Dashboard/Student/Profile";


import { getOneAbout, getUserAbout } from "../api/about";
import AboutUser from './../pages/about/AboutUser';
import Courses from "../pages/courses/Courses";
import Verification from "../pages/verification/Verification";
import MyCourse from "../pages/Dashboard/Student/MyCourse";
import AddCourse from "../pages/Dashboard/Admin/AddCourse";
import ManageCourse from "../pages/Dashboard/Admin/ManageCourse";
import { getAllQuestions } from "../api/biodatas";
import { getAllCourse, getOneCourse } from "../api/course";
import EditCourse from "../pages/Dashboard/Admin/EditCourse";
import AddBlogs from "../pages/Dashboard/Admin/AddBlogs";
import ManageBlog from "../pages/Dashboard/Admin/ManageBlog";
import EditBlog from "../pages/Dashboard/Admin/EditBlogs";
import { getOneBlog } from "../api/blogs";
import PassReset from "../pages/passReset/PassReset";
import CourseDetails from "../pages/courses/CourseDetails";
import Buy from "../pages/buy/Buy";
import ThankYou from "../pages/thankYou/ThankYou";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageOrder from "../pages/Dashboard/Admin/ManageOrder";
import EditOrder from "../pages/Dashboard/Admin/EditOrder";
import { getAllOrder, getOneOrder } from "../api/order";
import UserDetails from "../pages/Dashboard/Student/UserDetails";
import { getOneProfile } from "../api/profile";
import AuthProvider from "../providers/AuthProvider";
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import OrderDetails from "../pages/orderDetails/OrderDetails";
import Learn from "../pages/home/Learn";
import Learn2 from "../pages/home/Learn2";
import Learn1 from "../pages/home/learn1";


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/sign1",
            element:<Learn1/>  
         },
        {
            path:"/sign2",
            element: <Learn2/>
        },
       
        {
          path:"/courses",
          element:( <Courses/>),
          loader: () => getAllCourse(),
        }, 
        {
          path: '/course/:cid',
          element: (
           
              <CourseDetails/>
            
          ),
          loader: ({ params }) => getOneCourse(params.cid),
        },
        {
          path:'/buy/:cid',
          element: (<PrivateRoute><Buy/> </PrivateRoute>
          
        ),
          loader: ({ params }) => getOneCourse(params.cid),
        },
        {
          path:"/verification",
          element: (<Verification/>),
          loader: () => getAllOrder(),
        },
       
        {
            path:"/about",
            element: <About/>
        },
        {
          path: '/thankyou',
          element: (
           
              <ThankYou/>
            
          ),
          loader: ({ params }) => getUserAbout(params.id),
        },    
        {
            path:"/contact",
            element: <Contact/>
        },
        {
            path:"/orderDetails/:oid",
            element:( <OrderDetails/>),
            loader: ({ params }) => getOneOrder(params.oid),
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/signup",
          element: <SignUp/>
        }
      ]
    },
    {
      path:"/reset",
      element: <PassReset/>
  },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
        
    
     children: [
     
      {
        path: 'my-profile',
        element: (
          <Profile/>
        ),
      },
      {
        path: 'manage-users/user-details/:sid',
        element: (
          <UserDetails/>
        ),
        loader: ({ params }) => getOneProfile(params.sid),
      },
      {
        path: 'my-course',
        element: (
          <MyCourse/>
        ),
        loader: () => getAllOrder()
      },
      {
        path: 'add-course',
        element: (
          <AddCourse/>
        ),
       
      },

      {
        path: 'my-account',
        element: (
          <h1>this is my account page</h1>
        ),
      },
      {
        path: 'manage-course',
        element: (
          <ManageCourse/>
        ),
        loader: () => getAllCourse(),
      },
      {
        path: 'manage-course/edit-course/:cid',
        element: (
         
            <EditCourse/>
          
        ),
      
        loader: ({ params }) => getOneCourse(params.cid),
      }, 
      {
        path: 'add-blogs',
        element: (
          <AddBlogs/>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <ManageUsers/>
        ),
      },
      {
        path: 'manage-order',
        element: (
          <ManageOrder/>
        ),
      },
      {
        path: 'manage-blogs',
        element: (
          <ManageBlog/>
        ),
      },
      {
        path: 'manage-blogs/edit-blog/:bid',
        element: (
         
            <EditBlog/>
          
        ),
      
        loader: ({ params }) => getOneBlog(params.bid),
      }, 
      {
        path: 'manage-order/edit-order/:oid',
        element: (
         
            <EditOrder/>
          
        ),
      
        loader: ({ params }) => getOneOrder(params.oid),
      }, 
      {
        path: 'statistics',
        element: (
          <h1>this is sttistics page</h1>
        ),
      },
      {
        path: 'refund',
        element: (
          <h1>this is refund request page</h1>
        ),
      },
   
    ],
  }
  ]);

  export default router