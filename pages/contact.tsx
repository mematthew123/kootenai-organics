import Image from "next/image";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import React from "react";
import { getContactUs } from "@/sanity/queries/getContactUs";
import { PortableText } from "@portabletext/react";
import { Fraunces } from "next/font/google";
import { Merriweather, Barlow } from "next/font/google";

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

const barlow = Barlow({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
  weight: "400",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
  weight: "900",
});

const Contact = ({ contactUsContent }: Props) => {
  return (
    <div>
      <Navbar />
      <Layout>
        <div className="bg-[#E9EDC9] flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1400px] max-w-full mx-auto mt-20 mb-20 rounded-md shadow-lg border border-gray-200">
          {contactUsContent.map((content) => (
            <div
              key={content.title}
              className="p-6 lg:p-12rounded-lg text-gray-800  max-w-7xl mx-auto"
            >
              <h2
                className={
                  inter.className +
                  " text-4xl text-center lg:text-7xl font-semi-bold lg:mb-6 mb-4"
                }
              >
                {content.title}
              </h2>

              <div className="flex justify-center items-center mx-auto mb-10 overflow-hidden rounded-lg">
                <Image
                  src={content.topImageUrl}
                  alt={content.topImageAlt}
                  width={800}
                  height={800}
                  className="object-cover rounded-lg shadow-md"
                />
              </div>

              <div
                className={
                  barlow.className +
                  "mx-auto max-w-prose text-center text-base lg:max-w-none"
                }
              >
                <p className="text-lg text-gray-500 mx-auto mb-8">
                  <PortableText value={content.body} />
                </p>
              </div>

              <div className="flex justify-center items-center mx-auto mb-8 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.4995036455716!2d-113.9951791236645!3d46.87322103833278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535dce80198a2f23%3A0x6935f2b53e3d7212!2sMontana%20Medicinals%20-%20Open%20Regular%20Hours%20Serving%20All%20Adult%20Patients!5e0!3m2!1sen!2sus!4v1687743861679!5m2!1sen!2sus"
                  width="800"
                  height="600"
                  loading="lazy"
                  className="w-full h-64 lg:h-96 border-0 rounded-lg shadow-md"
                />
              </div>

              <div className="text-center pt-6">
                <h2
                  className={
                    inter.className + "text-center text-4xl font-bold mb-4"
                  }
                >
                  <ul className=" space-y-6 text-2xl">
                    {content.days.map((day, index) => (
                      <li key={index}>{day}</li>
                    ))}
                  </ul>
                </h2>
                <div className="flex flex-col mt-4 items-center space-y-4 border-t border-gray-300 pt-6">
                  <a
                    href={`tel:${content.phone}`}
                    className={
                      merriweather.className +
                      "  bg-blue-600 text-white mx-auto mb-2 text-lg leading-relaxed py-4 px-8 lg:max-w-xl rounded-full transition-colors duration-300 ease-in-out hover:bg-blue-800"
                    }
                  >
                    Give Us A Call
                  </a>
                  <a
                    href={`mailto:${content.email}`}
                    className={
                      merriweather.className +
                      "  bg-blue-600 text-white mx-auto mb-2 text-lg leading-relaxed py-4 px-8 lg:max-w-xl rounded-full transition-colors duration-300 ease-in-out hover:bg-blue-800"
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