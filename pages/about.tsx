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
    revalidate: 60,
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
        <meta name="description" content="Learn more about our story and our values." />
      </Head>
      <Navbar />
      <Layout>
        <div className="bg-[#E9EDC9] flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1400px] max-w-full mx-auto mt-20 mb-20 rounded-md shadow-lg border border-gray-200">
          {aboutUsContent.map((content) => {
            const firstHalfBody = content.body.slice(
              0,
              Math.ceil(content.body.length / 2)
            );
            const secondHalfBody = content.body.slice(
              Math.ceil(content.body.length / 2)
            );

            return (
              <div key={content.title} className="p-6 lg:p-12rounded-lg text-gray-800  max-w-7xl mx-auto">
                <h2
                  className={
                    titleFont.className +
                    " text-4xl text-center lg:text-7xl font-semi-bold lg:mb-6 mb-4"
                  }
                >
                  {content.title}
                </h2>
                <div className="flex justify-center items-center mx-auto mb-10 overflow-hidden rounded-lg">
                  <Image
                    src={content.topImageUrl || "/burning.jpeg"}
                    alt={content.topImageAlt}
                    width={800}
                    height={800}
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
                <div
                  className={
                    bodyFont.className +
                    "mx-auto max-w-prose text-center text-base lg:max-w-none"
                  }
                >
                  <p className="text-lg text-gray-600 mx-auto mb-8">
                    <PortableText value={firstHalfBody} />
                  </p>
                </div>
                <div className="flex justify-center items-center mx-auto mb-10 overflow-hidden rounded-lg">
                  <Image
                    src={content.bottomImageUrl}
                    alt={content.bottomImageAlt}
                    width={800}
                    height={800}
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
                <div
                  className={
                    bodyFont.className +
                    "mx-auto max-w-prose text-center text-base lg:max-w-none"
                  }
                >
                  <p className="text-lg text-gray-600 mx-auto mb-8">
                    <PortableText value={secondHalfBody} />
                  </p>
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
