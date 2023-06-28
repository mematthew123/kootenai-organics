import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import product from './schemas/product'
import collections from './schemas/collections'
import vendor from './schemas/vendor'
import hero from './schemas/hero'
import menu from './schemas/menu'
import featured from './schemas/featured'
import banner from './schemas/banner'
import content from './schemas/content'
import aboutUsPage from './schemas/aboutUsPage'
import contactUsPage from './schemas/contactUsPage'
import testimonials from './schemas/testimonials'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner,featured,menu,content, testimonials, post, category, blockContent,aboutUsPage,contactUsPage],
}
