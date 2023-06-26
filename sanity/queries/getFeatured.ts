export const getFeatured = `
*[_type == "featured"][0]{
    _id,
    title,
    description,
    "imageUrl": featuredImage.asset->url,
    textPosition,
    }
`;

