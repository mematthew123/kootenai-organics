/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'
import { colorInput } from '@sanity/color-input'
import { googleMapsInput } from '@sanity/google-maps-input'



// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
plugins: [
    googleMapsInput({
      apiKey: (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '')
      
 }),
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    unsplashImageAsset(),
    simplerColorInput(),
    colorInput()

    

  ],
})
