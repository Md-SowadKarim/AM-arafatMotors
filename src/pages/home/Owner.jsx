import React from 'react'
import image from "../../assets/image/owerFather.jpg"

const Owner = () => {
  return (
    <div>
      
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div class="flex flex-col justify-between md:w-[50%] leading-normal p-4">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">পরিচালক বক্তব্য-</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> বর্তমান সময়ে দক্ষ চালকের চাহিদা ক্রমাগত বৃদ্ধি পাচ্ছে দেশের অভ্যন্তরীন এবং আন্তর্জাতিক পরিবহন খাতে। এই চাহিদা পূরণে আরাফাত মোটর ড্রাইভিং ট্রেনিং স্কুল একটি নির্ভরযোগ্য নাম হিসেবে প্রতিষ্ঠিত হয়েছে।</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">আন্তর্জাতিক মানের দক্ষ ও পেশাদার চালক তৈরির উদ্দেশ্যে কাজ করে যাচ্ছে আরাফাত মোটর ড্রাইভিং ট্রেনিং স্কুল। এটি এমন একটি প্রতিষ্ঠান যা শুধুমাত্র ড্রাইভিং শেখানোর মধ্যে সীমাবদ্ধ থাকে না, বরং একজন চালককে আধুনিক প্রযুক্তি, সড়ক নিরাপত্তা এবং পেশাদারিত্বের সকল দিক সম্পর্কে সচেতন করে গড়ে তোলে।</p>
  
    <ul>
    <li className="flex gap-x-3 mt-4">
                                    <span className="text-left">
                                        <strong className="font-semibold text-gray-900">  নির্দেশাবলী -  </strong>

                                    <p><strong></strong>•	ভর্তির সময় ২ কপি ছবির সাথে এন.আই. ডি / জন্ম নিবন্ধন/ পাসপোর্ট এর ফটোকপি আনতে হবে। </p>
                                    <p>•	শিক্ষাগত সনদের কপি আনতে হবে। </p>
                                    <p> •	ভর্তির সময় পুরো টাকা পরিশোধ করতে হবে।</p>
                                    <p> •	কোনো বকেয়া থাকলে নির্ধারিত সময়ের মধ্যে পরিশোধ করতে হবে।</p>
                                    <p> •	কোর্সের মেয়াদ শেষে সার্টিফিকেট সনদপত্র সহ অনলাইন কার্য্ ক্রম সম্পন্ন হবে ।</p>
                                   
                                     </span>
                                </li>
    </ul>
        </div>
    <div className='md:w-[50%] p-2 text-center flex justify-center border-2 border-red-500 rounded-xl'>
    <img class="object-cover rounded-t-lg h-96 border-4 border-blue-500 rounded-xl md:w-100 md:rounded-none md:rounded-s-lg" src={image} alt="image"/>
   
    </div>
     
</a>

    </div>
  )
}

export default Owner
