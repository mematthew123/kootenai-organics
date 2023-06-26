import React from "react";
import { getAboutUs } from "@/sanity/queries/getAboutUs";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Barlow } from "next/font/google";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
  weight: "900",
});

const barlow = Barlow({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
  weight: "400",
});

export async function getStaticProps() {
  const aboutUsContent = await getAboutUs();
  return {
    props: {
      aboutUsContent,
    },
    revalidate: 60, // Re-generate the post every minute
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
    <>
      <Navbar />
      <Layout>
        <div className="bg-[#E9EDC9] flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1400px] max-w-full mx-auto mt-20 mb-20 rounded-md shadow-lg border border-gray-200">
          <div
            className={
              merriweather.className +
              "mt-20 lg:mt-52 p-4 text-center text-gray-700"
            }
          >
            {aboutUsContent.map((content) => {
              // Hypothetical code to split the body content into two halves
              const firstHalfBody = content.body.slice(
                0,
                Math.ceil(content.body.length / 2)
              );
              const secondHalfBody = content.body.slice(
                Math.ceil(content.body.length / 2)
              );

              return (
                <div key={content.title}>
                  <h2
                    className={
                      merriweather.className +
                      " text-4xl text-center lg:text-7xl font-semi-bold lg:mb-6 mb-4"
                    }
                  >
                    {content.title}
                  </h2>
                  <div className="mx-auto shadow-lg rounded-lg object-cover overflow-hidden mb-8">
                    <Image
                      src={content.topImageUrl || "/burning.jpeg"}
                      alt={content.topImageAlt}
                      width={800}
                      height={800}
                      className="w-full h-full object-cover align-middle"
                    />
                  </div>
                  <div
                    className={
                      barlow.className + "prose prose-lg mx-auto text-center"
                    }
                  >
                    <PortableText value={firstHalfBody} />
                  </div>
                  <div className="mx-auto shadow-lg rounded-lg overflow-hidden mt-8 mb-8">
                    <Image
                      src={content.bottomImageUrl}
                      alt={content.bottomImageAlt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover align-middle"
                    />
                  </div>
                  <div
                    className={
                      barlow.className + "prose prose-lg mx-auto text-center"
                    }
                  >
                    {" "}
                    <PortableText value={secondHalfBody} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;
