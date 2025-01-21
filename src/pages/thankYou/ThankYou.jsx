import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <div>
      <div class="h-screen w-full bg-black dark:bg-gray-100">
    <div class="h-full lg:w-[60%] sm:w-[80%] xs:w-[90%] mx-auto flex gap-8 items-center">
        <div
            class="flex flex-col gap-4 text-white dark:text-black p-4 rounded-lg border border-orange-300 shadow-xl shadow-orange-400/30">
            <h5 class="text-sm text-orange-500 font-semibold">Pagla Mart, Your Mart</h5>
            <div class="w-full flex gap-2 items-center justify-around">
                <div class="text-5xl font-semibold uppercase font-serif">Thank You</div>
                <hr class="w-[50%] h-1 rounded-full border-t-orange-500 bg-orange-500" />
            </div>

            <p class="text-sm">Thank you sincerely for your recent order! We’re thrilled to confirm that your product has been successfully ordered. Your trust and support mean the world to us, and we’re committed to ensuring your experience is exceptional. Your choice makes a big difference, and we deeply appreciate your confidence in us.
            </p>

            <div class="flex gap-4 justify-center">
              <Link to="/courses">  <button  class="w-full px-4 py-1 border-2 border-orange-500 rounded-sm">Show More</button></Link>
             <Link to="/contact">   <button class="w-full text-white px-4 py-1 bg-orange-500 rounded-sm">Contact me</button></Link>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default ThankYou
