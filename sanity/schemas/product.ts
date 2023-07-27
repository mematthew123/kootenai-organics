import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Velvet Hammer Products",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    // defineField({
    //   name: "featured",
    //   title: "Featured Product",
    //   type: "boolean",
    //   description: "Mark this checkbox if the product is a featured product"
    // }),
 defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          {title:"Hybrid",value: "hybrid"},
          {title:"Indica",value: "indica"},
          {title:"Sativa",value: "sativa"},
        ]
      }

    }),
    defineField({
      name: "productType",
      title: "Product Type",
      // we want to restrict the options to a set of predefined values
      type: "string",
      options: {
        list: [
          { title: "Chocolates", value: "chocolates" },
          { title: "Gummies", value: "gummies" },
          { title: "Tinctures", value: "tinctures" },
        ]
      }
    }),
    defineField({
      name: "thc",
      title: "THC",
      type: "number",
    }),
    defineField({
      name: "cbd",
      title: "CBD",
      type: "number",
    }),

 defineField({
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    }),
    
  ],

  preview: {
    select: {
      title: "title",
      media: "images[0]",
    },
  },
});
