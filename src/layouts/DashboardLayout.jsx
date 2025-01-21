import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar/Sidebar'
import { Helmet } from 'react-helmet-async'
//import { Helmet } from 'react-helmet-async';

const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen md:flex '>
      {/* <Helmet> */}
        <title>Dashboard | Dashboard</title>
        <Helmet>
                  <link rel="canonical" href="/dashboard" />
                  <title> Dashboard | Arafat Motors</title>
                  <meta name='description' content='This is the Contact Us page of '></meta>
                  <meta name='keywords' content='contact, get in touch, let us know, call us, email us , contact us, inform us, pagla mart contact, pm contact'></meta>
              
                  </Helmet>
      {/* </Helmet> */}
      {/* Sidebar Component */}
      <Sidebar />
      <div className='flex-1  md:ml-64 bg-white'>
        <div className='p-5'>
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
