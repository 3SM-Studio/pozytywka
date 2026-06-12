import type {SiteContent} from './types'

export const siteContent = {
  announcement: {
    message: 'Aktualny komunikat — do potwierdzenia',
    action: {label: 'Sprawdź szczegóły', href: '#kontakt'},
  },
  navigation: [
    {label: 'Zajęcia', href: '#zajecia'},
    {label: 'Scena', href: '#scena'},
    {label: 'Obozy', href: '#obozy'},
    {label: 'O Pozytywce', href: '#o-pozytywce'},
    {label: 'Kontakt', href: '#kontakt'},
  ],
  footer: {
    description:
      'Pracownia twórcza, która łączy teatr, muzykę, ruch, wydarzenia i artystyczne doświadczenia.',
    groups: [
      {
        title: 'Strona',
        links: [
          {label: 'Zajęcia', href: '#zajecia'},
          {label: 'Scena', href: '#scena'},
          {label: 'Obozy', href: '#obozy'},
          {label: 'O Pozytywce', href: '#o-pozytywce'},
        ],
      },
      {
        title: 'Informacje',
        links: [
          {label: 'Teatry', href: '#scena'},
          {label: 'Spektakle', href: '#wydarzenia'},
          {label: 'Wydarzenia', href: '#wydarzenia'},
          {label: 'FAQ', href: '#kontakt'},
          {label: 'Dokumenty', href: '#kontakt'},
        ],
      },
    ],
    contact: [
      'Adres — do potwierdzenia',
      'Telefon — do potwierdzenia',
      'E-mail — do potwierdzenia',
    ],
    social: [
      {label: 'Facebook', href: '#kontakt'},
      {label: 'Instagram', href: '#kontakt'},
    ],
    legal: [
      {label: 'Polityka prywatności', href: '#kontakt'},
      {label: 'Polityka cookies', href: '#kontakt'},
    ],
  },
} satisfies SiteContent
