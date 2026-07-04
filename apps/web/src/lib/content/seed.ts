import type {
  AboutPageContent,
  ActivityDocument,
  CampDocument,
  ContactPageContent,
  GroupDocument,
  LegalPageDocument,
  PersonDocument,
  ShowDocument,
  TestimonialDocument,
} from './types'

const fallbackSource = {
  sourceStatus: 'draft',
  sourceNote:
    'Treść demonstracyjna do potwierdzenia z klientem przed publikacją jako informacja szczegółowa.',
} as const

export const fallbackActivities: ActivityDocument[] = [
  {
    ...fallbackSource,
    title: 'Teatr i praca sceniczna',
    slug: 'teatr-i-praca-sceniczna',
    isPublished: true,
    seoTitle: 'Zajęcia teatralne | Pozytywka',
    seoDescription:
      'Zajęcia teatralne, improwizacja, praca z tekstem i wspólne projekty sceniczne.',
    category: 'teatr',
    categoryLabel: 'Teatr',
    summary: 'Improwizacja, tekst, obecność sceniczna i wspólne przygotowanie pokazów.',
    description:
      'Zajęcia dla osób, które chcą ćwiczyć wyobraźnię, głos, ruch i współpracę na scenie. Szczegółowy dobór grup odbywa się przy zapisie.',
    ageRange: {kind: 'descriptive', label: 'Dzieci i młodzież, grupa dobierana przy zapisie'},
    status: 'enquiry',
    image: {
      alt: 'Uczestnicy podczas próby teatralnej',
      label: 'Próba teatralna',
    },
    tags: ['teatr', 'improwizacja', 'scena'],
  },
  {
    ...fallbackSource,
    title: 'Wokal, rytm i muzyka',
    slug: 'wokal-rytm-muzyka',
    isPublished: true,
    seoTitle: 'Zajęcia muzyczne | Pozytywka',
    seoDescription: 'Zajęcia wokalne, rytmiczne i muzyczne rozwijane w pracy zespołowej.',
    category: 'muzyka',
    categoryLabel: 'Muzyka',
    summary: 'Śpiew, rytm, praca z głosem i wspólne działania muzyczne.',
    description:
      'Muzyczna ścieżka dla uczestników zainteresowanych śpiewem, rytmem i pracą zespołową. Poziom i forma zajęć powinny zostać potwierdzone w kontakcie.',
    ageRange: {kind: 'descriptive', label: 'Dzieci i młodzież, zależnie od naboru'},
    status: 'enquiry',
    image: {
      alt: 'Zajęcia wokalne i rytmiczne',
      label: 'Wokal i rytm',
    },
    tags: ['wokal', 'rytm', 'muzyka'],
  },
  {
    ...fallbackSource,
    title: 'Taniec, balet i acrodance',
    slug: 'taniec-balet-acrodance',
    isPublished: true,
    seoTitle: 'Zajęcia taneczne | Pozytywka',
    seoDescription: 'Taniec, balet, acrodance i ruch sceniczny jako część pracy artystycznej.',
    category: 'taniec',
    categoryLabel: 'Taniec i ruch',
    summary: 'Ruch sceniczny, taniec, ekspresja i świadoma praca z ciałem.',
    description:
      'Zajęcia ruchowe wspierające koordynację, ekspresję i gotowość sceniczną. Szczegółowe grupy wiekowe i poziomy wymagają potwierdzenia.',
    ageRange: {kind: 'descriptive', label: 'Dzieci i młodzież, poziom dobierany indywidualnie'},
    status: 'enquiry',
    image: {
      alt: 'Zajęcia ruchu scenicznego',
      label: 'Ruch i taniec',
    },
    tags: ['taniec', 'balet', 'acrodance', 'ruch sceniczny'],
  },
  {
    ...fallbackSource,
    title: 'Animacje i warsztaty twórcze',
    slug: 'animacje-warsztaty-tworcze',
    isPublished: true,
    seoTitle: 'Animacje i warsztaty | Pozytywka',
    seoDescription: 'Animacje, warsztaty i działania twórcze dla grup i wydarzeń.',
    category: 'animacje',
    categoryLabel: 'Animacje',
    summary: 'Twórcze działania, integracja, ruch i zadania artystyczne dla grup.',
    description:
      'Propozycja dla osób i grup szukających krótszych działań twórczych, animacji lub warsztatów. Zakres ustalany jest pod konkretną potrzebę.',
    ageRange: {kind: 'descriptive', label: 'Zakres dobierany do grupy'},
    status: 'enquiry',
    image: {
      alt: 'Warsztaty twórcze dla grupy',
      label: 'Animacje i warsztaty',
    },
    tags: ['animacje', 'warsztaty', 'integracja'],
  },
]

