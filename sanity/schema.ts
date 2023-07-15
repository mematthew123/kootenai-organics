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
import content from './schemas/mainContent'
import aboutUsPage from './schemas/aboutUsPage'
import contactUsPage from './schemas/contactUsPage'
import testimonials from './schemas/testimonials'
import whyUs from './schemas/whyUs'
import mainContent from './schemas/mainContent'
import wholesaleProducts from './schemas/wholesaleProducts'
import whitelistedEmail from './schemas/whitelistedEmail'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner,hero,featured,menu,mainContent,whyUs, testimonials, post, category, blockContent,aboutUsPage,contactUsPage,wholesaleProducts,whitelistedEmail],
}
