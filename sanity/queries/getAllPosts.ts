import {client} from '../lib/client';


// this is for the blog posts images

export async function getAllPosts() {
    const posts = await client.fetch(`
      *[_type == "post"] {
        title,
        'slug': slug.current,
        'imageUrl': mainImage.asset->url,
        'alt': mainImage.alt
      }
    `);
  
    return posts;
  }