import {client } from '../lib/client';
export async function getAllWholesaleSlugs() {
  const slugs = await client.fetch(`
    *[_type == "wholeSaleProducts"] {
      'slug': slug.current
    }
  `);
  
  return slugs;
}