import React from "react";
import Layout from "../components/Layout";
import Navbar from "@/components/Navbar";

const wholesaleform = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Layout>
          <div className=' my-20 flex flex-col items-center justify-center min-h-screen py-2'>
            <form
              action='https://getform.io/f/21ebea21-a782-456a-9cd5-7cb30f91ee9f'
              method='POST'
              encType='multipart/form-data'
            >
              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Name</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='name'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Phone Number</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='phone'
                  />
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input
                  className='border-2 rounded-lg p-3 flex border-gray-300'
                  type='email'
                  name='email'
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>License</label>
                <input
                  className='border-2 rounded-lg p-3 flex border-gray-300'
                  type='text'
                  name='license'
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea
                  className='border-2 rounded-lg p-3 border-gray-300'
                  rows={10}
                  name='message'
                ></textarea>
              </div>
              <button className='w-full p-4 text-gray-100 mt-4'>
                Send Message
              </button>
            </form>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default wholesaleform;
