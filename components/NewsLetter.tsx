/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/router";
import axios from "axios";
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
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Prevent form from causing a page refresh
    try {
      setIsLoading(true);
      await axios.post("/api/send", { email });
      setEmail(""); // Clear the input field after sending the email
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className='container mt-20 lg:mt-40 mx-auto space-y-20 py-10 bg-[#E9EDC9] px-4 rounded-lg shadow-lg border border-gray-200'>
      <div className='  text-center space-y-10'>
        <h3
          className={`${inter.className} mt-2 text-3xl font-bold leading-8 tracking-tight text-[#423A30] sm:text-4xl`}
        >
          Newsletter Sign up
        </h3>
        <p className={`${poppins.className} mb-4`}>
          Sign up to our newsletter to get the latest news and updates.
        </p>
        <form className='w-full max-w-sm mx-auto' onSubmit={handleFormSubmit}>
          <div className='flex items-center border-b-2 border-teal-500 py-2 justify-center'>
            <input
              className='appearance-none align-middle bg-transparent border-none w-3/4 text-[#423A30] mr-3 py-1 px-2 leading-tight focus:outline-none'
              type='email'
              placeholder='Your Email'
              aria-label='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type='submit' // Add type='submit' to make the form submit when this button is pressed
              className={`flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Email"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
