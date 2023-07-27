import Image from "next/image";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import React from "react";
import { getContactUs } from "@/sanity/queries/getContactUs";
import { PortableText } from "@portabletext/react";
import { Fraunces, Poppins } from "next/font/google";
import Head from "next/head";
import Map from "@/components/Map";

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-helvetica",
  weight: "200",
});

export async function getStaticProps() {
  const contactUsContent = await getContactUs();
  return {
    props: {
      contactUsContent,
    },
    revalidate: 60, // Re-generate the post every minute
  };
}

type Props = {
  contactUsContent: {
    title: string;
    topImageUrl: string;
    topImageAlt: string;
    body: any;
    bottomImageUrl: string;
    bottomImageAlt: string;
    days: string[];
    hours: string;
    phone: string;
    email: string;
  }[];
};

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

const Contact = ({ contactUsContent }: Props) => {
  return (
    <div>
      <Head>
        <title>
          Kootanei Organics | Organic small batch cannabis in western Montana
        </title>
        <meta
          name='description'
          content='Discover Kootanei Organics and our range of organic small batch cannabis products grown in the heart of western Montana. Shop for vapes, pre-rolls, edibles and more.'
        />
      </Head>
      <Navbar />
      <Layout>
        <div className='bg-[#f9f1e0] flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1400px] max-w-full mx-auto mt-20 mb-20 rounded-md shadow-lg border border-gray-200'>
          {contactUsContent.map((content) => (
            <div
              key={content.title}
              className='p-6 lg:p-12 rounded-lg text-[#423A30]  max-w-7xl mx-auto'
            >
              <h2
                className={
                  " font-ElCaminoTextureCaps text-4xl text-center lg:text-7xl font-semi-bold lg:mb-6 mb-4"
                }
              >
                {content.title}
              </h2>

              <div className='relative my-10 flex justify-center items-center mx-auto mb-10 overflow-hidden rounded-lg lg:h-[100vh]'>
                <Image
                  src={content.topImageUrl || "/burning.jpeg"}
                  alt={content.topImageAlt}
                  height={400}
                  width={400}
                  className=' w-full aspect-auto max-w-prose  z-0 rounded-lg shadow-md'
                />
              </div>

              <div
                className={
                  poppins.className +
                  " text-gray-600 lg:my-32 text-lg max-w-prose leading-relaxed mx-auto mb-8 "
                }
              >
                {" "}
                <PortableText value={content.body} />
              </div>

              <div className='flex justify-center items-center mx-auto mb-10 overflow-hidden rounded-lg'>
                <div className='flex justify-center items-center mx-auto mb-10 overflow-hidden rounded-lg'>
                  <Map
                    position={{
                      lat: 46.87322103833278,
                      lng: -113.9951791236645,
                    }}
                  />
                </div>
              </div>

              <div className='text-center pt-8'>
                <h2
                  className={
                    inter.className + "text-center text-4xl font-bold mb-6"
                  }
                >
                  <ul className=' space-y-8 text-2xl'>
                    {content.days.map((day, index) => (
                      <li key={index}>{day}</li>
                    ))}
                  </ul>
                </h2>
                <div className='flex flex-col mt-4 items-center space-y-6 border-t border-gray-300 pt-8'>
                  <a
                    href={`tel:${content.phone}`}
                    className={
                      " font-ElCaminoTextureCaps bg-[#696B33] text-gray-100 mx-auto mb-2 text-lg leading-relaxed py-6 px-10 lg:max-w-xl rounded-full transition-colors duration-300 ease-in-out hover:bg-blue-800"
                    }
                  >
                    Give Us A Call
                  </a>
                  <a
                    href={`mailto:${content.email}`}
                    className={
                      " font-ElCaminoTextureCaps bg-[#696B33] text-gray-100 mx-auto mb-2 text-lg leading-relaxed py-6 px-10 lg:max-w-xl rounded-full transition-colors duration-300 ease-in-out hover:bg-blue-800"
                    }
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
