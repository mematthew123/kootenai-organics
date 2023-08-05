import React, { useEffect } from "react";
import { GetStaticProps } from "next";
import { client } from "../sanity/lib/client";
import { Wholesale } from "@/interfaces/wholesale.interfaces";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { logout } from "./api/login";

export const getStaticProps: GetStaticProps = async () => {
  const wholesaleProducts = await client.fetch(`
    *[_type == "wholeSaleProducts"]{
      _id,
      title,
      description,
      type,
      productType,
      terpenes,
      ingredients,
      thc,
      cbd,
      price,
      size,
      "imageUrl": images[0].asset->url,
      "slug": slug.current
    }
  `);

  return {
    props: {
      wholesaleProducts,
    },
    revalidate: 3,
  };
};

const WholeSaleStuff = ({
  wholesaleProducts,
}: {
  wholesaleProducts: Wholesale[];
}) => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("auth.token");

      if (!token) {
        router.replace(
          "/wholesale?message=Please login to view the product details."
        );
        return;
      }

      const res = await fetch("/api/validate-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
    };

    checkAuth();
  }, []);
  return (
    <>
      <Navbar />
      <Layout>
        {/* Hero section */}
        <div className=' my-20 flex flex-col items-end text-center text-gray-100  '>
          {/* <button
            onClick={logout}
            className='px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600'
          >
            Logout
          </button>{" "} */}
        </div>

        <div className='mt-10 lg:mt-20 container mx-auto px-4 py-10 md:py-20'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {wholesaleProducts.length > 0 ? (
              wholesaleProducts.map((product: Wholesale) => (
                <div
                  key={product._id}
                  className='border bg-[#f9f1e0]  border-gray-300 p-4 rounded-lg hover:shadow-lg transition duration-300 ease-in-out'
                >
                  <Image
                    src={product.imageUrl || "/images/placeholder.png"}
                    alt={product.title}
                    width={500}
                    height={500}
                    className='w-full h-64 object-cover object-center mb-4 rounded'
                  />
                  <h2 className='text-xl font-semibold mb-2 truncate'>
                    {product.title}
                  </h2>
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {product.description}
                  </p>

                  <Link href={`/wholesale/${product.slug}`}>
                    <button className='bg-[#696B33] text-gray-200 rounded-md p-2 hover:bg-green-800 transition duration-300 w-full'>
                      View Details
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <div className='text-center flex justify-center text-2xl text-gray-600'>
                <p>No products found</p>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WholeSaleStuff;
