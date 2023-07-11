/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/router";
import { Poppins, Fraunces } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-helvetica",
  weight: "200",
});

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isAllowed, setIsAllowed] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <div className='container mt-20 lg:mt-40 mx-auto space-y-20 py-10 bg-[#E9EDC9] px-4 rounded-lg shadow-lg border border-gray-200'>
      <div className='  text-center space-y-10'>
        <h3
          className={`${inter.className} mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl`}
        >
          Newsletter Sign up
        </h3>
        <p className={`${poppins.className} mb-4`}>
          Sign up to our newsletter to get the latest news and updates.
        </p>
        <form className='w-full max-w-sm mx-auto' onSubmit={handleSubmit}>
          <div className='flex items-center border-b-2 border-teal-500 py-2 justify-center'>
            <input
              className='appearance-none align-middle bg-transparent border-none w-3/4 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
              type='email'
              placeholder='Your Email'
              aria-label='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className={`${poppins.className}flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded`}
              type='submit'
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
