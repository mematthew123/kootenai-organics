import React from "react";
import { getPostBySlug } from "@/sanity/queries/getPostBySlug";
import { getAllSlugs } from "@/sanity/queries/getAllSlugs";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import { Poppins, Fraunces } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

const bodyFont =Poppins({
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
        <title>
          {post.title} | Kootanei Organics
        </title>
        <meta
          name="description"
          content="Discover Kootanei Organics and our range of organic small batch cannabis products grown in the heart of western Montana. Shop for vapes, pre-rolls, edibles and more."
        />
      </Head>
      <Navbar />
      <Layout>
        <div className="my-20 lg:mt-52 p-4 mx-auto max-w-screen-lg">
          <h1 className={titleFont.className + " text-6xl font-semibold mb-6 text-center text-gray-800"}>
            {post.title}
          </h1>
          <Image
            src={post.imageUrl}
            alt={post.alt}
            className="w-full h-64 object-cover mb-6 rounded-md shadow-lg aspect-auto"
            width={500}
            height={500}
          />
          <div className={bodyFont.className + " text-gray-600 text-lg leading-relaxed"}>
            <PortableText value={post.body} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Post;
