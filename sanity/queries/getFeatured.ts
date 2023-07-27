export const getFeatured = `
*[_type == "featured"][0]{
    _id,
    title,
    body,
    "imageUrl": featuredImage.asset->url,
    }
`;

