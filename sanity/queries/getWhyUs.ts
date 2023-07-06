import {client} from '../lib/client';
export async function getWhyUs() {
    const whyUs = await client.fetch(`
        *[_type == "whyUs"] {
        title,
        description,
        }
    `)

    console.log(whyUs); // Add this line

    return whyUs;
}
