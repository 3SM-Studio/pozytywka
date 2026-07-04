import {defineField, defineType} from 'sanity'

export const group = defineType({
  name: 'group',
  title: 'Group',
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
          {title: 'Wokalno-taneczna', value: 'wokalno-taneczna'},
          {title: 'Teatralna', value: 'teatralna'},
          {title: 'Musicalowa', value: 'musicalowa'},
          {title: 'Taniec', value: 'taniec'},
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
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Open', value: 'open'},
          {title: 'Waitlist', value: 'waitlist'},
          {title: 'Enquiry', value: 'enquiry'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'relatedActivities',
      title: 'Related activities',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'activity'}]}],
    }),
  ],
})
