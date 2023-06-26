import {client} from '../lib/client';


// this is for the about us page content 

export async function getAboutUs() {
    const aboutUs = await client.fetch(`
      *[_type == "aboutUs"] {
        title,
        'topImageUrl': topImage.asset->url,
        'topImageAlt': topImage.alt,
        body,
        'bottomImageUrl': bottomImage.asset->url,
        'bottomImageAlt': bottomImage.alt
      }
    `);
  
    return aboutUs;
  }
  