import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import SectionDown from "@/animations/sectionDown";
import SectionRight from "@/animations/sectionRight";
import SectionUp from "@/animations/sectionUp";
import Section from "@/animations/section";

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
    <div className="fixed mt-20  overflow-hidden left-1/2 transform -translate-x-1/2 w-full  h-14 lg:h-20 rounded-lg bg-green-600 text-gray-700 border-1 border-zinc-600 z-10 flex justify-center items-center ">
      <h1 className=" text-lg lg:text-4xl">{bannerText}</h1>
      <button
        onClick={handleClose}
        className="absolute top-0 right-0 mt-4 mr-4 text-lg lg:text-2xl text-gray-700 hover:text-gray-900 transition-colors duration-200"
      >
        X
      </button>
    </div>
    </Section>
    </>
  );
};

export default Banner;
