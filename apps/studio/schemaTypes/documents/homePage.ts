import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
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
      name: 'heroTitle',
      title: 'Hero title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'primaryAction', title: 'Primary action', type: 'cta'}),
    defineField({name: 'secondaryAction', title: 'Secondary action', type: 'cta'}),
    defineField({
      name: 'featuredActivities',
      title: 'Featured activities',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'activity'}]}],
    }),
    defineField({
      name: 'featuredGroups',
      title: 'Featured groups',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'group'}]}],
    }),
    defineField({
      name: 'featuredShows',
      title: 'Featured shows',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'show'}]}],
    }),
    defineField({
      name: 'featuredCamps',
      title: 'Featured camps',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'camp'}]}],
    }),
  ],
})
