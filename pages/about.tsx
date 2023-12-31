import React from "react";
import { getAboutUs } from "@/sanity/queries/getAboutUs";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Fraunces, Poppins } from "next/font/google";
import Head from "next/head";

const bodyFont = Poppins({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
  weight: "200",
});

const titleFont = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

export async function getStaticProps() {
  const aboutUsContent = await getAboutUs();
  return {
    props: {
      aboutUsContent,
    },
    revalidate: 3,
  };
}

type Props = {
  aboutUsContent: {
    title: string;
    topImageUrl: string;
    topImageAlt: string;
    body: any;
    bottomImageUrl: string;
    bottomImageAlt: string;
  }[];
};

const AboutUs = ({ aboutUsContent }: Props) => {
  return (
    <div>
      <Head>
        <title>About Us | Our Story</title>
        <meta
          name='description'
          content='Learn more about our story and our values.'
        />
      </Head>
      <Navbar />
      <Layout>
        <div className='bg-[#f9f1e0] flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1400px] max-w-full mx-auto mt-20 mb-20 rounded-md shadow-lg border border-gray-200'>
          {aboutUsContent.map((content) => {
            return (
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
                    className=' w-full max-w-prose object-contain  aspect-auto  z-0 rounded-lg shadow-md'
                  />
                </div>

                <div
                  className={
                    bodyFont.className +
                    " text-gray-600 text-lg max-w-prose leading-relaxed mx-auto mb-8 "
                  }
                >
                  {" "}
                  <PortableText value={content.body} />
                </div>
                <div className='flex justify-center items-center mx-auto mb-10 overflow-hidden rounded-lg'></div>
                <div
                  className={
                    bodyFont.className +
                    "mx-auto max-w-prose text-center text-base lg:max-w-none"
                  }
                >
                  <p className='text-lg text-gray-600 mx-auto mb-8'></p>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
};

export default AboutUs;
