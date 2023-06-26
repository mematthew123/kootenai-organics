import { client } from '../lib/client';


// this is for the product collections
export async function getAllCollections() {
    const collections = await client.fetch(`
      *[_type == "collections"] {
        title,
        description,
        'imageUrl': image.asset->url,
        'alt': image.alt
      }
    `)
  
    return collections;
  }