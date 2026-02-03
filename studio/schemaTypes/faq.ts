import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
        }),
        defineField({
            name: 'answer',
            title: 'Réponse',
            type: 'text',
        }),
        defineField({
            name: 'orderId',
            title: 'Ordre',
            type: 'number',
        }),
    ],
})