export const fallbackGroups: GroupDocument[] = [
  {
    ...fallbackSource,
    title: 'Grupy wokalno-taneczne',
    slug: 'grupy-wokalno-taneczne',
    isPublished: true,
    seoTitle: 'Grupy wokalno-taneczne | Pozytywka',
    seoDescription: 'Grupy łączące śpiew, ruch, rytm i pracę zespołową.',
    category: 'wokalno-taneczna',
    categoryLabel: 'Wokal i taniec',
    summary: 'Śpiew, choreografia i praca zespołowa w rytmie sceny.',
    description:
      'Grupy dla uczestników, którzy chcą łączyć muzykę z ruchem i regularną pracą sceniczną. Szczegóły naboru wymagają potwierdzenia.',
    ageRange: {kind: 'descriptive', label: 'Dzieci i młodzież, według aktualnego naboru'},
    status: 'enquiry',
    relatedActivitySlugs: ['wokal-rytm-muzyka', 'taniec-balet-acrodance'],
  },
  {
    ...fallbackSource,
    title: 'Grupy teatralne',
    slug: 'grupy-teatralne',
    isPublished: true,
    seoTitle: 'Grupy teatralne | Pozytywka',
    seoDescription: 'Regularne grupy teatralne pracujące nad sceną, tekstem i improwizacją.',
    category: 'teatralna',
    categoryLabel: 'Teatr',
    summary: 'Improwizacja, tekst, relacje na scenie i budowanie przedstawień.',
    description:
      'Stała ścieżka dla osób zainteresowanych teatrem i wspólną pracą nad sceniczną formą. Podział na grupy zależy od naboru.',
    ageRange: {kind: 'descriptive', label: 'Dzieci i młodzież, grupa dobierana przy zapisie'},
    status: 'enquiry',
    relatedActivitySlugs: ['teatr-i-praca-sceniczna'],
  },
  {
    ...fallbackSource,
    title: 'Grupy musicalowe',
    slug: 'grupy-musicalowe',
    isPublished: true,
    seoTitle: 'Grupy musicalowe | Pozytywka',
    seoDescription: 'Grupy musicalowe łączące teatr, śpiew, ruch i pracę nad projektem scenicznym.',
    category: 'musicalowa',
    categoryLabel: 'Musical',
    summary: 'Teatr, śpiew i ruch spotykają się w pracy nad wspólną sceną.',
    description:
      'Kierunek dla uczestników, którzy chcą łączyć kilka dziedzin i pracować zespołowo nad formą sceniczną. Konkretne projekty trzeba potwierdzić z Pozytywką.',
    ageRange: {kind: 'descriptive', label: 'Dzieci i młodzież, według aktualnego projektu'},
    status: 'enquiry',
    relatedActivitySlugs: ['teatr-i-praca-sceniczna', 'wokal-rytm-muzyka'],
  },
  {
    ...fallbackSource,
    title: 'Grupy baletowe, taneczne i acrodance',
    slug: 'grupy-baletowe-taneczne-acrodance',
    isPublished: true,
    seoTitle: 'Grupy taneczne i acrodance | Pozytywka',
    seoDescription: 'Grupy ruchowe, taneczne, baletowe i acrodance w Pozytywce.',
    category: 'taniec',
    categoryLabel: 'Taniec',
    summary: 'Ruch, taniec, balet, acrodance i przygotowanie ciała do sceny.',
    description:
      'Regularne grupy ruchowe wspierające technikę, ekspresję i pracę sceniczną. Poziomy i terminy wymagają potwierdzenia.',
    ageRange: {kind: 'descriptive', label: 'Dzieci i młodzież, według poziomu'},
    status: 'enquiry',
    relatedActivitySlugs: ['taniec-balet-acrodance'],
  },
]

