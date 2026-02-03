import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre du projet',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Catégorie',
            type: 'string',
            options: {
                list: [
                    { title: 'Branding', value: 'Branding' },
                    { title: 'Design Graphique', value: 'Design Graphique' },
                    { title: 'Production Vidéo', value: 'Production Vidéo' },
                    { title: 'Social Media', value: 'Social Media' },
                    { title: 'Formation', value: 'Formation' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mainImage',
            title: 'Image principale',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'client',
            title: 'Client',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Date de publication',
            type: 'datetime',
        }),
        defineField({
            name: 'gallery',
            title: 'Galerie d\'images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        }),
        defineField({
            name: 'videoUrl',
            title: 'URL Vidéo (YouTube/Vimeo)',
            type: 'url',
        }),
        defineField({
            name: 'hasReport',
            title: 'A un rapport/proposition ?',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'reportUrl',
            title: 'URL du rapport (ou PDF)',
            type: 'string',
        }),
        defineField({
            name: 'reportLabel',
            title: 'Label du rapport',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'client',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `pour ${author}` }
        },
    },
})
