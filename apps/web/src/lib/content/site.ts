import type {SiteContent} from './types'
import {homeAnchors} from './routes'

export const siteContent = {
  announcement: {
    message: 'Aktualny komunikat — do potwierdzenia',
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
    contact: [
      'Adres — do potwierdzenia',
      'Telefon — do potwierdzenia',
      'E-mail — do potwierdzenia',
    ],
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
