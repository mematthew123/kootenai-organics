import { defineField, defineType } from "sanity";

export default defineType({
    name: "whyUs",
    title: "Why Us",
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
            name: "features",
            title: "Features",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string",
                        },
                        {
                            name: "description",
                            title: "Description",
                            type: "text",
                        },
                    ]
                }
            ],
        }),
    ],
});
