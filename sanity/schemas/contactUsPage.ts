import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactUs',
  title: 'Contact Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'topImage',
      title: 'Top Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      }),
    // defineField({
    //   name: 'bottomImage',
    //   title: 'Bottom Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     {
    //       name: 'alt',
    //       type: 'string',
    //       title: 'Alternative Text',
    //     }
    //   ]
    // }),
    defineField({
      name: 'days',
      title: 'Days',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    // defineField({
    //   name: 'address',
    //   title: 'Address',
    //   type: 'string',
    // }),
  ]
})