export const fallbackShows: ShowDocument[] = [
  {
    ...fallbackSource,
    title: 'Projekty musicalowe młodzieży',
    slug: 'projekty-musicalowe-mlodziezy',
    isPublished: true,
    seoTitle: 'Projekty musicalowe | Pozytywka',
    seoDescription: 'Młodzieżowe projekty musicalowe i sceniczne Pozytywki.',
    type: 'musical',
    typeLabel: 'Musical',
    summary: 'Praca nad formą, w której spotykają się teatr, śpiew i ruch.',
    description:
      'Pozytywka prowadzi działania sceniczne, w których młodzież może pracować nad muzyką, ruchem i rolą w zespole. Tytuły i terminy projektów wymagają potwierdzenia z klientem.',
    status: 'enquiry',
  },
  {
    ...fallbackSource,
    title: 'Spektakle teatralne i etiudy',
    slug: 'spektakle-teatralne-i-etiudy',
    isPublished: true,
    seoTitle: 'Spektakle teatralne | Pozytywka',
    seoDescription: 'Spektakle, etiudy i działania teatralne tworzone w Pozytywce.',
    type: 'spektakl',
    typeLabel: 'Spektakl',
    summary: 'Efekty regularnej pracy teatralnej przenoszone na scenę.',
    description:
      'Sekcja dla spektakli, etiud i pokazów wynikających z pracy grup teatralnych. Publiczne terminy i tytuły powinny zostać uzupełnione po potwierdzeniu źródeł.',
    status: 'enquiry',
  },
  {
    ...fallbackSource,
    title: 'Koncerty i prezentacje zespołów',
    slug: 'koncerty-i-prezentacje-zespolow',
    isPublished: true,
    seoTitle: 'Koncerty i prezentacje | Pozytywka',
    seoDescription: 'Koncerty, prezentacje i sceniczne spotkania grup Pozytywki.',
    type: 'koncert',
    typeLabel: 'Koncert / prezentacja',
    summary: 'Muzyczne i ruchowe prezentacje pracy zespołów.',
    description:
      'Miejsce na koncerty, prezentacje i wydarzenia, które pokazują pracę grup muzycznych, tanecznych i wokalno-tanecznych.',
    status: 'enquiry',
  },
]

export const fallbackCamps: CampDocument[] = [
  {
    ...fallbackSource,
    title: 'Pozytywne Lato',
    slug: 'pozytywne-lato',
    isPublished: true,
    seoTitle: 'Pozytywne Lato | Obozy Pozytywki',
    seoDescription: 'Artystyczno-rekreacyjne obozy i wyjazdy Pozytywne Lato.',
    season: 'Lato',
    summary: 'Artystyczno-rekreacyjny wyjazd z ruchem, muzyką, teatrem i integracją.',
    description:
      'Pozytywne Lato to główna oferta obozowa Pozytywki: czas na twórcze działania, pracę w grupie, ruch, głos, zabawę i odpoczynek. Szczegółowy termin, miejsce i koszt wymagają potwierdzenia z klientem.',
    status: 'enquiry',
    details: [
      {id: 'camp-art', icon: '+', label: 'Teatr, muzyka, taniec i działania twórcze'},
      {id: 'camp-community', icon: '+', label: 'Integracja i praca w grupie'},
      {id: 'camp-enquiry', icon: '+', label: 'Zapytania przez formularz kontaktowy'},
    ],
    primaryAction: {id: 'camp-primary', label: 'Zapytaj o obóz', href: '/kontakt'},
    secondaryAction: {id: 'camp-secondary', label: 'Zobacz kontakt', href: '/kontakt'},
  },
]

