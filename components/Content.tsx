import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Fraunces, Poppins } from "next/font/google";
import SectionUp from "@/animations/sectionUp";
import { CameraIcon } from "@heroicons/react/20/solid";
import { PortableText } from "@portabletext/react";
import styles from "./content.module.css";

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-helvetica",
  weight: "200",
});

interface MainContentData {
  title: string;
  description: string;
  mainImage: string;
  alt: string;
  body: any;
}

const Content: React.FC<{ mainContentData: MainContentData }> = ({
  mainContentData,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className='bg-[#E9EDC9] mt-20 lg:mt-40 flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1100px] max-w-full mx-auto mb-20 rounded-md overflow-hidden shadow-lg border border-gray-200'>
        <div className='relative mx-auto max-w-7xl px-6 py-16 lg:px-8'>
          <div className='absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block' />
          <div className='mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8'>
            <div>
              <h3
                className={`${inter.className} mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl`}
              >
                {mainContentData.title}
              </h3>
            </div>
          </div>
          <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='relative lg:col-start-2 lg:row-start-1'>
              <svg
                className='absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                />
              </svg>
              <div className='relative mx-auto max-w-prose text-base lg:max-w-none'>
                <figure>
                  <div className='aspect-h-7 aspect-w-12 lg:aspect-none'>
                    <Image
                      className='rounded-lg object-cover object-center shadow-lg'
                      src={mainContentData.mainImage}
                      alt='Whitney leaning against a railing on a downtown street'
                      width={1184}
                      height={1376}
                    />
                  </div>
                  <figcaption className='mt-3 flex text-sm text-gray-600'>
                    <CameraIcon
                      className='h-5 w-5 flex-none text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='ml-2'>Photograph by Marcus O’Leary</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className='mt-8 lg:mt-0'>
              <SectionUp>
                <div
                  className={`${poppins.className} text-lg leading-relaxed mx-auto mb-8 space-y-10 max-w-prose text-gray-600  lg:max-w-none ${styles.portableText}`}
                >
                  <PortableText value={mainContentData.body} />
                </div>
                {/* </div> */}
              </SectionUp>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
