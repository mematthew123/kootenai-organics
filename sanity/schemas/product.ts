import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
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
    defineField({
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      description: "Mark this checkbox if the product is a featured product"
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
    }),
    defineField({
      name: "productType",
      title: "Product Type",
      type: "string",
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
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "string",
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
    defineField({
      name: "vendor",
      title: "Vendor",
      type: "reference",
      to: [{ type: "vendor" }], 
    }),
    defineField({
      name: "collections",
      title: "Collections",
      type: "array",
      of: [{ type: "reference", to: [{ type: "collections" }] }], 
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "images[0]",
    },
  },
});
