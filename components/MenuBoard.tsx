import { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";
import { urlForImage } from "../sanity/lib/image";
import { Permanent_Marker } from "next/font/google";
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
      <div className="bg-[#FAEDCD] mt-20 lg:mt-40 flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1100px] max-w-full mx-auto mb-20 rounded-md shadow-lg border border-gray-200">
        <div className="bg-gray-800 text-white mx-auto lg:w-[1100px] rounded-lg">
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
              className="border-b-2 px-5 text-center border-dashed border-white mb-4 pb-4"
            >
              <h2 className="text-2xl font-bold">{special.title}</h2>
              <p className="text-xl">{special.description}</p>
              <p className="text-xl">{special.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuBoard;
