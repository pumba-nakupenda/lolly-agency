import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Témoignages',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom du client',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Rôle / Entreprise',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Message',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'rating',
            title: 'Note (1-5)',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5),
        }),
    ],
})
