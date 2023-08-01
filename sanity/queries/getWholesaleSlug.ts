import { client } from '../lib/client';

export async function getWholesaleBySlug(slug: any) {
  const wholesale = await client.fetch(`
      *[_type == "wholeSaleProducts" && slug.current == $slug] {
      title,
      'slug': slug.current,
      'imageUrl': images[0].asset->url, // this would get the first image URL
      description,
      type,
      productType,
      thc,
      cbd,
      price,
      size,
      'imageUrls': images[].asset->url, // this would get an array of all image URLs
      terpenes,
      ingredients
      }[0]
  `, {slug});
  
  return wholesale;
}
