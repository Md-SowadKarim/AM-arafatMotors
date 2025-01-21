import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css'
import { Router, RouterProvider } from 'react-router-dom'
import router from './router/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
        
        <RouterProvider router={router} />
        <Toaster/>
       </QueryClientProvider>
       </HelmetProvider>
       </AuthProvider>
  </StrictMode>,
)



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { RouterProvider } from 'react-router-dom'
// //import AuthProvider from './providers/AuthProvider'


// // import 'react-date-range/dist/styles.css'
// // import 'react-date-range/dist/theme/default.css'
// //import { HelmetProvider } from 'react-helmet-async'

// import React from 'react'
// import router from './router/Routes';



// // const queryClient = new QueryClient()

// ReactDOM.createRoot(document.getElementById('root')).render(
// //  <HelmetProvider>
//   //  <AuthProvider>
//       // <QueryClientProvider client={queryClient}>
        
//         <RouterProvider router={router} />
        
//       // </QueryClientProvider>
//  //   </AuthProvider>
//  // </HelmetProvider>
// )