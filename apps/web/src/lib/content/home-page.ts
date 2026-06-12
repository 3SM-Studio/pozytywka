import type {HomePageContent} from './types'
import {getActivityHref, getEventHref} from './routes'

export const homePageContent = {
  hero: {
    title: 'Miejsce, w którym twórczość wychodzi na scenę.',
    description:
      'Teatr, muzyka, ruch, spektakle i artystyczne przygody dla dzieci, młodzieży i dorosłych.',
    primaryAction: {label: 'Zobacz zajęcia', href: '/zajecia'},
    secondaryAction: {label: 'Poznaj Pozytywkę', href: '/'},
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
        action: {label: 'Poznaj teatry', href: '/zajecia'},
      },
      {
        id: 'stage-spektakl-musical',
        type: 'Spektakl / musical',
        title: 'Spektakl sezonowy',
        description: 'Projekt sceniczny przygotowywany przez uczestników Pozytywki.',
        action: {label: 'Zobacz spektakle', href: '/wydarzenia'},
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
    description: 'Aktualna oferta zajęć zostanie uzupełniona po potwierdzeniu programu i terminów.',
    action: {label: 'Zobacz wszystkie zajęcia', href: '/zajecia'},
    items: [
      {
        id: 'class-teatr-dla-dzieci',
        slug: 'teatr-dla-dzieci',
        category: 'Teatr',
        title: 'Grupa teatralna',
        description: 'Praca z tekstem, improwizacją i wspólnym przygotowaniem scenicznych działań.',
        ageRange: {from: 0},
        scheduleSummary: 'Termin zostanie podany wkrótce',
        locationSummary: 'Miejsce zostanie podane wkrótce',
        status: 'planned',
        imageLabel: 'Zdjęcie z zajęć teatralnych',
        action: {label: 'Zobacz szczegóły', href: getActivityHref('teatr-dla-dzieci')},
      },
      {
        id: 'class-wokal-i-rytm',
        slug: 'wokal-i-rytm',
        category: 'Muzyka',
        title: 'Zajęcia wokalne i rytmiczne',
        description: 'Zajęcia rozwijające głos, rytm i wspólne działania muzyczne.',
        ageRange: {from: 0},
        scheduleSummary: 'Termin zostanie podany wkrótce',
        locationSummary: 'Miejsce zostanie podane wkrótce',
        status: 'planned',
        imageLabel: 'Zdjęcie z warsztatów muzycznych',
        action: {label: 'Zobacz szczegóły', href: getActivityHref('wokal-i-rytm')},
      },
      {
        id: 'class-ruch-sceniczny',
        slug: 'ruch-sceniczny',
        category: 'Ruch',
        title: 'Ruch sceniczny',
        description: 'Świadoma praca z ciałem, ekspresją i obecnością sceniczną.',
        ageRange: {from: 0},
        scheduleSummary: 'Termin zostanie podany wkrótce',
        locationSummary: 'Miejsce zostanie podane wkrótce',
        status: 'planned',
        imageLabel: 'Zdjęcie z zajęć ruchu scenicznego',
        action: {label: 'Zobacz szczegóły', href: getActivityHref('ruch-sceniczny')},
      },
    ],
  },
  eventsPreview: {
    eyebrow: 'Wydarzenia',
    title: 'Spotkajmy się na żywo.',
    description:
      'Spektakle, koncerty, warsztaty i inne wydarzenia tworzone przez społeczność Pozytywki.',
    action: {label: 'Zobacz wszystkie wydarzenia', href: '/wydarzenia'},
    items: [
      {
        id: 'event-pokaz-sceniczny',
        slug: 'pokaz-sceniczny',
        dateLabel: 'Termin zostanie podany wkrótce',
        timeLabel: 'Godzina zostanie podana wkrótce',
        locationSummary: 'Miejsce zostanie podane wkrótce',
        status: 'planned',
        type: 'Spektakl',
        title: 'Pokaz sceniczny',
        description: 'Wydarzenie przygotowywane przez społeczność Pozytywki.',
        action: {label: 'Zobacz wydarzenie', href: getEventHref('pokaz-sceniczny')},
      },
      {
        id: 'event-spotkanie-tworcze',
        slug: 'spotkanie-tworcze',
        dateLabel: 'Termin zostanie podany wkrótce',
        timeLabel: 'Godzina zostanie podana wkrótce',
        locationSummary: 'Miejsce zostanie podane wkrótce',
        status: 'planned',
        type: 'Warsztat',
        title: 'Spotkanie twórcze',
        description: 'Warsztat lub działanie artystyczne dla uczestników.',
        action: {label: 'Zobacz wydarzenie', href: getEventHref('spotkanie-tworcze')},
      },
      {
        id: 'event-wspolne-wydarzenie',
        slug: 'wspolne-wydarzenie',
        dateLabel: 'Termin zostanie podany wkrótce',
        timeLabel: 'Godzina zostanie podana wkrótce',
        locationSummary: 'Miejsce zostanie podane wkrótce',
        status: 'planned',
        type: 'Koncert / pokaz',
        title: 'Wspólne wydarzenie',
        description: 'Otwarte wydarzenie Pozytywki przygotowywane w ramach programu artystycznego.',
        action: {label: 'Zobacz wydarzenie', href: getEventHref('wspolne-wydarzenie')},
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
    details: [
      {id: 'camp-termin', icon: '▣', label: 'Termin zostanie podany wkrótce'},
      {id: 'camp-miejsce', icon: '⌖', label: 'Miejsce zostanie podane wkrótce'},
      {id: 'camp-grupa-wiekowa', icon: '◎', label: 'Grupa wiekowa zostanie opisana wkrótce'},
    ],
    primaryAction: {label: 'Poznaj obóz', href: '/kontakt'},
    secondaryAction: {label: 'Zobacz zapisy', href: '/kontakt'},
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
      description:
        'Biografia i zakres działań zostaną uzupełnione wraz z pełną prezentacją zespołu.',
      portraitLabel: 'Zdjęcie Iwony',
    },
    action: {label: 'Poznaj Pozytywkę', href: '/'},
    members: [
      {
        id: 'team-instruktor-teatr',
        name: 'Prowadzący zajęcia teatralne',
        role: 'Teatr',
        description: 'Obszar pracy i krótka nota zostaną uzupełnione w prezentacji zespołu.',
        portraitLabel: 'Portret osoby prowadzącej',
      },
      {
        id: 'team-instruktor-muzyka',
        name: 'Prowadzący zajęcia muzyczne',
        role: 'Muzyka',
        description: 'Obszar pracy i krótka nota zostaną uzupełnione w prezentacji zespołu.',
        portraitLabel: 'Portret osoby prowadzącej',
      },
      {
        id: 'team-instruktor-ruch',
        name: 'Prowadzący zajęcia ruchowe',
        role: 'Ruch',
        description: 'Obszar pracy i krótka nota zostaną uzupełnione w prezentacji zespołu.',
        portraitLabel: 'Portret osoby prowadzącej',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Opinie',
    title: 'Pozytywkę najlepiej opisują ludzie, którzy ją tworzą.',
    description: 'Miejsce na opinie uczestników i rodziców po uruchomieniu pełnej oferty.',
    items: [
      {
        id: 'testimonial-parent',
        quote: 'Cudowne miejsce, pełne profesjonalizmu i ciepła. Moje dziecko uwielbia te zajęcia.',
        author: 'Rodzic uczestnika',
        caption: 'Zajęcia teatralne',
      },
      {
        id: 'testimonial-participant',
        quote: 'Scena to mój drugi dom. Świetni instruktorzy i wspaniała atmosfera na próbach.',
        author: 'Uczestnik zajęć',
        caption: 'Próby sceniczne',
      },
      {
        id: 'testimonial-camp',
        quote: 'Najlepsze obozy letnie, dużo kreatywnych działań i świetna atmosfera.',
        author: 'Uczestniczka obozu',
        caption: 'Obóz artystyczny',
      },
    ],
  },
  finalCta: {
    title: 'Znajdź swoje miejsce w Pozytywce.',
    description:
      'Wybierz najbliższą ścieżkę: zajęcia, wydarzenia albo obozy, a szczegóły potwierdzimy w kontakcie.',
    meta: 'Zajęcia / wydarzenia / obozy artystyczne',
    primaryAction: {label: 'Zobacz zapisy', href: '/zajecia'},
    secondaryAction: {label: 'Skontaktuj się', href: '/kontakt'},
  },
} satisfies HomePageContent
