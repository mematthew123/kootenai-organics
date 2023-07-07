import { defineField, defineType } from "sanity";

export default defineType({
  name: "featured",
  title: "Featured Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    // defineField({
    //   name: "textPosition",
    //   title: "Text Position",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: 'Left', value: 'left' },
    //       { title: 'Center', value: 'center' },
    //       { title: 'Right', value: 'right' },
    //     ],
    //     layout: 'radio', // display as radio buttons
    //   },
    // }),
  ],
  preview: {
    select: {
      title: "title",
      media: "featuredImagexw",
    },
  },
});
