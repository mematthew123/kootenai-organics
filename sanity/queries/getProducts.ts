export const getFeaturedProduct = `
*[_type == "product" && featured == true][0]{
  _id,
  title,
  description,
  type,
  productType,
  thc,
  cbd,
  price,
  size,
  "imageUrl": images[0].asset->url,
}

`;

type FeaturedProductProps = {
  product: any; // replace 'any' with the type of your product
};