export const fallbackPeople: PersonDocument[] = [
  {
    ...fallbackSource,
    title: 'Iwona Pilarz',
    slug: 'iwona-pilarz',
    isPublished: true,
    seoTitle: 'Iwona Pilarz | Pozytywka',
    seoDescription: 'Informacja o Iwonie Pilarz i podejściu Pozytywki.',
    name: 'Iwona Pilarz',
    role: 'Osoba prowadząca Pozytywkę',
    summary: 'W centrum Pozytywki jest uważna praca z grupą i sceną.',
    description:
      'Iwona Pilarz jest wskazana w materiałach projektu jako kluczowa osoba związana z Pozytywką. Szczegółowy opis funkcji, biogramu i dorobku powinien zostać potwierdzony z klientem.',
    portrait: {
      alt: 'Portret Iwony Pilarz',
      label: 'Iwona Pilarz',
    },
  },
]

export const fallbackTestimonials: TestimonialDocument[] = []

export const fallbackLegalPages: LegalPageDocument[] = [
  {
    ...fallbackSource,
    title: 'Polityka prywatności',
    slug: 'polityka-prywatnosci',
    isPublished: true,
    seoTitle: 'Polityka prywatności | Pozytywka',
    seoDescription: 'Informacje o przetwarzaniu danych w formularzu kontaktowym Pozytywki.',
    body: [
      'Formularz kontaktowy zbiera wyłącznie dane potrzebne do odpowiedzi na zapytanie.',
      'Nie należy przesyłać numeru PESEL, adresu zamieszkania, szkoły ani pełnych danych dziecka.',
    ],
  },
]

export const fallbackAboutPage = {
  eyebrow: 'O Pozytywce',
  title: 'Pracownia twórcza z energią sceny i troską o grupę.',
  description:
    'Pozytywka łączy teatr, muzykę, taniec, animacje, regularne grupy, projekty sceniczne i obozy. Demo opisuje kierunek strony bez dopisywania niepotwierdzonych faktów.',
  pillars: [
    {
      id: 'about-stage',
      icon: '01',
      title: 'Scena jako doświadczenie',
      description: 'Uczestnicy pracują nad głosem, ruchem, tekstem, rytmem i obecnością w grupie.',
    },
    {
      id: 'about-community',
      icon: '02',
      title: 'Wspólnota lokalna',
      description:
        'Strona pokazuje Pozytywkę jako miejsce regularnych spotkań, projektów i wspólnych wydarzeń.',
    },
    {
      id: 'about-camps',
      icon: '03',
      title: 'Obozy jako ważna oferta',
      description:
        'Pozytywne Lato jest widoczne jako osobna ścieżka, nie jako dopisek do kontaktu.',
    },
  ],
  featuredPerson: fallbackPeople[0],
} satisfies AboutPageContent

export const fallbackContactPage = {
  eyebrow: 'Kontakt i zapisy',
  title: 'Napisz w sprawie zajęć, grup, spektakli albo Pozytywnego Lata.',
  description:
    'Formularz zbiera tylko dane potrzebne do odpowiedzi. Nie prosi o PESEL, adres domowy, szkołę ani pełne dane dziecka.',
  contactMethods: [
    {id: 'contact-email', label: 'Formularz kontaktowy', href: '/kontakt'},
    {id: 'contact-classes', label: 'Zajęcia', href: '/zajecia'},
    {id: 'contact-camps', label: 'Obozy', href: '/obozy'},
  ],
  notes: [
    'Wiadomość może dotyczyć zapisów, wolnych miejsc, poziomu grupy, obozu albo współpracy.',
    'Terminy, ceny i szczegółowe harmonogramy powinny zostać potwierdzone bezpośrednio z Pozytywką.',
  ],
} satisfies ContactPageContent
