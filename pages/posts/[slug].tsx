import React from "react";
import { getPostBySlug } from "@/sanity/queries/getPostBySlug";
import { getAllSlugs } from "@/sanity/queries/getAllSlugs";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import { Poppins, Fraunces } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import styles from "@/components/content.module.css";

const bodyFont = Poppins({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-helvetica",
  weight: "200",
});

const titleFont = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-sanfrancisco",
  weight: "600",
});

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllSlugs();
  return {
    paths,
    fallback: false,
  };
}

type Props = {
  post: {
    title: string;
    description: string;
    imageUrl: string;
    alt: string;
    body: any[];
  };
};

const Post = ({ post }: Props) => {
  return (
    <>
      <Head>
        <title>{post.title} | Kootanei Organics</title>
        <meta
          name='description'
          content='Discover Kootanei Organics and our range of organic small batch cannabis products grown in the heart of western Montana. Shop for vapes, pre-rolls, edibles and more.'
        />
      </Head>
      <Navbar />
      <Layout>
        <div className='bg-[#E9EDC9] flex flex-col lg:flex-row items-center p-8 lg:p-16 space-y-8 lg:space-y-0 lg:space-x-8 lg:w-[1400px] max-w-full mx-auto mt-20 mb-20 rounded-md shadow-lg border border-gray-200'>
          <div
            key={post.title}
            className='p-8 lg:p-16 rounded-lg text-gray-800  max-w-7xl mx-auto'
          >
            <h2
              className={
                titleFont.className +
                " text-4xl text-center lg:text-6xl font-semi-bold lg:mb-8 mb-6"
              }
            >
              {post.title}
            </h2>
            <div className='flex justify-center items-center mx-auto mb-10 overflow-hidden rounded-lg'>
              <Image
                src={post.imageUrl}
                alt={post.alt}
                height={400}
                width={400}
                className=' w-full   aspect-auto  z-0 rounded-lg shadow-md'
              />
            </div>
            <div
              className={`${bodyFont.className} text-gray-600 text-lg max-w-prose leading-relaxed mx-auto mb-8 ${styles.portableText}`}
            >
              <PortableText value={post.body} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Post;
