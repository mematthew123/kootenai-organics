import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Merriweather } from "next/font/google";

const inter = Merriweather({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
  weight: "900",
});

type FeaturedProductProps = {
  product: any; 
};

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  const router = useRouter();

  const handleBuyNowClick = () => {
    router.push(`/swedeMenu`);
  };

  return (
    <div className="bg-[#FAEDCD] flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1400px] max-w-full mx-auto mt-20 mb-20 rounded-md shadow-lg border border-gray-200">
      <div className="w-full lg:w-1/2 text-center aspect-auto shadow-inner">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-auto rounded-md object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4">
      <h2
        className={
          inter.className + " text-3xl font-bold mb-2 text-gray-800"}>
            {product.title}
            </h2>      
          <p className="text-lg">{product.description}</p>
        <button
          onClick={handleBuyNowClick}
          className="bg-green-800 text-white w-full lg:w-auto px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
