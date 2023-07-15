import { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";
import { urlForImage } from "../sanity/lib/image";
import { Permanent_Marker, Poppins } from "next/font/google";
import { Fraunces } from "next/font/google";
import { motion } from "framer-motion";

interface Special {
  imageUrl: string;
  _id: string;
  title: string;
  description: string;
  price: number;
  image: Image;
}

type Props = {
  specials: Special[];
};

interface Image {
  asset: {
    _ref: string;
  };
}

const inter = Permanent_Marker({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
  weight: "200",
});

const MenuBoard: React.FC<Props> = () => {
  const [specials, setSpecials] = useState<Special[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "special"]{title, description, price, image { asset { _ref } }}`
      )
      .then((data) => setSpecials(data))
      .catch(console.error);
  }, []);

  return (
    // we want to have the compoennt slide in from the right when it's in view
    <>
      <div className='bg-[#FAEDCD] mt-20 lg:mt-40 flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1100px] max-w-full mx-auto mb-20 rounded-md shadow-lg border border-gray-200'>
        <div className='bg-gray-800 text-white mx-auto lg:w-[1100px] rounded-lg'>
          <h1
            className={
              inter.className +
              " text-6xl font-bold text-gray-600 pb-10 text-center underline drop-shadow-lg shadow-black"
            }
          >
            Specials{" "}
          </h1>
          {specials.map((special) => (
            <div
              key={special._id}
              className='border-b-2 px-5 my-2 text-center leading-relaxed border-dashed border-white mb-4 pb-4'
            >
              <h3
                className={`${inter.className} mt-2 text-3xl font-bold leading-8 tracking-tight text-[#423A30] sm:text-4xl`}
              ></h3>
              <h1 className='text-2xl lg:text-3xl py-2  text-slate-100 font-bold'>
                {special.title}
              </h1>
              <p className='text-xl text-slate-100 py-2 '>
                {special.description}
              </p>
              <p className='text-xl'>{special.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuBoard;
