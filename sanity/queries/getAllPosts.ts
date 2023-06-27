import {client} from '../lib/client';


// this is for the blog posts
export async function getAllPosts() {
  const posts = await client.fetch(`
      *[_type == "post"] {
          title,
          'slug': slug.current,
          'imageUrl': mainImage.asset->url,
          'categories': categories[]->title
      }
  `)
  
  return posts;
}
