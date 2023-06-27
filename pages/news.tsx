import React, { useState } from "react";
import Link from "next/link";
import { getAllPosts } from "@/sanity/queries/getAllPosts";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { Fraunces, Poppins } from "next/font/google";
import { getAllCategories } from "@/sanity/queries/getAllCategories";

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
    revalidate: 60, // Re-generate the post every minute
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
      <Navbar />
      <Layout>
      <div className="bg-[#E9EDC9] flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1400px] max-w-full mx-auto mt-20 mb-20 rounded-md shadow-lg border border-gray-200">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            News
          </h1>
          <p className="text-gray-500 text-center my-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin
            eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet.
            Duis dapibus diam vel metus tempus vulputate.
          </p>
        </div>
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => handleFilter(category.title)}
                className={`py-2 px-4 text-sm font-medium rounded-md ${
                  currentFilter === category.title
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
                } transition-colors duration-300 ease-in-out shadow-md`}
              >
                {category.title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {posts
              .filter(
                (post) =>
                  currentFilter === null ||
                  (post.categories && post.categories.includes(currentFilter))
              )
              .map((post) => (
                <Link href={`/posts/${post.slug}`} key={post._id}>
                  <div className="rounded-lg shadow-md overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                    <img
                      src={post.imageUrl}
                      alt={post.alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6 bg-white">
                      <h2 className="text-2xl font-semibold mb-2 text-gray-900">
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
