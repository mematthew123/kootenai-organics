/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Link from "next/link";
import { getAllPosts } from "@/sanity/queries/getAllPosts";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { Fraunces, Poppins } from "next/font/google";
import { getAllCategories } from "@/sanity/queries/getAllCategories";
import Head from "next/head";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-popins",
  weight: "200",
});

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

export async function getStaticProps() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();
  return {
    props: {
      posts,
      categories,
    },
    revalidate: 3, // In seconds
  };
}

type Props = {
  posts: {
    title: string;
    description: string;
    imageUrl: string;
    alt: string;
    slug: string;
    _id: string;
    categories: string[];
    body: {
      children: {
        text: string;
      }[];
    };
  }[];
  categories: {
    title: string;
    _id: string;
  }[];
};

const News = ({ posts, categories }: Props) => {
  const [currentFilter, setCurrentFilter] = useState<string | null>(null);

  const handleFilter = (category: string) => {
    if (currentFilter === category) {
      setCurrentFilter(null);
    } else {
      setCurrentFilter(category);
    }
  };

  return (
    <>
      <Head>
        <title>
          Kootanei Organics | Organic small batch cannabis in western Montana
        </title>
        <meta
          name='description'
          content='Discover Kootanei Organics and our range of organic small batch cannabis products grown in the heart of western Montana. Shop for vapes, pre-rolls, edibles and more.'
        />
      </Head>
      <Navbar />
      <Layout>
        <div className='bg-[#f9f1e0]   flex flex-col  items-center p-4 lg:p-10 space-y-4 lg:space-y-10 lg:space-x-4 lg:w-[1400px] max-w-full mx-auto my-20 rounded-md shadow-lg border border-gray-200'>
          <div className='flex flex-col items-center justify-center p-6 lg:p-12rounded-lg text-[#423A30]  max-w-7xl mx-auto '>
            <h2
              className={
                " font-ElCaminoTextureCaps text-4xl text-center lg:text-7xl font-semi-bold lg:mb-6 mb-4"
              }
            >
              Latest News
            </h2>
            <div
              className={
                poppins.className +
                "mx-auto max-w-prose text-gray-600 text-center text-base lg:max-w-none"
              }
            >
              {" "}
              <p className=' font-ElCaminoTextureCaps'>
                Stay up to date with the latest news from Kootanei Organics.
                From tips on growing your own cannabis to the latest product
                releases, we'll keep you in the loop.
              </p>
            </div>
          </div>
          <div className='flex justify-center my-8  space-x-4'>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => handleFilter(category.title)}
                className={`py-2 px-4 text-sm font-medium rounded-md ${
                  currentFilter === category.title
                    ? "bg-green-700 text-white border border-green-700 hover:bg-green-800"
                    : "text-gray-600 bg-white border border-gray-300 hover:bg-gray-100"
                } transition-colors duration-300 ease-in-out shadow-md`}
              >
                {category.title}
              </button>
            ))}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
            {posts
              .filter(
                (post) =>
                  currentFilter === null ||
                  (post.categories && post.categories.includes(currentFilter))
              )
              .map((post) => (
                <Link href={`/posts/${post.slug}`} key={post._id}>
                  <div className=' mt-10 rounded-lg shadow-md overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer'>
                    <Image
                      src={post.imageUrl}
                      alt={post.alt}
                      className='w-full h-64 object-cover'
                      width={500}
                      height={500}
                    />
                    <div className='p-6 bg-white'>
                      <h2 className=' font-ElCaminoTextureCaps text-2xl font-semibold mb-2 text-gray-900'>
                        {post.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default News;
