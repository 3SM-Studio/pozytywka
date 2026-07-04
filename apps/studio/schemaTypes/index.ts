import {activity} from './documents/activity'
import {camp} from './documents/camp'
import {group} from './documents/group'
import {homePage} from './documents/homePage'
import {legalPage} from './documents/legalPage'
import {person} from './documents/person'
import {show} from './documents/show'
import {siteSettings} from './documents/siteSettings'
import {testimonial} from './documents/testimonial'
import {cta} from './objects/cta'
import {imageWithAlt} from './objects/imageWithAlt'
import {seo} from './objects/seo'
import {sourceMeta} from './objects/sourceMeta'

export const schemaTypes = [
  seo,
  sourceMeta,
  cta,
  imageWithAlt,
  siteSettings,
  homePage,
  activity,
  group,
  show,
  camp,
  person,
  testimonial,
  legalPage,
]
