import React from "react";
import { getWholesaleBySlug } from "@/sanity/queries/getWholesaleSlug";
import { getAllWholesaleSlugs } from "@/sanity/queries/getAllWholesaleSlugs";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import { Wholesale } from "@/interfaces/wholesale.interfaces";

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
  // Handle undefined product when fallback is true
  if (!product) {
    return <div>Loading...</div>;
  }

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
        {/* Add your custom product layout here, similar to how you did for posts */}
        <h1>{product.title}</h1>
        <Image
          src={product.imageUrl || "/images/placeholder.png"}
          alt={product.title}
          width={500}
          height={500}
        />
        <p>{product.description}</p>
        {/* etc. */}
      </Layout>
    </>
  );
};

export default ProductPage;
