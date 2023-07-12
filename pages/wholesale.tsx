/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/router";
import WholeSaleList from "@/components/WholeSaleList";
import Navbar from "@/components/Navbar";
import WholesaleModal from "@/components/WholesaleModal";

type Props = {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (event: { preventDefault: () => void }) => void;
};

const isEmailWhitelisted = async (email: string) => {
  const query = `*[_type == "whitelistedEmail" && email == $email]`;
  const params = { email };
  const results = await client.fetch(query, params);
  return results.length > 0;
};

const Wholesale = () => {
  const [email, setEmail] = useState("");
  const [isAllowed, setIsAllowed] = useState(false);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const allowed = await isEmailWhitelisted(email);
    setIsAllowed(allowed);
    if (!allowed) {
      // show an error alert if the email is not whitelisted
      setShowModal(true);
    }
  };

  return (
    <>
      <WholesaleModal showModal={showModal} setShowModal={setShowModal} />
      <Layout>
        <Navbar />
        <div className='flex flex-col items-center justify-center min-h-screen text-center py-20'>
          {isAllowed ? (
            <WholeSaleList />
          ) : (
            <>
              <h1 className='text-4xl font-bold mb-4'>Wholesale customers</h1>
              <p className='mb-4'>
                Please enter your email address to access our wholesale store.
              </p>
              <form className='w-full max-w-sm' onSubmit={handleSubmit}>
                <div className='flex items-center border-b-2 border-teal-500 py-2'>
                  <input
                    className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                    type='email'
                    placeholder='Your Email'
                    aria-label='Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
                    type='submit'
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Wholesale;
