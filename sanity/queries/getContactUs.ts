import {client} from '../lib/client'

export async function getContactUs() {
    const contactUs = await client.fetch(`
      *[_type == "contactUs"] {
        title,
        'topImageUrl': topImage.asset->url,
        'topImageAlt': topImage.alt,
        body,
        days,
        hours,
        phone,
        email,
        address,
        'bottomImageUrl': bottomImage.asset->url,
        'bottomImageAlt': bottomImage.alt
      }
    `);

    return contactUs;
}
