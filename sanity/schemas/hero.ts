import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Image",
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
      name: "heroImage",
      title: "Hero Image",
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
    defineField({
      name: "textPosition",
      title: "Text Position",
      type: "string",
      options: {
        list: [
          { title: 'Top Left', value: 'topLeft' },
          { title: 'Top Right', value: 'topRight'},
          { title: 'Center', value: 'center' },
          { title: 'Bottom Left', value: 'bottomLeft'},
          { title: 'Bottom Right', value: 'bottomRight' },

        ],
        layout: 'radio', // display as radio buttons
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "heroImage",
    },
  },
});
