import type {SiteContent} from './types'
import {homeAnchors} from './routes'

export const siteContent = {
  announcement: {
    message: 'Program zajęć i wydarzeń jest w przygotowaniu',
    action: {label: 'Sprawdź szczegóły', href: '/kontakt'},
  },
  navigation: [
    {label: 'Zajęcia', href: homeAnchors.classes},
    {label: 'Scena', href: homeAnchors.stage},
    {label: 'Obozy', href: homeAnchors.camp},
    {label: 'O Pozytywce', href: homeAnchors.about},
    {label: 'Kontakt', href: '/kontakt'},
  ],
  footer: {
    description:
      'Pracownia twórcza, która łączy teatr, muzykę, ruch, wydarzenia i artystyczne doświadczenia.',
    groups: [
      {
        title: 'Strona',
        links: [
          {label: 'Zajęcia', href: homeAnchors.classes},
          {label: 'Scena', href: homeAnchors.stage},
          {label: 'Obozy', href: homeAnchors.camp},
          {label: 'O Pozytywce', href: homeAnchors.about},
        ],
      },
      {
        title: 'Informacje',
        links: [
          {label: 'Teatry', href: homeAnchors.stage},
          {label: 'Spektakle', href: homeAnchors.events},
          {label: 'Wydarzenia', href: homeAnchors.events},
          {label: 'FAQ', href: '/kontakt'},
          {label: 'Dokumenty', href: '/kontakt'},
        ],
      },
    ],
    contact: ['Dane kontaktowe zostaną uzupełnione przed uruchomieniem zapisów.'],
    social: [
      {label: 'Facebook', href: '/kontakt'},
      {label: 'Instagram', href: '/kontakt'},
    ],
    legal: [
      {label: 'Polityka prywatności', href: '/kontakt'},
      {label: 'Polityka cookies', href: '/kontakt'},
    ],
  },
} satisfies SiteContent
