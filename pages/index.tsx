import Link from "next/link";
import WhyUs from "@/components/WhyUs";
import { client } from "@/sanity/lib/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Navbar from "@/components/Navbar";
import { Fraunces } from "next/font/google";
import MenuBoard from "@/components/MenuBoard";
import Testimonials from "@/components/Testimonials";
import Content from "@/components/Content";
import Featured from "@/components/Featured";
import Head from "next/head";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import Section from "@/animations/section";
import SectionRight from "@/animations/sectionRight";
import SectionUp from "@/animations/sectionUp";
import { Poppins } from "next/font/google";
import Hero from "@/components/Hero";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-helvetica",
  weight: "200",
});

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

export const getStaticProps: GetStaticProps = async () => {
  const [featuredData, heroData, mainContentData] = await Promise.all([
    client.fetch(`
    *[_type == "featured"][0]{
      title,
      body,
      "featuredImage": featuredImage.asset->url,
      "alt": featuredImage.alt,
      textPosition
    }
    `),
    client.fetch(`
    *[_type == "hero"][0]{
      title,
      description,
      "heroImage": heroImage.asset->url,
      "alt": heroImage.alt,
      textPosition,
          textColor

    }
    `),
    client.fetch(`
    *[_type == "mainContent"][0]{
      title,
      body,
      "mainImage": mainImage.asset->url,
      "alt": mainImage.alt,
      textPosition
    }
    `),
  ]);

  return {
    props: {
      featuredData,
      heroData,
      mainContentData, // pass the fetched main content data to your component
    },
    revalidate: 3, // ISR, re-generate the site every 60 seconds if there's a request
  };
};

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  featuredData, // add the featured product prop here
  heroData, // add the fetched hero data here
  mainContentData, // add the fetched main content data here
}) => {
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
      <div>
        <Navbar />
        <Layout>
          <Banner />
          {/* Hero section */}
          {heroData ? (
            <Hero heroData={heroData} />
          ) : (
            <div className='  max-w-[1240px] space-y-12 text-center h-[100vh] m-auto flex flex-col justify-center items-center p-4 rounded-lg'>
              <h1
                className={
                  " font-ElCaminoTextureCaps  text-6xl tracking-widest font-bold text-[#423A30]"
                }
              >
                Kootenai Organics
              </h1>
              <div className=' flex flex-col justify-center items-center text-center sm:items-start space-y-6'>
                <Image
                  src='/logo.svg'
                  alt='logo'
                  width={200}
                  height={200}
                  className='absolute left-1/2 transform -translate-x-2/4'
                />
              </div>

              <p
                className={
                  poppins.className + " text-xl font-light text-gray-600"
                }
              >
                Organic small batch cannabis grown in the heart of western
                Montana
              </p>
              <Link href='/menu'>
                <p
                  className={
                    poppins.className +
                    "inline-block px-10 py-3 text-base font-medium text-gray-50 bg-[#696B33] rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                  }
                >
                  Shop Now
                </p>
              </Link>
            </div>
          )}
          {/* Featured section */}
          <Section>
            <Featured featuredData={featuredData} />
          </Section>
          <SectionRight>
            <MenuBoard specials={[]} />
          </SectionRight>
          <SectionUp>
            <Content mainContentData={mainContentData} />
          </SectionUp>
          <WhyUs />
          <Testimonials />
        </Layout>
      </div>
    </>
  );
};

export default Home;
