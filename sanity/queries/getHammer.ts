import {client} from '../lib/client';


export async function getHammer() {
    const hammer = await client.fetch(`
           *[_type == "product"]{
          _id,
          title,
          body,
          type,
          productType,
          terpenes,
          ingredients,
          thc,
          cbd,
          "imageUrl": images[0].asset->url,
        }
    
    `)

    return hammer;
}

