import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: 'À Propos',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre Principal',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Sous-titre',
            type: 'text',
        }),
        defineField({
            name: 'odysseyTitle',
            title: 'Titre Odyssée',
            type: 'string',
            initialValue: 'Notre Odyssée',
        }),
        defineField({
            name: 'odyssey',
            title: 'Les étapes de l\'odyssée',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Titre' },
                        { name: 'content', type: 'text', title: 'Contenu' },
                        { name: 'color', type: 'string', title: 'Couleur (primary/accent)' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'odysseyImage',
            title: 'Image Odyssée',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'valuesTitle',
            title: 'Titre Valeurs',
            type: 'string',
            initialValue: 'Notre Croyance',
        }),
        defineField({
            name: 'valuesSubtitle',
            title: 'Sous-titre Valeurs',
            type: 'text',
        }),
        defineField({
            name: 'values',
            title: 'Nos Valeurs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Titre' },
                        { name: 'desc', type: 'text', title: 'Description' },
                        { name: 'icon', type: 'string', title: 'Icône (Lucide)' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'founder',
            title: 'Fondateur',
            type: 'object',
            fields: [
                { name: 'name', type: 'string', title: 'Nom' },
                { name: 'role', type: 'string', title: 'Rôle' },
                { name: 'quote', type: 'text', title: 'Citation' },
                { name: 'bio', type: 'text', title: 'Bio' },
                { name: 'image', type: 'image', title: 'Photo', options: { hotspot: true } }
            ]
        }),
        defineField({
            name: 'ecosystemTitle',
            title: 'Titre Écosystème',
            type: 'string',
        }),
        defineField({
            name: 'ecosystem',
            title: 'Notre Écosystème',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Titre' },
                        { name: 'desc', type: 'text', title: 'Description' },
                        { name: 'icon', type: 'string', title: 'Icône (Lucide)' },
                        { name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tags' },
                        { name: 'highlight', type: 'boolean', title: 'Mise en avant' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'visionTitle',
            title: 'Titre Vision',
            type: 'string',
        }),
        defineField({
            name: 'visionContent',
            title: 'Contenu Vision',
            type: 'text',
        }),
        defineField({
            name: 'visionHorizon',
            title: 'Horizon (ex: 2030)',
            type: 'string',
        }),
    ],
})
