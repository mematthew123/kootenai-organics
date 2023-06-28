import {client} from '../lib/client';


const getWhyUs = async () => {
    const whyUs = await client.fetch(`
        *[_type == "whyUs"] {
        title,
        description,
        }
    `)

    return whyUs;
    }


export default getWhyUs;