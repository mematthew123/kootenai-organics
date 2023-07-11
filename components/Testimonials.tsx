import { useState, useEffect } from "react";
import { getTestimonials } from "../sanity/queries/getTestimonials";
import SectionUp from "@/animations/sectionUp";
import Image from "next/image";
import { Fraunces, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
  weight: "200",
});

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

type Testimonial = {
  name: string;
  quote: string;
  title: string;
  imageUrl: string;
};

const imageUrl =
  "https://images.unsplash.com/photo-1589691962030-8d2b7f2a1ffe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    getTestimonials().then(setTestimonials);
  }, []);

  return (
    <div className='bg-[#CD8B2A] mt-20 lg:mt-40 flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1100px] max-w-full mx-auto mb-20 rounded-md overflow-hidden shadow-lg border border-gray-200'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 bg-[#CD8B2A] py-24 sm:py-32'>
        <div className='mx-auto max-w-xl text-center'>
          <h2
            className={
              inter.className + " text-3xl font-extrabold text-[#FBF4E2] mb-3"
            }
          >
            The Reviews are in!
          </h2>
          <p
            className={
              inter.className +
              " mt-2 text-xl font-bold  text-[#423A30] sm:text-4xl"
            }
          >
            What our customers are saying
          </p>
        </div>
        <div className='mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none'>
          <SectionUp>
            <div className='-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3'>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className='pt-8 sm:inline-block sm:w-full sm:px-4'
                >
                  <figure className='rounded-2xl bg-[#FBF4E2] p-8 text-sm leading-6 min-h-[200px]'>
                    <blockquote className='text-gray-600 font-poppins '>
                      <p>{`“${testimonial.quote}”`}</p>
                    </blockquote>
                    <figcaption className='mt-6 flex items-center gap-x-4'>
                      <Image
                        className='h-10 w-10 rounded-full bg-gray-50'
                        src={imageUrl}
                        height={200}
                        width={200}
                        alt=''
                      />
                      <div>
                        <div className='font-semibold font-poppins text-[#423A30]'>
                          {testimonial.name}
                        </div>
                        <div className='font-poppins text-[#423A30]'>{`@${testimonial.name}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </SectionUp>
        </div>
      </div>
    </div>
  );
}
