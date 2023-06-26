export interface Product {
  _id: string;
  title: string;
  description: string;
  type: string;
  productType: string;
  thc: string;
  cbd: string;
  price: any;
  size: string;
  imageUrls: any[]; // Array of image URLs
  imageUrl?: string;
  images?: Array<{ asset: { _ref: string } }>;

}
