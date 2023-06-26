import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureSectionProps {
  category: string;
  title: string;
  description: string;
  initial?: Object;
  animate?: Object;
  transition?: Object;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  category,
  title,
  description,
  initial,
  animate,
  transition,
}) => {
  return (
    <motion.section
      className="text-gray-600 body-font"
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-[400px] md:w-1/2">
            <div className="h-full bg-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-xl">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-3">
                {category}
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-5">
                {title}
              </h1>
              <p className="leading-relaxed mb-5">{description}</p>
              <a className="text-indigo-500 inline-flex items-center mt-4 transition-colors duration-200 transform hover:scale-105">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeatureSection;
