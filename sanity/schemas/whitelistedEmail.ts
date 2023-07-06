import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'whitelistedEmail',
    title: 'Whitelisted Email',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'email',
      },
    },
    })  
  