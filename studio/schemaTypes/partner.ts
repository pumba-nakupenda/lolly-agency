import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'partner',
    title: 'Partenaires / Clients',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom du partenaire',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'scale',
            title: 'Échelle du logo (ex: 1.0)',
            type: 'number',
            initialValue: 1.0,
        }),
    ],
})
