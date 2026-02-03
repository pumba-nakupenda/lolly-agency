import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Hero Accueil',
    type: 'document',
    fields: [
        defineField({
            name: 'badge',
            title: 'Badge (ex: Agence de Conseil...)',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Titre principal',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Sous-titre / Description',
            type: 'text',
        }),
        defineField({
            name: 'cta1Label',
            title: 'Label bouton 1',
            type: 'string',
        }),
        defineField({
            name: 'cta1Link',
            title: 'Lien bouton 1',
            type: 'string',
        }),
        defineField({
            name: 'cta2Label',
            title: 'Label bouton 2',
            type: 'string',
        }),
        defineField({
            name: 'cta2Link',
            title: 'Lien bouton 2',
            type: 'string',
        }),
    ],
})
