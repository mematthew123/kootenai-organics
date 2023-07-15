import {client} from '../lib/client';
export async function getWhyUs() {
  const result = await client.fetch(`*[_type == "whyUs"]{
    title,
    description,
    features[]{
      title,
      description
    }
  }`)

  return result[0]?.features // returns the features array of the first "whyUs" document, if it exists
}
  
  
