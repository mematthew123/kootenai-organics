/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CTAProps {
  initial?: Object;
  animate?: Object;
  transition?: Object;
}


const CTA: React.FC<CTAProps> = ({ initial, animate, transition }) => {
  return (
    <>
      <motion.section
        className="text-gray-600 body-font"
        initial={initial}
        animate={animate}
        transition={transition}
      >
        <div className="bg-[#E9EDC9] flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1100px] max-w-full mx-auto mb-20 rounded-md shadow-lg border border-gray-200">
          <div className="w-full lg:w-1/2 text-center">
            <h2 className="text-3xl font-bold mb-2">Your Call to Action</h2>
            <p className="text-lg mb-4 max-w-md mx-auto">
              Add a brief description or some persuasive text here to encourage
              users to take action.
            </p>
            <div className="hidden lg:block">
            </div>
          </div>
          <div className="w-full lg:w-1/2 aspect-w-1 aspect-h-1 lg:aspect-none shadow-inner">
            <Image
              src="/shiplapCannabis.png"
              alt="A description of the image"
              className="w-full h-auto rounded-md object-cover"
              loading="lazy"
              width={500}
              height={500}
            />
          </div>
          <div className="lg:hidden">
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default CTA;
