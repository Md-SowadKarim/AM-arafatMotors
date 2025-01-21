
import CountUp from 'react-countup';
import image1 from "../../assets/image/graduated.png"
import image2 from "../../assets/image/online-learning.png"
const Banner = () => {
  return (
    <div>

      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
{/* bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] */}
      <section
        className="relative  bg-cover bg-red-400 bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
           <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full lg:ml-36 bg-red-600  rounded-full bg-rose- px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring  sm:w-auto"
              >
               Under experienced instructors
              </a>

            </div>
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Learn to Drive with Confidence

            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            We ensure the planned training modules and the safety of the trainees.
            </p>

         
          </div>
        </div>
      </section>


      <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className=" bg-slate-400 flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
            <img className="h-14 w-14" src={image1} alt="" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">
                <CountUp
                  start={0}
                  end={5237}
                  duration={5}
                >
                  5237

                </CountUp>

              </p>
              <p className="capitalize">GRADUATED FROM HERE</p>
            </div>
          </div>
          <div className=" bg-slate-400  flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <img className="h-14 w-14" src={image2} alt="" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">
                <CountUp
                  start={0}
                  end={7}
                  duration={5}
                >
                  7

                </CountUp>

              </p>
              <p className="capitalize">INSTUCTORS NUMBER</p>
            </div>
          </div>
          <div className=" bg-slate-400  flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <img className="h-14 w-14" src="/public/image/students.png" alt="" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">
                <CountUp
                  start={0}
                  end={127}
                  duration={5}
                >
                  127

                </CountUp>
              </p>
              <p className="capitalize">PRESENT STUDENTS</p>
            </div>
          </div>
          <div className=" bg-slate-400 flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <img className="h-14 w-14" src="/public/image/branch.png" alt="" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">
                <CountUp
                  start={0}
                  end={1}
                  duration={5}
                >
                  1

                </CountUp>
              </p>
              <p className="capitalize">BRANCH</p>
            </div>
          </div>
        </div>
      </section>
    </div>






  );
};

export default Banner;