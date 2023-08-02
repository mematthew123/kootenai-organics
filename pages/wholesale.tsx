/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import WholesaleModal from "@/components/WholesaleModal";
import Link from "next/link";

const Wholesale = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const [license, setLicense] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // POST request to login endpoint
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, license }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      localStorage.setItem("auth.token", data.token);
      router.push("/wholesaleproducts");
    } else {
      // Show an error alert if the login failed
      setShowModal(true);
    }
  };

  return (
    <>
      <WholesaleModal showModal={showModal} setShowModal={setShowModal} />
      <Layout>
        <Navbar />
        <div className='flex flex-col items-center justify-center min-h-screen text-center py-20'>
          <h1 className=' font-ElCaminoTextureCaps text-4xl font-bold mb-4'>
            Wholesale customers
          </h1>
          <p className='mb-4'>
            Please enter your email address and licsense number to access our
            wholesale store.
          </p>
          <form
            className='w-full max-w-md bg-[#f9f1e0] shadow-md rounded px-8 pt-6 pb-8 mb-4'
            onSubmit={handleSubmit}
          >
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='email'
              >
                Email Address
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='email'
                placeholder='Your Email'
                aria-label='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} // input field for the email
              />
            </div>
            <div className='mb-6'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='license'
              >
                License
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Your License'
                aria-label='Your License'
                value={license}
                onChange={(e) => setLicense(e.target.value)} // input field for the license number
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Sign In
              </button>
            </div>
          </form>
          {/* <p className=' text-gray-600 '>
            First time here?
            <Link
              href='/wholesaleform'
              className='text-blue-500 hover:text-blue-700'
            >
              <p> Click here to apply for a wholesale account.</p>
            </Link>
          </p> */}
        </div>
      </Layout>
    </>
  );
};

export default Wholesale;
