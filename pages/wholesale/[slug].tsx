import React, { useEffect } from "react";
import { getWholesaleBySlug } from "@/sanity/queries/getWholesaleSlug";
import { getAllWholesaleSlugs } from "@/sanity/queries/getAllWholesaleSlugs";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import { Wholesale } from "@/interfaces/wholesale.interfaces";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PortableText } from "@portabletext/react";
import { logout } from "../api/login";

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  console.log(params); // Log the params to check the slug
  const product = await getWholesaleBySlug(params.slug);
  console.log(product); // Log the product to check the fetched data
  return {
    props: {
      product,
    },
    revalidate: 3, // ISR, re-generate the site every 3 seconds
  };
}

export async function getStaticPaths() {
  const products = await getAllWholesaleSlugs();
  const paths = products.map((product: { slug: any }) => ({
    params: { slug: product.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

const ProductPage: React.FC<{ product: Wholesale }> = ({ product }) => {
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

  // Handle undefined product when fallback is true
  if (!product) {
    return <div>Loading...</div>;
  }

  const formattedIngredients = Array.isArray(product.ingredients)
    ? product.ingredients.join(" | ")
    : product.ingredients;

  return (
    <>
      <Head>
        <title>{product.title} | Kootanei Organics</title>
        <meta
          name='description'
          content='Discover Kootanei Organics and our range of organic small batch cannabis products grown in the heart of western Montana. Shop for vapes, pre-rolls, edibles and more.'
        />
      </Head>
      <Navbar />
      <Layout>
        <div className='container mx-auto mt-10 lg:mt-20 px-6 py-8'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full md:w-1/2 px-4 mb-4 md:mb-0'>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className='shadow-lg rounded-lg overflow-hidden h-96'
              >
                {product.imageUrls.map((url, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={url}
                      alt={product.title}
                      className='h-full w-full object-cover'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='w-full md:w-1/2 px-4'>
              <h1 className=' text-[#423A30] text-4xl font-bold mb-4'>
                {product.title}
              </h1>
              <div className=' text-[#423A30] my-10 '>
                <PortableText value={product.body} />
              </div>
              <div className='grid grid-cols-2 gap-2'>
                <div>
                  <p className='font-bold text-md mb-2'>Type:</p>
                  <span className='inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2'>
                    {product.type}
                  </span>
                </div>
                <div>
                  <p className='font-bold text-md mb-2'>THC:</p>
                  <span className='inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2'>
                    {product.thc}%
                  </span>
                </div>
                <div>
                  <p className='font-bold text-md mb-2'>CBD:</p>
                  <span className='inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2'>
                    {product.cbd}%
                  </span>
                </div>
                <div>
                  <p className='font-bold text-md mb-2'>Ingredients:</p>
                  <span className='inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2'>
                    {formattedIngredients}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductPage;
