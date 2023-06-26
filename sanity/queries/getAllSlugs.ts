import {client } from '../lib/client';

// this is for all the slugs
export async function getAllSlugs() {
    const slugs = await client.fetch(`
      *[_type == "post"] {
        'slug': slug.current
      }
    `);
  
    // Map the array of slugs to the correct format
    const paths = slugs.map((slug: any) => ({ params: slug }));
  
    return paths;
  }
  
