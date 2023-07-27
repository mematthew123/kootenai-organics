import React from "react";
import Logo from "/public/logo.svg";
import Layout from "@/components/Layout";
import Image from "next/image";

const test = () => {
  return (
    <div>
      <Layout>
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
          <Image src={Logo} alt='Logo' width={1600} height={1600} />
        </div>
      </Layout>
    </div>
  );
};

export default test;
