import image from "../../../public/image/car.png"
import image2 from "../../../public/image/car.png"
import image3 from "../../../public/image/certificate.png"
import image4 from "../../../public/image/presentation.png"

const WhyChoos = () => {
    return (
        <div>
             <section className="py-6 dark:bg-gray-800">
            <div className="container flex flex-col justify-center p-4 mx-auto">

                <span className="relative flex justify-center mb-9 ">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-blue-500 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-white px-6 text-2xl font-semibold ">WHY CHOOSE ARAFAT MOTOR DRIVING TAINING SCHOOL?</span>
                </span>


                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">

                    <div className="object-cover w-full dark:bg-gray-500 aspect-square">
                        <article
                            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">


                                <span className="inline-block rounded  p-2 text-white">
                                    <img className="w-10" src={image} alt="" />
                                </span>

                                <a href="#">
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                       Theory Class
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                  Conducted in air-condition and modern technology multimedia classrooms.
                                </p>

                                {/* <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                                    Find out more

                                    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                        &rarr;
                                    </span>
                                </a> */}
                            </div>
                        </article>

                    </div>
                    {/* tow number card  */}

                    <div className="object-cover w-full dark:bg-gray-500 aspect-square">
                        <article
                            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">


                                <span className="inline-block rounded  p-2 text-white">
                                <img className="w-10" src={image2} alt="" />
                                </span>

                                <a href="#">
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                      Experienced Trainer
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                  Training provided under BRTA approved and experienced instructors
                                </p>

                                {/* <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                                    Find out more

                                    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                        &rarr;
                                    </span>
                                </a> */}
                            </div>
                        </article>

                    </div>
                    {/* three number card */}
                    <div className="object-cover w-full dark:bg-gray-500 aspect-square">
                        <article
                            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">


                                <span className="inline-block rounded  p-2 text-white">
                                <img className="w-10" src={image3} alt="" />
                                </span>

                                <a href="#">
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                       Certificate
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                 Award of Recognition certificate to those who successfully complete the course
                                </p>

                                {/* <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                                    Find out more

                                    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                        &rarr;
                                    </span>
                                </a> */}
                            </div>
                        </article>

                    </div>
                    {/* four number caed */}
                    <div className="object-cover w-full dark:bg-gray-500 aspect-square">
                        <article
                            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">


                                <span className="inline-block rounded  p-2 text-white">
                                <img className="w-10" src={image4} alt="" />
                                </span>

                                <a href="#">
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                       Training Modules
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                 Only PDTS follows international standard driving training and curriculum.
                                </p>

                                {/* <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                                    Find out more

                                    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                        &rarr;
                                    </span>
                                </a> */}
                            </div>
                        </article>

                    </div>



                </div>
            </div>
        </section>
        </div>
    );
};

export default WhyChoos;