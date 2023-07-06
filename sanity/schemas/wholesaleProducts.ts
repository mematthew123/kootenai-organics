import { defineField, defineType } from "sanity";

export default defineType({
  name: "wholeSaleProducts",
  title: "Whole Sale Products",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "terpenes",
      title: "Terpenes",
      type: "array",
      of: [{ type: "string" }],
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
  ],
});
