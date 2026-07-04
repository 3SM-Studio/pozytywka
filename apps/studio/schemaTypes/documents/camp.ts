import {defineField, defineType} from 'sanity'

export const camp = defineType({
  name: 'camp',
  title: 'Camp',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'isPublished', title: 'Published', type: 'boolean', initialValue: false}),
    defineField({name: 'seo', title: 'SEO', type: 'seo', validation: (rule) => rule.required()}),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'sourceMeta',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'season',
      title: 'Season',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({name: 'icon', title: 'Icon', type: 'string'}),
          ],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Enquiry', value: 'enquiry'},
          {title: 'Open', value: 'open'},
          {title: 'Waitlist', value: 'waitlist'},
          {title: 'Closed', value: 'closed'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'primaryAction', title: 'Primary action', type: 'cta'}),
    defineField({name: 'secondaryAction', title: 'Secondary action', type: 'cta'}),
  ],
})
