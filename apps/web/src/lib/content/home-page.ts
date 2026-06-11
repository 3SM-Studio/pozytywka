import type {HomePageContent} from './types'

export const homePageContent = {
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
  hero: {
    title: 'Miejsce, w którym twórczość wychodzi na scenę.',
    description:
      'Teatr, muzyka, ruch, spektakle i artystyczne przygody dla dzieci, młodzieży i dorosłych.',
    primaryAction: {label: 'Zobacz zajęcia', href: '#zajecia'},
    secondaryAction: {label: 'Poznaj Pozytywkę', href: '#o-pozytywce'},
    mediaLabel: 'Zdjęcie z próby teatralnej — do podmiany',
  },
  quickLinks: [
    {
      eyebrow: 'Szukam zajęć',
      label: 'Odkryj zajęcia',
      href: '#zajecia',
      icon: '✦',
      description:
        'Poznaj aktualne możliwości i znajdź kierunek odpowiadający zainteresowaniom uczestnika.',
    },
    {
      eyebrow: 'Chcę zobaczyć spektakle',
      label: 'Repertuar',
      href: '#wydarzenia',
      icon: '🎭',
      description: 'Przeżyj wyjątkowe emocje i zobacz efekty naszej artystycznej pracy na scenie.',
    },
    {
      eyebrow: 'Szukam obozu',
      label: 'Sprawdź ofertę',
      href: '#obozy',
      icon: '☀',
      description: 'Kreatywne wakacje pełne sztuki, integracji i niezapomnianych przeżyć.',
    },
  ],
  stage: {
    eyebrow: 'Scena Pozytywki',
    title: 'Twórczość, która naprawdę trafia na scenę.',
    description:
      'Pozytywka łączy regularną pracę artystyczną z przygotowywaniem wspólnych projektów, spektakli i wydarzeń scenicznych.',
    mediaLabel: 'Zdjęcie teatralnej próby — do podmiany',
    highlights: [
      {
        type: 'Teatr',
        title: 'Nazwa grupy — do potwierdzenia',
        description: 'Opis grupy — do potwierdzenia.',
        action: {label: 'Poznaj teatry', href: '#zajecia'},
      },
      {
        type: 'Spektakl / musical',
        title: 'Nazwa produkcji — do potwierdzenia',
        description: 'Opis produkcji — do potwierdzenia.',
        action: {label: 'Zobacz spektakle', href: '#wydarzenia'},
      },
    ],
  },
  creativeAreas: {
    title: 'Różne drogi. Jedna przestrzeń do tworzenia.',
    description:
      'Pozytywka łączy różne dziedziny pracy artystycznej, pozwalając uczestnikom odkrywać własny sposób wyrażania siebie.',
    items: [
      {
        icon: '🎭',
        title: 'Teatr',
        description:
          'Gra aktorska, improwizacja, praca z tekstem i wspólne tworzenie przedstawień.',
      },
      {
        icon: '♪',
        title: 'Muzyka',
        description: 'Śpiew, rytm, głos i działania muzyczne rozwijane podczas wspólnej pracy.',
      },
      {
        icon: '↗',
        title: 'Taniec i ruch',
        description: 'Ruch sceniczny, taniec i świadoma praca z ciałem.',
      },
      {
        icon: '☀',
        title: 'Obozy i twórcze działania',
        description: 'Artystyczne wyjazdy, warsztaty i doświadczenia budujące relacje.',
      },
    ],
  },
  classesPreview: {
    eyebrow: 'Zapisy',
    title: 'Znajdź zajęcia dla siebie.',
    description: 'Treść sekcji — do potwierdzenia.',
    action: {label: 'Zobacz wszystkie zajęcia', href: '#kontakt'},
    items: [
      {
        category: 'Kategoria — do potwierdzenia',
        title: 'Nazwa zajęć — do potwierdzenia',
        description: 'Opis — do potwierdzenia.',
        meta: 'Grupa wiekowa — do potwierdzenia • Termin — do potwierdzenia • Lokalizacja — do potwierdzenia',
        status: 'Status zapisów — do potwierdzenia',
        imageLabel: 'Zdjęcie zajęć — do podmiany',
        action: {label: 'Zobacz szczegóły', href: '#kontakt'},
      },
      {
        category: 'Kategoria — do potwierdzenia',
        title: 'Nazwa zajęć — do potwierdzenia',
        description: 'Opis — do potwierdzenia.',
        meta: 'Grupa wiekowa — do potwierdzenia • Termin — do potwierdzenia • Lokalizacja — do potwierdzenia',
        status: 'Status zapisów — do potwierdzenia',
        imageLabel: 'Zdjęcie zajęć — do podmiany',
        action: {label: 'Zobacz szczegóły', href: '#kontakt'},
      },
      {
        category: 'Kategoria — do potwierdzenia',
        title: 'Nazwa zajęć — do potwierdzenia',
        description: 'Opis — do potwierdzenia.',
        meta: 'Grupa wiekowa — do potwierdzenia • Termin — do potwierdzenia • Lokalizacja — do potwierdzenia',
        status: 'Status zapisów — do potwierdzenia',
        imageLabel: 'Zdjęcie zajęć — do podmiany',
        action: {label: 'Zobacz szczegóły', href: '#kontakt'},
      },
    ],
  },
  eventsPreview: {
    eyebrow: 'Wydarzenia',
    title: 'Spotkajmy się na żywo.',
    description:
      'Spektakle, koncerty, warsztaty i inne wydarzenia tworzone przez społeczność Pozytywki.',
    action: {label: 'Zobacz wszystkie wydarzenia', href: '#kontakt'},
    items: [
      {
        date: 'Data — do potwierdzenia',
        type: 'Typ wydarzenia — do potwierdzenia',
        title: 'Nazwa wydarzenia — do potwierdzenia',
        description: 'Opis — do potwierdzenia.',
        place: 'Miejsce — do potwierdzenia',
        time: 'Godzina — do potwierdzenia',
        action: {label: 'Zobacz wydarzenie', href: '#kontakt'},
      },
      {
        date: 'Data — do potwierdzenia',
        type: 'Typ wydarzenia — do potwierdzenia',
        title: 'Nazwa wydarzenia — do potwierdzenia',
        description: 'Opis — do potwierdzenia.',
        place: 'Miejsce — do potwierdzenia',
        time: 'Godzina — do potwierdzenia',
        action: {label: 'Zobacz wydarzenie', href: '#kontakt'},
      },
      {
        date: 'Data — do potwierdzenia',
        type: 'Typ wydarzenia — do potwierdzenia',
        title: 'Nazwa wydarzenia — do potwierdzenia',
        description: 'Opis — do potwierdzenia.',
        place: 'Miejsce — do potwierdzenia',
        time: 'Godzina — do potwierdzenia',
        action: {label: 'Zobacz wydarzenie', href: '#kontakt'},
      },
    ],
  },
  camp: {
    eyebrow: 'Obozy',
    title: 'Pozytywne Lato',
    description:
      'Artystyczne wyjazdy, wspólne działania i przestrzeń do budowania relacji oraz niezapomnianych doświadczeń.',
    mediaLabel: 'Zdjęcie ruchu artystycznego — do podmiany',
    detailsHeading: 'Szczegóły aktualnej edycji — do potwierdzenia',
    details: [
      {icon: '▣', label: 'Termin — do potwierdzenia'},
      {icon: '⌖', label: 'Miejsce — do potwierdzenia'},
      {icon: '◎', label: 'Grupa wiekowa — do potwierdzenia'},
    ],
    primaryAction: {label: 'Poznaj obóz', href: '#obozy'},
    secondaryAction: {label: 'Zobacz zapisy', href: '#kontakt'},
  },
  team: {
    eyebrow: 'Ludzie Pozytywki',
    title: 'Za każdą twórczą przestrzenią stoją ludzie.',
    description:
      'Pozytywkę tworzą osoby, które wspierają uczestników w odkrywaniu własnych możliwości, wspólnej pracy i wychodzeniu na scenę.',
    featured: {
      name: 'Iwona Pilarz',
      role: 'Rola — do potwierdzenia',
      description: 'Biografia — do potwierdzenia.',
      portraitLabel: 'Zdjęcie Iwony — do podmiany',
    },
    action: {label: 'Poznaj Pozytywkę', href: '#o-pozytywce'},
    members: [
      {
        name: 'Imię i nazwisko — do potwierdzenia',
        role: 'Rola — do potwierdzenia',
        description: 'Obszar działania — do potwierdzenia',
        portraitLabel: 'Portret — do podmiany',
      },
      {
        name: 'Imię i nazwisko — do potwierdzenia',
        role: 'Rola — do potwierdzenia',
        description: 'Obszar działania — do potwierdzenia',
        portraitLabel: 'Portret — do podmiany',
      },
      {
        name: 'Imię i nazwisko — do potwierdzenia',
        role: 'Rola — do potwierdzenia',
        description: 'Obszar działania — do potwierdzenia',
        portraitLabel: 'Portret — do podmiany',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Opinie',
    title: 'Pozytywkę najlepiej opisują ludzie, którzy ją tworzą.',
    description: 'Prawdziwe opinie uczestników i rodziców — do uzupełnienia.',
    items: [
      {
        quote:
          'Opinia — do potwierdzenia. Cudowne miejsce, pełne profesjonalizmu i ciepła. Moje dziecko uwielbia te zajęcia.',
        author: 'Imię — do potwierdzenia',
        caption: 'Rodzic / uczestnik / partner — do potwierdzenia',
      },
      {
        quote:
          'Opinia — do potwierdzenia. Scena to mój drugi dom. Świetni instruktorzy i wspaniała atmosfera na próbach.',
        author: 'Imię — do potwierdzenia',
        caption: 'Rodzic / uczestnik / partner — do potwierdzenia',
      },
      {
        quote:
          'Opinia — do potwierdzenia. Najlepsze obozy letnie na jakich byłam. Mnóstwo kreatywnych działań.',
        author: 'Imię — do potwierdzenia',
        caption: 'Rodzic / uczestnik / partner — do potwierdzenia',
      },
    ],
  },
  finalCta: {
    title: 'Znajdź swoje miejsce w Pozytywce.',
    description: 'Treść — do potwierdzenia.',
    meta: 'Zajęcia / wydarzenia / obozy — do potwierdzenia',
    primaryAction: {label: 'Zobacz zapisy', href: '#zajecia'},
    secondaryAction: {label: 'Skontaktuj się', href: '#kontakt'},
  },
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
} satisfies HomePageContent
