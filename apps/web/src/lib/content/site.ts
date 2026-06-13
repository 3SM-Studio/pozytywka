import type {SiteContent} from './types'
import {homeAnchors} from './routes'

export const siteContent = {
  announcement: {
    message: 'Program zajęć i wydarzeń jest w przygotowaniu',
    action: {id: 'announcement-contact', label: 'Sprawdź szczegóły', href: '/kontakt'},
  },
  navigation: [
    {id: 'nav-classes', label: 'Zajęcia', href: homeAnchors.classes},
    {id: 'nav-stage', label: 'Scena', href: homeAnchors.stage},
    {id: 'nav-camp', label: 'Obozy', href: homeAnchors.camp},
    {id: 'nav-about', label: 'O Pozytywce', href: homeAnchors.about},
    {id: 'nav-contact', label: 'Kontakt', href: '/kontakt'},
  ],
  footer: {
    description:
      'Pracownia twórcza, która łączy teatr, muzykę, ruch, wydarzenia i artystyczne doświadczenia.',
    groups: [
      {
        id: 'footer-page',
        title: 'Strona',
        links: [
          {id: 'footer-page-classes', label: 'Zajęcia', href: homeAnchors.classes},
          {id: 'footer-page-stage', label: 'Scena', href: homeAnchors.stage},
          {id: 'footer-page-camp', label: 'Obozy', href: homeAnchors.camp},
          {id: 'footer-page-about', label: 'O Pozytywce', href: homeAnchors.about},
        ],
      },
      {
        id: 'footer-info',
        title: 'Informacje',
        links: [
          {id: 'footer-info-theatre', label: 'Teatry', href: homeAnchors.stage},
          {id: 'footer-info-performances', label: 'Spektakle', href: homeAnchors.events},
          {id: 'footer-info-events', label: 'Wydarzenia', href: homeAnchors.events},
          {id: 'footer-info-faq', label: 'FAQ', href: '/kontakt'},
          {id: 'footer-info-documents', label: 'Dokumenty', href: '/kontakt'},
        ],
      },
    ],
    contact: ['Dane kontaktowe zostaną uzupełnione przed uruchomieniem zapisów.'],
    social: [
      {id: 'footer-social-facebook', label: 'Facebook', href: '/kontakt'},
      {id: 'footer-social-instagram', label: 'Instagram', href: '/kontakt'},
    ],
    legal: [
      {id: 'footer-legal-privacy', label: 'Polityka prywatności', href: '/kontakt'},
      {id: 'footer-legal-cookies', label: 'Polityka cookies', href: '/kontakt'},
    ],
  },
} satisfies SiteContent
