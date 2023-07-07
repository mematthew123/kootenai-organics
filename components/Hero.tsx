import React from "react";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

type TextPosition = "topLeft" | "center" | "bottomRight" | "bottomLeft" | "topRight";

interface HeroData {
  title: string;
  description: string;
  heroImage: string;
  alt: string;
  textPosition: TextPosition;
}

const Hero: React.FC<{ heroData: HeroData }> = ({ heroData }) => {
  const textPositionClasses: Record<TextPosition, string> = {
    topLeft: "justify-start items-start",
    center: "justify-center items-center",
    bottomRight: "justify-end items-end",
    topRight: "justify-start items-end ",
    bottomLeft: "justify-end items-start",
  };

  console.log(heroData.textPosition);

  const positionClass =
    textPositionClasses[heroData.textPosition] || "justify-center items-center";

  return (
    <div className="  max-w-[1240px] mb-40 h-screen flex flex-col justify-center items-center p-4 rounded-lg">
      <div className=" flex flex-col justify-center items-center text-center sm:items-start space-y-6">
        <img
          src={heroData.heroImage}
          alt={heroData.alt}
          className="absolute inset-0 object-fit min-h-screen aspect-auto w-full z-0"
          draggable="false"
        />
        <div
          className={`text-white m-4 absolute inset-0 flex flex-col text-center p-20 small:text-left small:p-32 ${positionClass}`}
        >
          <h2 className="text-4xl mb-4">{heroData.title}</h2>
          <p className=" flex font-extrabold text-xl text-center align-middle left-50% top-50%  text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
            {heroData.description}
          </p>
          <button className="flex items-center justify-center w-40 h-12 bg-primary-500 rounded-full text-white text-base-regular font-bold drop-shadow-md shadow-black">
           Shop Now
          </button>
        </div>
        <Link href="/menu">
          <div className="flex items-center text-large-regular border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-1">
            <span>Check it out</span>
            <ArrowLongRightIcon className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
