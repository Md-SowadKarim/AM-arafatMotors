import image from "../../image/Government_Seal_of_Bangladesh.svg.png"
import image2 from "../../image/Emblem_of_Bangladesh_Road_Transport_Authority_(BRTA).svg.png"
import image3 from "../../image/Khulna ploice.jpeg"
import image4 from "../../image/images (1).png"

const Cartified = () => {
    return (
        <section className="py-6  text-center">
            <div className="container flex flex-col justify-center p-4 mx-auto">

                {/* <div className="pb-20 text-center">
                <h1 className="text-3xl font-semibold  ">We Are Certified By</h1>
                <hr className='sm:w-[90%] md:w-[50%] h-2 bg-blue-500 mx-auto my-2'/>
                </div> */}
                 <span className="relative flex justify-center mb-9 ">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-blue-500 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-white px-6 text-4xl my-8 font-semibold ">We Are Certified By</span>
                </span>
         
            


                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                           

                       <div className='border-4 border-blue-500 p-4 rounded-xl'>

                       <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image} />


                         <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Government of Bangladesh</h3>
                       </div>
                       <div className='border-4 border-blue-500 p-4 rounded-xl'>

                       <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image2} />


                         <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Bangladesh Road Transport Authority</h3>
                       </div>
                       <div className='border-4 border-blue-500 p-4 rounded-xl'>

                       <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image3} />

                         <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Khulna Metropolitan Police</h3>
                       </div>
                       <div className='border-4 border-blue-500 p-4 rounded-xl'>

                       <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image4} />

                         <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Global Alliance Of NGOs For Road Safety</h3>
                       </div>
 </div>
            </div>
        </section>

    );
};

export default Cartified;