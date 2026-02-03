import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'step',
    title: 'Étapes de travail',
    type: 'document',
    fields: [
        defineField({
            name: 'orderId',
            title: 'ID d\'ordre (ex: 01)',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Titre de l\'étape',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Sous-titre (L\'Immersion...)',
            type: 'string',
        }),
        defineField({
            name: 'icon',
            title: 'Icône (Lucide)',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'details',
            title: 'Détails / Bullet points',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'deliverable',
            title: 'Livrable',
            type: 'string',
        }),
    ],
})
