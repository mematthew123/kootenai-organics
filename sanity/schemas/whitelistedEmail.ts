import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'whitelistedEmail',
    title: 'Whitelisted Email',
    type: 'document',
    fields: [
      defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'license',
      title: 'License',
      type: 'string',
    }),
    ],

    preview: {
      select: {
        title: 'email',
      },
    },
    })  
  