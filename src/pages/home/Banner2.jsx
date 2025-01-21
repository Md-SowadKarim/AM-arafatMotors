import React from 'react';

const Banner2 = () => {
    return (
        <div>
            
    <div className=" mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
      <div className=" border flex flex-col mx-auto overflow-hidden rounded">
        <img src="/public/image/img4.jpg" alt="" className="w-full h-96 sm:h-96 dark:bg-gray-500" />
        <div className=" bg-slate-400 p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-screen-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">

          <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Downloads</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86k</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner2;