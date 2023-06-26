import {client} from '../lib/client';

// this is for individual blog posts

export async function getPostBySlug(slug: any) {
    const post = await client.fetch(`
        *[_type == "post" && slug.current == $slug] {
        title,
        'slug': slug.current,
        'imageUrl': mainImage.asset->url,
        'alt': mainImage.alt,
        categories[]->{
            title
        },
        body
        }[0]
    `, {slug});
    
    return post;
    }

    

    