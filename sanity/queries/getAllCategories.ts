import {client} from '../lib/client';

// this is for the blog post categories

export async function getAllCategories() {
    const categories = await client.fetch(`
        *[_type == "category"] {
        title,
        description
        }
    `)
    
    return categories;
    }