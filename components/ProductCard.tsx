import React from "react";
import { Product } from "@/interfaces/products.interfaces";
import Link from "next/link";
import Image from "next/image";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  // Create formatted strings for ingredients and terpenes
  const formattedIngredients = Array.isArray(product.ingredients)
    ? product.ingredients.join(" | ")
    : product.ingredients;
  const formattedTerpenes = Array.isArray(product.terpenes)
    ? product.terpenes.join(" | ")
    : product.terpenes;

  return (
    <div className='flex flex-wrap justify-center'>
      <div className='m-4 bg-white overflow-hidden shadow rounded-lg'>
        <Image
          src={product.imageUrl || "/images/placeholder.png"}
          alt={product.title}
          width={500}
          height={500}
          className='w-full h-56 object-cover'
        />

        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{product.title}</div>
          <p className='text-gray-700 text-base'>{product.description}</p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            Price: ${product.price}
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            THC: {product.thc}%
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            CBD: {product.cbd}%
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            Size: {product.size}
          </span>
        </div>

        <div className='px-6 pt-1 pb-4'>
          <p className='font-bold text-md mb-2'>Terpenes:</p>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            {formattedTerpenes}
          </span>
        </div>

        <div className='px-6 pt-1 pb-4'>
          <p className='font-bold text-md mb-2'>Ingredients:</p>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            {formattedIngredients}
          </span>
        </div>

        <div className='px-6 pt-1 pb-4'>
          <Link href={`/wholesale/shop/${product.slug}`}>
            <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              View Product
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
