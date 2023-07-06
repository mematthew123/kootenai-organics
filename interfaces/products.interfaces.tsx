export interface Product {
  _id: string;
  title: string;
  description: string;
  type: string;
  terpenes: string[];
  thc: string;
  cbd: string;
  price: any;
  size: string;
  ingredients: string[];
  imageUrls: any[]; // Array of image URLs
  imageUrl?: string;
  images?: Array<{ asset: { _ref: string } }>;

}
