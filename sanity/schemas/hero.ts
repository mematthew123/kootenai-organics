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
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
      options: {
        colorList: [
          '#FF6900',
          { hex: '#FCB900' },
          { r: 123, g: 220, b: 181 },
          { r: 0, g: 208, b: 132, a: 0.5 },
          { h: 203, s: 95, l: 77, a: 1 },
          { h: 202, s: 95, l: 46, a: 0.5 },
          { h: 345, s: 43, v: 97 },
          { h: 344, s: 91, v: 92, a: 0.5 },
        ]
      }
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "heroImage",
    },
  },
});
