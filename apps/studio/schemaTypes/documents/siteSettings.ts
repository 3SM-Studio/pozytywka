import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'isPublished', title: 'Published', type: 'boolean', initialValue: true}),
    defineField({name: 'seo', title: 'SEO', type: 'seo', validation: (rule) => rule.required()}),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'sourceMeta',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [{type: 'cta'}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactNotes',
      title: 'Contact notes',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
