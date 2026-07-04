import {homeAnchors} from './routes'
import type {SiteContent} from './types'

export const siteContent = {
  announcement: {
    message: 'Zapytaj o zajęcia, zespoły i Pozytywne Lato',
    action: {id: 'announcement-contact', label: 'Napisz do nas', href: '/kontakt'},
  },
  navigation: [
    {id: 'nav-start', label: 'Start', href: '/'},
    {id: 'nav-classes', label: 'Zajęcia', href: homeAnchors.classes},
    {id: 'nav-groups', label: 'Zespoły', href: homeAnchors.groups},
    {id: 'nav-stage', label: 'Spektakle', href: homeAnchors.stage},
    {id: 'nav-camp', label: 'Obozy', href: homeAnchors.camp},
    {id: 'nav-about', label: 'O Pozytywce', href: homeAnchors.about},
    {id: 'nav-contact', label: 'Kontakt', href: '/kontakt'},
  ],
  footer: {
    description:
      'Pracownia twórcza, która łączy teatr, muzykę, taniec, animacje, projekty sceniczne, zespoły i obozy.',
    groups: [
      {
        id: 'footer-page',
        title: 'Strona',
        links: [
          {id: 'footer-page-classes', label: 'Zajęcia', href: homeAnchors.classes},
          {id: 'footer-page-groups', label: 'Zespoły', href: homeAnchors.groups},
          {id: 'footer-page-stage', label: 'Spektakle', href: homeAnchors.stage},
          {id: 'footer-page-camp', label: 'Obozy', href: homeAnchors.camp},
          {id: 'footer-page-about', label: 'O Pozytywce', href: homeAnchors.about},
        ],
      },
      {
        id: 'footer-info',
        title: 'Informacje',
        links: [
          {id: 'footer-info-theatre', label: 'Teatr', href: homeAnchors.classes},
          {id: 'footer-info-performances', label: 'Spektakle', href: homeAnchors.events},
          {id: 'footer-info-camps', label: 'Pozytywne Lato', href: homeAnchors.camp},
          {id: 'footer-info-contact', label: 'Zapisy', href: '/kontakt'},
        ],
      },
    ],
    contact: [
      'Skorzystaj z formularza kontaktowego.',
      'Nie wysyłaj PESEL, adresu ani pełnych danych dziecka.',
    ],
    social: [],
    legal: [
      {id: 'footer-privacy', label: 'Polityka prywatności', href: '/polityka-prywatnosci'},
      {id: 'footer-cookies', label: 'Polityka cookies', href: '/polityka-cookies'},
    ],
  },
} satisfies SiteContent
