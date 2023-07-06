import { client } from '../lib/client';

// this is for our main content
export async function getMainContent() {
    const mainContent = await client.fetch(`
      *[_type == "content"] {
        title,
        body,
        'imageUrl': mainImage.asset->url,
      }
    `);
    
    console.log(mainContent);  // log the data here
    return mainContent;
  }
  
  