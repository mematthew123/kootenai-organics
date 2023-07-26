import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "../../sanity/lib/client";
import { useRouter } from "next/router";
import { Product } from "@/interfaces/products.interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "@/components/Navbar";

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const product = await client.fetch(`
    *[_type == "product" && _id == "${id}"]{
      _id,
      title,
      description,
      type,
      productType,
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
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await client.fetch(`
    *[_type == "product"]{
      _id
    }
  `);

  const paths = products.map((product: { _id: any }) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: "blocking" };
};

const ProductPage: React.FC<{ product: Product }> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className='container mx-auto mt-10 lg:mt-20  px-6 py-8'>
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
            <h1 className='text-4xl font-bold mb-4'>{product.title}</h1>
            <p className='text-gray-600 mb-4'>{product.description}</p>
            <p className='text-gray-600'>
              <strong>Type:</strong> {product.type}
            </p>
            <p className='text-gray-600'>
              <strong>THC:</strong> {product.thc}%
            </p>
            <p className='text-gray-600'>
              <strong>CBD:</strong> {product.cbd}%
            </p>
            <p className='text-gray-600'>
              <strong>Price:</strong> ${product.price}
            </p>
            <p className='text-gray-600'>
              <strong>Size:</strong> {product.size}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
