import React from "react";
import { GiFlowerPot } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaCannabis } from "react-icons/fa";
import SectionRight from "@/animations/sectionRight";
import SectionUp from "@/animations/sectionUp";
import { Fraunces, Poppins } from "next/font/google";


const features = [
  {
    title: "100% Organic",
    description:
      "Our cannabis is grown 100% organically, with no pesticides or herbicides.",
  },
  {
    title: "Solventless",
    description:
      "We use only solventless extraction methods to ensure the highest quality.",
  },
  {
    title: "Experienced",
    description:
      "We have over 15 years of experience in the cannabis industry.",
  },
];

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});



const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
  weight: "400",
});

const WhyUs = () => {
  return (
    <div className="container mt-20 lg:mt-40 mx-auto space-y-20 py-10 bg-[#FAEDCD] px-4 rounded-lg shadow-lg border border-gray-200">
      <div className="  text-center space-y-10">
        <h2
          className={
            inter.className + " text-4xl lg:text-5xl font-bold text-gray-800"
          }
        >
          Why Choose Us?
        </h2>
        <p
          className={
            poppins.className + " text-lg text-gray-600 leading-relaxed"
          }
        >
          We have over 15 years of experience in the cannabis industry and we
          are passionate about exceeding your expectations. We love our
          customers and welcome your feedback and suggestions. Use our Contact
          Us page to tell us what we’re doing right or what we can improve on.
        </p>
      </div>
      {/* features container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }, index) => (
          <div
            key={index}
            className="bg-[#E9EDC9] flex flex-col items-center justify-center p-6 rounded-lg shadow-lg space-y-4"
          >
            <SectionRight>
              <FaCannabis className="text-6xl text-gray-600" />
            </SectionRight>
            <SectionUp>
              <h2
                className={
                  inter.className +
                  " leading-relaxed flex justify-center text-center text-2xl  text-gray-600"
                }
              >
                {title}
              </h2>
            </SectionUp>
            <SectionUp>
              <p
                className={
                  poppins.className +
                  " mx-auto text-center flex justify-center lg:text-lg text-gray-600"
                }
              >
                {description}
              </p>
            </SectionUp>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
