import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Container from '../../components/shared/Container'

const AboutUser = () => {
    const data=useLoaderData()
    //console.log(data,"this is iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")

    return (
    <Container>
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased border-4 border-red-400">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <img
                  className="w-full dark:hidden h-full"
                  src={data.host.image}
                  alt="iMac"
                />
                <img
                  className="w-full hidden dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                  alt="iMac Dark"
                />
              </div>
    
              <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                  {data.host.name}
                </h1>
                <p>About : {data.who}</p>
                <p>Age : {data.age}</p>
                <p>Address : {data.address}</p>
                <div className='md:flex gap-2 justify-between  font-semibold text-xl my-4'>
                    <div className='flex-1'>
                    <p>Total Allocation : {data.totalAllocation}</p>
                <p>Total Answer : {data.totalAns}</p>
                <p>Total Answer Buy : {data.totalAnsBuy}</p>
                <p>Total Ask Question : {data.totalQuesAsk}</p>
                <p>Total Reference : {data.totalRef}</p>
                    </div>
                    <div className='flex-1'>
                    <p>Total Allocation : {data.totalAllocation}</p>
                <p>Total Earn : {data.totalEarn}</p>
                <p>Total Spent : {data.totalSpent}</p>
                <p>Average Rating : {data.avgRating}</p>
                
                    </div>
                
              
                
                
                </div>
                
                
                  </div>
                  </div>
                  </div>
                  </section>
                  </Container>
                  )
}

export default AboutUser
