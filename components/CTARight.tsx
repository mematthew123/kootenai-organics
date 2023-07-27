import React from "react";
import Link from "next/link";

const CTARight = () => {
  return (
    <div className='bg-[#f9f1e0] flex flex-col lg:flex-row p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:max-w-7xl mx-auto my-20 rounded-lg shadow-lg border border-gray-200'>
      <div className='lg:w-1/2 aspect-auto shadow-inner'>
        <img
          src='/flowerSunset.png'
          alt='A description of the image'
          className='w-full h-96 object-cover rounded-lg shadow-lg'
          loading='lazy'
        />
      </div>

      <div className={`flex-1 flex flex-col justify-center  space-y-4`}>
        <h2 className='text-3xl font-extrabold text-gray-800'>
          Here is a title
        </h2>
        <p className='text-lg text-gray-600'>Check out this awesome content</p>
        <Link href='/menu'>
          <p className='inline-block bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg'>
            Buy Now
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CTARight;
