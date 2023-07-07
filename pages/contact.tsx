import Image from "next/image";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import React from "react";
import { getContactUs } from "@/sanity/queries/getContactUs";
import { PortableText } from "@portabletext/react";
import { Fraunces, Poppins } from "next/font/google";
import Head from "next/head";

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
          name="description"
          content="Discover Kootanei Organics and our range of organic small batch cannabis products grown in the heart of western Montana. Shop for vapes, pre-rolls, edibles and more."
        />
      </Head>
      <Navbar />
      <Layout>
        <div className="bg-[#E9EDC9] flex flex-col lg:flex-row items-center p-8 lg:p-16 space-y-8 lg:space-y-0 lg:space-x-8 lg:w-[1400px] max-w-full mx-auto mt-20 mb-20 rounded-md shadow-lg border border-gray-200">
          {contactUsContent.map((content) => (
            <div
              key={content.title}
              className="p-8 lg:p-16 rounded-lg text-gray-800  max-w-7xl mx-auto"
            >
              <h2
                className={
                  inter.className +
                  " text-4xl text-center lg:text-6xl font-semi-bold lg:mb-8 mb-6"
                }
              >
                {content.title}
              </h2>

              <div className="relative my-10 flex justify-center items-center mx-auto mb-10 overflow-hidden rounded-lg lg:h-[100vh]">
                <Image
                  src={content.topImageUrl || "/burning.jpeg"}
                  alt={content.topImageAlt}
                  height={400}
                  width={400}
                  className=" w-full aspect-auto max-w-prose  z-0 rounded-lg shadow-md"
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

              <div className="flex justify-center items-center mx-auto mb-10 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.4995036455716!2d-113.9951791236645!3d46.87322103833278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535dce80198a2f23%3A0x6935f2b53e3d7212!2sMontana%20Medicinals%20-%20Open%20Regular%20Hours%20Serving%20All%20Adult%20Patients!5e0!3m2!1sen!2sus!4v1687743861679!5m2!1sen!2sus"
                  width="800"
                  height="600"
                  loading="lazy"
                  className="w-full h-64 lg:h-96 border-0 rounded-lg shadow-md"
                />
              </div>

              <div className="text-center pt-8">
                <h2
                  className={
                    inter.className + "text-center text-4xl font-bold mb-6"
                  }
                >
                  <ul className=" space-y-8 text-2xl">
                    {content.days.map((day, index) => (
                      <li key={index}>{day}</li>
                    ))}
                  </ul>
                </h2>
                <div className="flex flex-col mt-4 items-center space-y-6 border-t border-gray-300 pt-8">
                  <a
                    href={`tel:${content.phone}`}
                    className={
                      poppins.className +
                      "  bg-blue-600 text-white mx-auto mb-2 text-lg leading-relaxed py-6 px-10 lg:max-w-xl rounded-full transition-colors duration-300 ease-in-out hover:bg-blue-800"
                    }
                  >
                    Give Us A Call
                  </a>
                  <a
                    href={`mailto:${content.email}`}
                    className={
                      poppins.className +
                      "  bg-blue-600 text-white mx-auto mb-2 text-lg leading-relaxed py-6 px-10 lg:max-w-xl rounded-full transition-colors duration-300 ease-in-out hover:bg-blue-800"
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
