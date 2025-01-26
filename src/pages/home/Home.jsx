import React, { useEffect, useState } from 'react'

import Achive from './Achive'
import Banner from './Banner'
import Cartified from './Cartified'
import Footer from '../../components/shared/footer/Footer'
import ImgGallary from './ImgGallary'
import MasterTheSkills from './MasterTheSkills'
import TrustUs from './TrustUs'
import WhyChoos from './WhyChoos'
import Container from '../../components/shared/Container'
import { getAllCourse } from '../../api/course'
import Loader from '../../components/shared/Loader'
import CourseCard from '../courses/CourseCard'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Owner from './Owner'


const Home = () => {

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
         
          if(data.length >=5){
            setBios(data.slice(0, 4))
          }else{
            setBios(data)
          }
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
                <link rel="canonical" href="/" />
                <title> Home | Arafat Motors</title>
                <meta name='description' content='This is the Contact Us page of '></meta>
                <meta name='keywords' content='contact, get in touch, let us know, call us, email us , contact us, inform us, pagla mart contact, pm contact'></meta>
            
                </Helmet>
      <Container>
     <Banner></Banner>


   
     
  
     
     
<MasterTheSkills></MasterTheSkills>

<ImgGallary></ImgGallary>
<Owner/>
<Achive></Achive>

 <Cartified></Cartified>
 <span className="relative flex justify-center mb-9 ">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px text-right -translate-y-1/2 bg-blue-500 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    > <Link className='font-bold mt-10 ' to="/courses">See more --</Link></div> 

                    <span className="relative z-10 bg-white px-6 text-4xl my-8 font-semibold ">Our Courses</span>
                </span>
 <div className='md:w-[100%] p-4 rounded-md dark:bg-gray-900 dark:text-gray-100 px-4  pb-4'>
   
   
            <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'> 
     
            {Array.isArray(bios)&& bios?.map((data)=><CourseCard key={data.cid} data={data}/>)}
     
    </div>
   
    </div>
 
<TrustUs></TrustUs>



 <WhyChoos></WhyChoos>

 </Container>
    </div>
  )
}

export default Home
