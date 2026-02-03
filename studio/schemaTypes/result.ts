import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'result',
    title: 'Résultats / Victoires',
    type: 'document',
    fields: [
        defineField({
            name: 'value',
            title: 'Valeur (ex: +450%)',
            type: 'string',
        }),
        defineField({
            name: 'label',
            title: 'Label (ex: Notoriété Digitale)',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'orderId',
            title: 'Ordre',
            type: 'number',
        }),
    ],
})
