import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "../../sanity/lib/client";
import { useRouter } from "next/router";
import { Product } from "@/interfaces/products.interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import { PortableText } from "@portabletext/react";

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  const product = await client.fetch(`
    *[_type == "product" && slug.current == "${slug}"]{
      _id,
      title,
      body,
      type,
      productType,
      terpenes,
      ingredients,
      thc,
      cbd,
      price,
      size,
      "imageUrls": images[].asset->url, // Fetch all images
    }
  `);

  if (!product[0]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: product[0] || null,
    },
    revalidate: 3,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await client.fetch(`
    *[_type == "product"]{
      slug
    }
  `);

  const paths = products.map((product: { slug: any }) => ({
    params: { slug: product.slug.current },
  }));

  return { paths, fallback: "blocking" };
};

const ProductPage: React.FC<{ product: Product; slug: string }> = ({
  product,
  slug,
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const formattedIngredients = Array.isArray(product.ingredients)
    ? product.ingredients.join(" | ")
    : product.ingredients;
  const formattedTerpenes = Array.isArray(product.terpenes)
    ? product.terpenes.join(" | ")
    : product.terpenes;

  return (
    <>
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
