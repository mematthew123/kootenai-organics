import React from "react";
import { getFeatured } from "@/sanity/queries/getFeatured";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { client } from "@/sanity/lib/client";
import Featured from "@/components/Featured";
import Reviews from "@/components/Reviews";
import Testimonials from "@/components/Testimonials";

export const getStaticProps: GetStaticProps = async () => {
  const featuredData = await client.fetch(`
  *[_type == "featured"][0]{
    title,
    description,
    "featuredImage": featuredImage.asset->url,
    "alt": featuredImage.alt,
    textPosition
  }
`);

  return {
    props: {
      featuredData,
    },
    revalidate: 60, // ISR, re-generate the site every 60 seconds if there's a request
  };
};

const testPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  featuredData,
}) => {
  return (
    <div>
      <Featured featuredData={featuredData} />
      <Testimonials />
      <Reviews />
    </div>
  );
};

export default testPage;
