import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Loader from '../../components/shared/Loader'
import { getAllCourse } from '../../api/course'
import CourseCard from './CourseCard'
import { Helmet } from 'react-helmet-async'
import Container from '../../components/shared/Container'
import Tittle from '../../components/shared/tittle/Tittle'

const Courses = () => {
  const[load,setLoad]=useState(false)
  const [bios,setBios]=useState([])
//     const data=useLoaderData()
//   console.log(data)

  console.log(load)

  useEffect(() => {
      setLoad(true)
      getAllCourse()
      .then(data => {
          console.log("data ",data)
          setBios(data)
          console.log(bios)
          console.log("this is sowad")
        setLoad(false)
      })
    },[])


    console.log(bios)
  if(load)return <Loader/>
  return (
    <div>
      <Helmet>
                <link rel="canonical" href="/courses" />
                <title> Course | Arafat Motors</title>
                <meta name='description' content='This is the Contact Us page of '></meta>
                <meta name='keywords' content='contact, get in touch, let us know, call us, email us , contact us, inform us, pagla mart contact, pm contact'></meta>
            
                </Helmet>
      <Tittle first="Our" second="Courses" thired="These are the course we are offering now.."/>
     
     {/* <Helmet>
            <link rel="canonical" href="/course" />
            <title>Courses | AM</title>
            <meta name='description' content='This is the all Courses page of AM'></meta>
    
          </Helmet> */}

     <div className='md:w-[100%] p-4 rounded-md dark:bg-gray-900 dark:text-gray-100   pb-4'>
     <Container>
     {/* <Tittle first="Get Your" second="Product" thired=" With Crazy😮 Discounts.. "/> */}
            {/* <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'> 
     
            { bios.map((data)=><CourseCard key={data.cid} data={data}/>)}
     
    </div> */}
    <div className='md:w-[100%] p-4 rounded-md dark:bg-gray-900 dark:text-gray-100 px-4  pb-4'>
   
   {/* <Tittle first="Get Your" second="Product" thired=" With Crazy😮 Discounts.. "/> */}
          <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'> 
   
          { bios.map((data)=><CourseCard key={data.cid} data={data}/>)}
   
  </div>
  </div>
    </Container>

            </div>
     
     

    </div>
  )
}

export default Courses
