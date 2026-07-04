import {defineField, defineType} from 'sanity'

export const sourceMeta = defineType({
  name: 'sourceMeta',
  title: 'Source metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'sourceStatus',
      title: 'Source status',
      type: 'string',
      options: {
        list: [
          {title: 'Client confirmed', value: 'client-confirmed'},
          {title: 'Public source', value: 'public-source'},
          {title: 'Draft', value: 'draft'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sourceNote',
      title: 'Source note',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().min(5),
    }),
  ],
})
