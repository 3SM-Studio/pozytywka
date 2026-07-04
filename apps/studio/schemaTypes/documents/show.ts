import {defineField, defineType} from 'sanity'

export const show = defineType({
  name: 'show',
  title: 'Show',
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
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Spektakl', value: 'spektakl'},
          {title: 'Musical', value: 'musical'},
          {title: 'Koncert', value: 'koncert'},
          {title: 'Projekt sceniczny', value: 'projekt-sceniczny'},
        ],
      },
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
    defineField({name: 'startsAt', title: 'Start date and time', type: 'datetime'}),
    defineField({name: 'dateLabel', title: 'Public date label', type: 'string'}),
    defineField({name: 'timeLabel', title: 'Public time label', type: 'string'}),
    defineField({name: 'locationSummary', title: 'Location summary', type: 'string'}),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Scheduled', value: 'scheduled'},
          {title: 'Past', value: 'past'},
          {title: 'Enquiry', value: 'enquiry'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
