import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Section from "@/animations/section";
import { AiOutlineClose } from 'react-icons/ai';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bannerText, setBannerText] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    client
      .fetch('*[_type == "banner"][0]')
      .then((banner) => {
        setBannerText(banner.text);
        setIsVisible(banner.isVisible);
        setIsLoaded(true);
      })
      .catch(console.error);
  }, []);

  const handleClose = () => {
    console.log("Closing banner...");
    setIsVisible(false);
  };

  if (!isVisible || !isLoaded) {
    return null;
  }

  return (
    <>
    <Section>
    <div className="fixed mt-20 overflow-hidden left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-14 lg:h-20 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 z-50 flex justify-center items-center shadow-lg">
      <h1 className="font-sans text-lg lg:text-2xl font-semibold">{bannerText}</h1>
      <button
        onClick={handleClose}
        className="absolute top-0 right-0 mt-3 lg:mt-5 mr-3 lg:mr-5 text-gray-600 hover:text-gray-700 transition-colors duration-200"
      >
        <AiOutlineClose size={24} />
      </button>
    </div>
    </Section>
    </>
  );
};

export default Banner;
