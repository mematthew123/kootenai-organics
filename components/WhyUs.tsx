import React, { useEffect, useState } from "react";
import { GiFlowerPot } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaCannabis } from "react-icons/fa";
import SectionRight from "@/animations/sectionRight";
import SectionUp from "@/animations/sectionUp";
import { Fraunces, Poppins } from "next/font/google";
import { client } from "@/sanity/lib/client";

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

const WhyUs = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "feature"]')
      .then((data) => {
        setFeatures(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className='container mt-20 lg:mt-40 mx-auto space-y-20 py-10 bg-[#FAEDCD] px-4 rounded-lg shadow-lg border border-gray-200'>
      <div className='  text-center space-y-10'>
        <h2
          className={
            " font-ElCaminoTextureCaps text-4xl lg:text-5xl font-bold text-[#423A30]"
          }
        >
          Why Choose Us?
        </h2>
      </div>
      {/* features container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map(({ title, description }, index) => (
          <div
            key={index}
            className='bg-[#E9EDC9] flex flex-col items-center justify-center p-6 rounded-lg shadow-lg space-y-4'
          >
            <SectionRight>
              <FaCannabis className='text-6xl text-[#423A30]' />
            </SectionRight>
            <SectionUp>
              <h2
                className={
                  " font-ElCaminoTextureCaps leading-relaxed flex justify-center text-center text-2xl  text-[#423A30]"
                }
              >
                {title}
              </h2>
            </SectionUp>
            <SectionUp>
              <p className=' mx-auto text-center flex justify-center font-poppins font-light lg:text-lg text-[#423A30]'>
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
