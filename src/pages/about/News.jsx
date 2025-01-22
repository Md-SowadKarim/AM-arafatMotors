
import image from "../../image/Car.jpg"
const News = () => {
    return (

        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-4xl font-semibold text-blue-600 ">Who Are We</p>
                            <hr className='sm:w-[90%] md:w-[150%] h-4 bg-blue-500 mx-auto my-2'/>
                            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Arafat Motor Driving Training School
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-700 ">

                                PATHWAY Driving Training School is one of the best driving training centers in Dhaka. It is approved by Bangladesh Road Transport Authority (BRTA). [Registration No: 116/2018]
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src={image}
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                            <p>
                            <strong className="font-semibold text-gray-900 text-left">Mission:</strong> Mission: To provide comprehensive, high-quality driving education that meets international standards, ensuring students are well-prepared for real-world driving challenges.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">

                                    <span className="text-left">
                                        <strong className="font-semibold text-gray-900">Vision.</strong> To create safer roads by producing highly skilled and responsible drivers.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="text-left">
                                        <strong className="font-semibold text-gray-900">  Values:  </strong>

                                    <p>• Safety:Ensuring the highest standards of road safety in all training sessions.  </p>
                                        <p> •  Professionalism: Delivering quality education with expert instructors.  </p>  
                                       <p> •  Integrity: Maintaining honesty and ethical practices in all operations.  </p>  
                                        <p> •  Responsibility: Teaching drivers to be responsible and aware on the road.  </p>
                                         
                                       <p> •  Innovation: Continuously improving training methods to stay aligned with global standards. </p> 
                                    </span>
                                </li>
                                <li className="flex gap-x-3">

                                    <span className="text-left">
                                        
                                        Road accident in Bangladesh is one of the national problems. One of the main reasons for this is untrained unskilled drivers. Therefore, PATHWAY Driving Training School started its journey in 2018 with the aim of making efficient drivers to prevent accidents. It is part of the education and training department of the non-profit and development charity PATHWAY. PATHWAY's main mission is to support sustainable development and positive change through collaborative work around the world. PATHWAY is a member of Global Alliance of NGOs for Road Safety. 
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8 text-left">
                            PATHWAY Driving Training School provides training for cars, motorcycles and scooters. By providing well-planned curriculum and driving training under the supervision of experienced instructors, PATHWAY Driving Training School has become the leading training center in the country within a short span of time. There is an opportunity for various professionals to choose their convenient time or schedule. Training is provided in a women-friendly environment to strengthen the path of women's advancement. Here all trainees have to attend practical as well as compulsory theory classes. We have air-conditioned multimedia classrooms for theory training. 
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900"></h2>
                            <p className="mt-6 text-left">
                            PATHWAY Driving Training School provides basic (short course) and advanced (long course) level driving training. For which we have a group of experienced trainers who are BRTA approved trainers. Also, we have experience working corporately with various organizations. PATHWAY Driving Training School certificates are awarded to those who successfully complete the course. Which plays an important role in the workplace. The trained persons from here are carrying out their professional duties with Tsunami in the country and abroad
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>

    );
};

export default News;