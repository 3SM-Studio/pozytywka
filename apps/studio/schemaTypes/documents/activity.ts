import {defineField, defineType} from 'sanity'

export const activity = defineType({
  name: 'activity',
  title: 'Activity',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Teatr', value: 'teatr'},
          {title: 'Muzyka', value: 'muzyka'},
          {title: 'Taniec', value: 'taniec'},
          {title: 'Animacje', value: 'animacje'},
          {title: 'Warsztaty', value: 'warsztaty'},
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
    defineField({
      name: 'ageRange',
      title: 'Age range',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'scheduleSummary', title: 'Schedule summary', type: 'string'}),
    defineField({name: 'locationSummary', title: 'Location summary', type: 'string'}),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Open', value: 'open'},
          {title: 'Waitlist', value: 'waitlist'},
          {title: 'Closed', value: 'closed'},
          {title: 'Enquiry', value: 'enquiry'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'image', title: 'Image', type: 'imageWithAlt'}),
    defineField({name: 'tags', title: 'Tags', type: 'array', of: [{type: 'string'}]}),
  ],
})
