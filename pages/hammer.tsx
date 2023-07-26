import React, { useState } from "react";
import { GetStaticProps } from "next";
import { client } from "../sanity/lib/client";
import { InferGetStaticPropsType } from "next";
import { Product } from "@/interfaces/products.interfaces";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";

export const getStaticProps: GetStaticProps = async () => {
  const products = await client.fetch(`
    *[_type == "product"]{
      _id,
      title,
      description,
      type,
      productType,
      thc,
      cbd,
      price,
      size,
      "imageUrl": images[0].asset->url,
    }
  `);

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};

const Hammer: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  products,
}) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProductType, setSelectedProductType] = useState("All");

  const handleProductTypeFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedProductType(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };

  const filteredProducts = products.filter(
    (product: { type: string; productType: string }) =>
      (selectedFilter === "All" ? true : product.type === selectedFilter) &&
      (selectedProductType === "All"
        ? true
        : product.productType === selectedProductType)
  );

  return (
    <>
      <Navbar />
      <Layout>
        <div className='mt-10 lg:mt-20 container mx-auto px-4 py-10 md:py-20'>
          <div className='flex flex-col md:flex-row justify-end mb-4 space-y-2 md:space-y-0 md:space-x-4'>
            <div className='w-full md:w-auto'>
              <select
                value={selectedFilter}
                onChange={handleFilterChange}
                className='w-full appearance-none border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600'
              >
                <option value='All'>All</option>
                <option value='sativa'>Sativa</option>
                <option value='indica'>Indica</option>
                <option value='hybrid'>Hybrid</option>
              </select>
            </div>
            <div className='w-full md:w-auto'>
              <select
                value={selectedProductType}
                onChange={handleProductTypeFilterChange}
                className='w-full appearance-none border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600'
              >
                <option value='All'>All</option>
                <option value='chocolates'>Chocolates</option>
                <option value='gummies'>Gummies</option>
                <option value='tintures'>Tintures</option>
              </select>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product: Product) => (
                <div
                  key={product._id}
                  className='border bg-gray-50 border-gray-300 p-4 rounded-lg hover:shadow-lg transition duration-300 ease-in-out'
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

                  <Link href={`/products/${product._id}`}>
                    <button className='bg-blue-600 text-white rounded-md p-2 hover:bg-blue-800 transition duration-300 w-full'>
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

export default Hammer;
