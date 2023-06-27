import React, { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Fraunces, Poppins } from "next/font/google";


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
  weight: "600",
});


type TextPosition = "left" | "center" | "right";

interface FeaturedData {
  title: string;
  description: string;
  featuredImage: string;
  alt: string;
  textPosition: TextPosition;
}

const Featured: React.FC<{ featuredData: FeaturedData }> = ({
  featuredData,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const textPositionClasses: Record<TextPosition, string> = {
    left: "lg:items-start lg:text-left",
    center: "items-center text-center",
    right: "lg:items-end lg:text-right",
  };

  const positionClass =
    textPositionClasses[featuredData.textPosition] ||
    textPositionClasses.center;

  return (
    <>
      <div className="bg-[#E9EDC9] mt-20 lg:mt-40 flex flex-col lg:flex-row p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:max-w-7xl mx-auto my-20 rounded-lg shadow-lg border border-gray-200">
        <div className="lg:w-1/2 aspect-auto shadow-inner">
          <Image
            src={featuredData.featuredImage}
            alt={featuredData.alt}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            width={500}
            height={500}
          />
        </div>

        <div
          className={`flex-1 flex flex-col justify-center ${positionClass} space-y-4`}
        >
          <h2
            className={
              inter.className +
              " text-3xl text-center lg:text-4xl font-semi-bold lg:mb-6 mt-10 mb-2 my-3"
            }
          >
            {featuredData.title}
          </h2>
          <div
            className={
              poppins.className +
              "mx-auto max-w-prose text-center text-base lg:max-w-none"
            }
          >
            <p className={
              poppins.className +"text-lg text-gray-500 mx-auto mb-8"}>
              {featuredData.description}
            </p>
          </div>
          <Link href="/menu">
            <p
              className={
                poppins.className +
                "inline-block leading-loose bg-green-800 text-gray-100 px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              }
            >
              Buy Now
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Featured;
