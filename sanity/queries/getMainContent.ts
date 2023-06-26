import { client } from '../lib/client';

// this is for our main content
export const getMainContent = `
*[_type == "content"][0]{
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    }
`;

