import type {HomePageContent} from './types'
import {getActivityHref, getEventHref} from './routes'

export const homePageContent = {
  hero: {
    title: 'Miejsce, w którym twórczość wychodzi na scenę.',
    description:
      'Teatr, muzyka, ruch, spektakle i artystyczne przygody dla dzieci, młodzieży i dorosłych.',
    primaryAction: {id: 'hero-primary-classes', label: 'Zobacz zajęcia', href: '/zajecia'},
    secondaryAction: {id: 'hero-secondary-home', label: 'Poznaj Pozytywkę', href: '/'},
    mediaLabel: 'Zdjęcie z próby teatralnej',
  },
  quickLinks: [
    {
      id: 'quick-zajecia',
      eyebrow: 'Szukam zajęć',
      label: 'Odkryj zajęcia',
      href: '/zajecia',
      icon: '✦',
      description:
        'Poznaj aktualne możliwości i znajdź kierunek odpowiadający zainteresowaniom uczestnika.',
    },
    {
      id: 'quick-spektakle',
      eyebrow: 'Chcę zobaczyć spektakle',
      label: 'Repertuar',
      href: '/wydarzenia',
      icon: '🎭',
      description: 'Przeżyj wyjątkowe emocje i zobacz efekty naszej artystycznej pracy na scenie.',
    },
    {
      id: 'quick-obozy',
      eyebrow: 'Szukam obozu',
      label: 'Sprawdź ofertę',
      href: '/kontakt',
      icon: '☀',
      description: 'Kreatywne wakacje pełne sztuki, integracji i niezapomnianych przeżyć.',
    },
  ],
  stage: {
    eyebrow: 'Scena Pozytywki',
    title: 'Twórczość, która naprawdę trafia na scenę.',
    description:
      'Pozytywka łączy regularną pracę artystyczną z przygotowywaniem wspólnych projektów, spektakli i wydarzeń scenicznych.',
    mediaLabel: 'Zdjęcie teatralnej próby',
    highlights: [
      {
        id: 'stage-teatr',
        type: 'Teatr',
        title: 'Grupa teatralna',
        description: 'Stała praca aktorska, improwizacja i przygotowanie wspólnych pokazów.',
        action: {id: 'stage-theatre-action', label: 'Poznaj teatry', href: '/zajecia'},
      },
      {
        id: 'stage-spektakl-musical',
        type: 'Spektakl / musical',
        title: 'Spektakl sezonowy',
        description: 'Projekt sceniczny przygotowywany przez uczestników Pozytywki.',
        action: {id: 'stage-performance-action', label: 'Zobacz spektakle', href: '/wydarzenia'},
      },
    ],
  },
  creativeAreas: {
    title: 'Różne drogi. Jedna przestrzeń do tworzenia.',
    description:
      'Pozytywka łączy różne dziedziny pracy artystycznej, pozwalając uczestnikom odkrywać własny sposób wyrażania siebie.',
    items: [
      {
        id: 'area-teatr',
        icon: '🎭',
        title: 'Teatr',
        description:
          'Gra aktorska, improwizacja, praca z tekstem i wspólne tworzenie przedstawień.',
      },
      {
        id: 'area-muzyka',
        icon: '♪',
        title: 'Muzyka',
        description: 'Śpiew, rytm, głos i działania muzyczne rozwijane podczas wspólnej pracy.',
      },
      {
        id: 'area-taniec-ruch',
        icon: '↗',
        title: 'Taniec i ruch',
        description: 'Ruch sceniczny, taniec i świadoma praca z ciałem.',
      },
      {
        id: 'area-obozy-dzialania',
        icon: '☀',
        title: 'Obozy i twórcze działania',
        description: 'Artystyczne wyjazdy, warsztaty i doświadczenia budujące relacje.',
      },
    ],
  },
  classesPreview: {
    eyebrow: 'Zapisy',
    title: 'Znajdź zajęcia dla siebie.',
    description: 'Poznaj obszary zajęć planowane w Pozytywce.',
    action: {id: 'classes-preview-action', label: 'Zobacz wszystkie zajęcia', href: '/zajecia'},
    items: [
      {
        id: 'class-teatr-dla-dzieci',
        slug: 'teatr-dla-dzieci',
        category: 'Teatr',
        title: 'Grupa teatralna',
        description: 'Praca z tekstem, improwizacją i wspólnym przygotowaniem scenicznych działań.',
        ageRange: {kind: 'unknown', label: 'Grupa wiekowa w ustaleniu'},
        status: 'planned',
        imageLabel: 'Zdjęcie z zajęć teatralnych',
        action: {
          id: 'class-teatr-dla-dzieci-action',
          label: 'Zobacz szczegóły',
          href: getActivityHref('teatr-dla-dzieci'),
        },
      },
      {
        id: 'class-wokal-i-rytm',
        slug: 'wokal-i-rytm',
        category: 'Muzyka',
        title: 'Zajęcia wokalne i rytmiczne',
        description: 'Zajęcia rozwijające głos, rytm i wspólne działania muzyczne.',
        ageRange: {kind: 'unknown', label: 'Grupa wiekowa w ustaleniu'},
        status: 'planned',
        imageLabel: 'Zdjęcie z warsztatów muzycznych',
        action: {
          id: 'class-wokal-i-rytm-action',
          label: 'Zobacz szczegóły',
          href: getActivityHref('wokal-i-rytm'),
        },
      },
      {
        id: 'class-ruch-sceniczny',
        slug: 'ruch-sceniczny',
        category: 'Ruch',
        title: 'Ruch sceniczny',
        description: 'Świadoma praca z ciałem, ekspresją i obecnością sceniczną.',
        ageRange: {kind: 'unknown', label: 'Grupa wiekowa w ustaleniu'},
        status: 'planned',
        imageLabel: 'Zdjęcie z zajęć ruchu scenicznego',
        action: {
          id: 'class-ruch-sceniczny-action',
          label: 'Zobacz szczegóły',
          href: getActivityHref('ruch-sceniczny'),
        },
      },
    ],
  },
  eventsPreview: {
    eyebrow: 'Wydarzenia',
    title: 'Spotkajmy się na żywo.',
    description:
      'Spektakle, koncerty, warsztaty i inne wydarzenia tworzone przez społeczność Pozytywki.',
    action: {
      id: 'events-preview-action',
      label: 'Zobacz wszystkie wydarzenia',
      href: '/wydarzenia',
    },
    items: [
      {
        id: 'event-pokaz-sceniczny',
        slug: 'pokaz-sceniczny',
        status: 'planned',
        type: 'Spektakl',
        title: 'Pokaz sceniczny',
        description: 'Wydarzenie przygotowywane przez społeczność Pozytywki.',
        action: {
          id: 'event-pokaz-sceniczny-action',
          label: 'Zobacz wydarzenie',
          href: getEventHref('pokaz-sceniczny'),
        },
      },
      {
        id: 'event-spotkanie-tworcze',
        slug: 'spotkanie-tworcze',
        status: 'planned',
        type: 'Warsztat',
        title: 'Spotkanie twórcze',
        description: 'Warsztat lub działanie artystyczne dla uczestników.',
        action: {
          id: 'event-spotkanie-tworcze-action',
          label: 'Zobacz wydarzenie',
          href: getEventHref('spotkanie-tworcze'),
        },
      },
      {
        id: 'event-wspolne-wydarzenie',
        slug: 'wspolne-wydarzenie',
        status: 'planned',
        type: 'Koncert / pokaz',
        title: 'Wspólne wydarzenie',
        description: 'Otwarte wydarzenie Pozytywki przygotowywane w ramach programu artystycznego.',
        action: {
          id: 'event-wspolne-wydarzenie-action',
          label: 'Zobacz wydarzenie',
          href: getEventHref('wspolne-wydarzenie'),
        },
      },
    ],
  },
  camp: {
    eyebrow: 'Obozy',
    title: 'Pozytywne Lato',
    description:
      'Artystyczne wyjazdy, wspólne działania i przestrzeń do budowania relacji oraz niezapomnianych doświadczeń.',
    mediaLabel: 'Zdjęcie ruchu artystycznego',
    detailsHeading: 'Szczegóły aktualnej edycji',
    details: [],
    primaryAction: {id: 'camp-primary-contact', label: 'Poznaj obóz', href: '/kontakt'},
    secondaryAction: {id: 'camp-secondary-contact', label: 'Zobacz zapisy', href: '/kontakt'},
  },
  team: {
    eyebrow: 'Ludzie Pozytywki',
    title: 'Za każdą twórczą przestrzenią stoją ludzie.',
    description:
      'Pozytywkę tworzą osoby, które wspierają uczestników w odkrywaniu własnych możliwości, wspólnej pracy i wychodzeniu na scenę.',
    featured: {
      id: 'team-iwona-pilarz',
      name: 'Iwona Pilarz',
      role: 'Założycielka / prowadząca',
      description: '',
      portraitLabel: 'Zdjęcie Iwony',
    },
    action: {id: 'team-action-home', label: 'Poznaj Pozytywkę', href: '/'},
    members: [],
  },
  testimonials: {
    eyebrow: 'Opinie',
    title: 'Pozytywkę najlepiej opisują ludzie, którzy ją tworzą.',
    description: '',
    items: [],
  },
  finalCta: {
    title: 'Znajdź swoje miejsce w Pozytywce.',
    description:
      'Wybierz najbliższą ścieżkę: zajęcia, wydarzenia albo obozy, a szczegóły potwierdzimy w kontakcie.',
    meta: 'Zajęcia / wydarzenia / obozy artystyczne',
    primaryAction: {id: 'final-cta-primary-classes', label: 'Zobacz zapisy', href: '/zajecia'},
    secondaryAction: {id: 'final-cta-secondary-contact', label: 'Skontaktuj się', href: '/kontakt'},
  },
} satisfies HomePageContent
