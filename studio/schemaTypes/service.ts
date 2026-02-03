import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Services',
    type: 'document',
    fields: [
        defineField({
            name: 'icon',
            title: 'Icône (Nom Lucide ou Image)',
            type: 'string',
            description: 'Ex: MessageSquare, BookOpen, Video, PenTool, Image, Users, FileText',
        }),
        defineField({
            name: 'badge',
            title: 'Badge (ex: Cœur de métier)',
            type: 'string',
        }),
        defineField({
            name: 'orderId',
            title: 'ID d\'ordre (ex: 01)',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Titre du service',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description courte',
            type: 'text',
        }),
        defineField({
            name: 'items',
            title: 'Liste des prestations',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'cta',
            title: 'Texte Bouton (CTA)',
            type: 'string',
            initialValue: 'En savoir plus',
        }),
        defineField({
            name: 'link',
            title: 'Lien',
            type: 'string',
        }),
        defineField({
            name: 'highlight',
            title: 'Mettre en avant (Highlight)',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'color',
            title: 'Couleur (ID)',
            type: 'string',
            options: {
                list: [
                    { title: 'Jaune (Primary)', value: 'bg-primary' },
                    { title: 'Bleu (Accent)', value: 'bg-accent' },
                    { title: 'Blanc', value: 'bg-white' },
                ],
            },
        }),
        defineField({
            name: 'extra',
            title: 'Info supplémentaire (Format...)',
            type: 'string',
        }),
    ],
})
