// import React, { useEffect, useState } from "react";
// import { Product } from "@/interfaces/products.interfaces";
// import { client } from "../sanity/lib/client";
// import ProductCard from "./ProductCard";

// const WholeSaleList: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsData = await client.fetch(`
//         *[_type == "wholeSaleProducts"]{
//           _id,
//           title,
//           description,
//           type,
//           terpenes,
//           ingredients,
//           thc,
//           cbd,
//           price,
//           size,
//           "imageUrl": images[0].asset->url,
//         }
//       `);
//       setProducts(productsData);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen text-center py-20'>
//       <h1 className='text-4xl font-bold mb-4'>Wholesale customers</h1>
//       <p className='text-lg mb-4'>
//         Please use the link below to schedule a meeting to discuss pricing and
//         availability.
//       </p>
//       <div className=' mt-6 py-2 items-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
//         {products.map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WholeSaleList;
