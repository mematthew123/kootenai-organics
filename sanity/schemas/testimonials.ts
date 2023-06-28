import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonials',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        // defineField({
        //     name: 'title',
        //     title: 'Title',
        //     type: 'string',
        // }),
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
        }),
        // defineField({
        //     name: 'image',
        //     title: 'Image',
        //     type: 'image',
        // }),
    ],
})


