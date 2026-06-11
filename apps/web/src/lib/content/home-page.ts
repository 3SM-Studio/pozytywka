import type {HomePageContent} from './types'

export const homePageContent = {
  navigation: [
    {label: 'Zajęcia', href: '#zajecia'},
    {label: 'Scena', href: '#scena'},
    {label: 'Obozy', href: '#obozy'},
    {label: 'O Pozytywce', href: '#o-pozytywce'},
    {label: 'Kontakt', href: '#kontakt'},
  ],
  hero: {
    eyebrow: 'Pracownia Twórcza Pozytywka',
    title: 'Miejsce, w którym twórczość wychodzi na scenę.',
    description:
      'Teatr, muzyka, ruch, spektakle i artystyczne przygody dla dzieci, młodzieży i dorosłych.',
    primaryAction: {label: 'Zobacz zajęcia', href: '#zajecia'},
    secondaryAction: {label: 'Poznaj Pozytywkę', href: '#o-pozytywce'},
    highlights: ['Teatr', 'Muzyka', 'Ruch sceniczny', 'Obozy twórcze'],
  },
  quickLinks: [
    {
      eyebrow: 'Szukam zajęć',
      label: 'Odkryj zajęcia',
      href: '#zajecia',
      description:
        'Poznaj aktualne możliwości i znajdź kierunek odpowiadający zainteresowaniom uczestnika.',
    },
    {
      eyebrow: 'Chcę zobaczyć spektakle',
      label: 'Repertuar',
      href: '#wydarzenia',
      description:
        'Przeżyj wyjątkowe emocje i zobacz efekty artystycznej pracy Pozytywki na scenie.',
    },
    {
      eyebrow: 'Szukam obozu',
      label: 'Sprawdź ofertę',
      href: '#obozy',
      description: 'Kreatywne wakacje pełne sztuki, integracji i niezapomnianych przeżyć.',
    },
  ],
  stage: {
    eyebrow: 'Scena Pozytywki',
    title: 'Twórczość, która naprawdę trafia na scenę.',
    description:
      'Pozytywka łączy regularną pracę artystyczną z przygotowywaniem wspólnych projektów, spektakli i wydarzeń scenicznych.',
    highlights: [
      {
        type: 'Teatr',
        title: 'Grupy teatralne',
        description:
          'Praca aktorska, improwizacja, głos, ciało i wspólne tworzenie opowieści scenicznych.',
        action: {label: 'Poznaj teatry', href: '#zajecia'},
      },
      {
        type: 'Spektakl / musical',
        title: 'Produkcje sceniczne',
        description:
          'Projekty, w których uczestnicy przechodzą od prób i warsztatów do spotkania z publicznością.',
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
        title: 'Teatr',
        description: 'Gra aktorska, improwizacja, praca z tekstem i wspólne tworzenie scen.',
      },
      {
        title: 'Muzyka',
        description: 'Śpiew, rytm, głos i działania muzyczne rozwijane podczas wspólnej pracy.',
      },
      {
        title: 'Taniec i ruch',
        description: 'Ruch sceniczny, taniec i świadoma praca z ciałem.',
      },
      {
        title: 'Obozy i twórcze działania',
        description: 'Artystyczne wyjazdy, warsztaty i doświadczenia budujące relacje.',
      },
    ],
  },
  classesPreview: {
    eyebrow: 'Zapisy',
    title: 'Znajdź zajęcia dla siebie.',
    description:
      'Docelowo ta sekcja będzie zasilana z Sanity. Na razie pokazuje kształt danych potrzebnych do homepage’u.',
    action: {label: 'Zobacz wszystkie zajęcia', href: '#kontakt'},
    items: [
      {
        category: 'Teatr',
        title: 'Zajęcia teatralne',
        description:
          'Regularna praca sceniczna dla osób, które chcą rozwijać wyobraźnię, obecność i współpracę.',
        meta: 'Grupa wiekowa, termin i lokalizacja — do potwierdzenia',
        status: 'Status zapisów — do potwierdzenia',
      },
      {
        category: 'Muzyka',
        title: 'Muzyka i śpiew',
        description: 'Przestrzeń do pracy z głosem, rytmem i muzycznym sposobem wyrażania emocji.',
        meta: 'Grupa wiekowa, termin i lokalizacja — do potwierdzenia',
        status: 'Status zapisów — do potwierdzenia',
      },
      {
        category: 'Ruch',
        title: 'Ruch sceniczny',
        description:
          'Zajęcia wspierające świadomość ciała, ekspresję i swobodę poruszania się na scenie.',
        meta: 'Grupa wiekowa, termin i lokalizacja — do potwierdzenia',
        status: 'Status zapisów — do potwierdzenia',
      },
    ],
  },
  eventsPreview: {
    eyebrow: 'Wydarzenia',
    title: 'Spotkajmy się na żywo.',
    description:
      'Spektakle, koncerty, warsztaty i wydarzenia tworzone przez społeczność Pozytywki.',
    action: {label: 'Zobacz wszystkie wydarzenia', href: '#kontakt'},
    items: [
      {
        date: 'Data — do potwierdzenia',
        type: 'Spektakl',
        title: 'Nadchodzące wydarzenie',
        description: 'Opis wydarzenia zostanie uzupełniony po potwierdzeniu repertuaru.',
        place: 'Miejsce — do potwierdzenia',
        time: 'Godzina — do potwierdzenia',
      },
      {
        date: 'Data — do potwierdzenia',
        type: 'Warsztat',
        title: 'Warsztat twórczy',
        description: 'Krótki opis warsztatu zostanie zasilony z CMS w kolejnym etapie.',
        place: 'Miejsce — do potwierdzenia',
        time: 'Godzina — do potwierdzenia',
      },
      {
        date: 'Data — do potwierdzenia',
        type: 'Koncert / pokaz',
        title: 'Pokaz pracy artystycznej',
        description: 'Informacje o wydarzeniu zostaną potwierdzone przed publikacją.',
        place: 'Miejsce — do potwierdzenia',
        time: 'Godzina — do potwierdzenia',
      },
    ],
  },
  camp: {
    eyebrow: 'Obozy',
    title: 'Pozytywne Lato',
    description:
      'Artystyczne wyjazdy, wspólne działania i przestrzeń do budowania relacji oraz niezapomnianych doświadczeń.',
    details: [
      'Termin — do potwierdzenia',
      'Miejsce — do potwierdzenia',
      'Grupa wiekowa — do potwierdzenia',
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
      description:
        'Biografia i opis pracy artystycznej zostaną uzupełnione po potwierdzeniu treści.',
    },
    members: [
      {
        name: 'Imię i nazwisko — do potwierdzenia',
        role: 'Rola — do potwierdzenia',
        description: 'Obszar działania — do potwierdzenia',
      },
      {
        name: 'Imię i nazwisko — do potwierdzenia',
        role: 'Rola — do potwierdzenia',
        description: 'Obszar działania — do potwierdzenia',
      },
      {
        name: 'Imię i nazwisko — do potwierdzenia',
        role: 'Rola — do potwierdzenia',
        description: 'Obszar działania — do potwierdzenia',
      },
    ],
    action: {label: 'Poznaj cały zespół', href: '#o-pozytywce'},
  },
  testimonials: {
    eyebrow: 'Opinie',
    title: 'Pozytywkę najlepiej opisują ludzie, którzy ją tworzą.',
    description:
      'Prawdziwe opinie uczestników, rodziców i partnerów zostaną dodane po weryfikacji.',
    items: [
      {
        quote: 'Opinia — do potwierdzenia.',
        author: 'Imię — do potwierdzenia',
        caption: 'Rodzic / uczestnik / partner — do potwierdzenia',
      },
      {
        quote: 'Opinia — do potwierdzenia.',
        author: 'Imię — do potwierdzenia',
        caption: 'Rodzic / uczestnik / partner — do potwierdzenia',
      },
      {
        quote: 'Opinia — do potwierdzenia.',
        author: 'Imię — do potwierdzenia',
        caption: 'Rodzic / uczestnik / partner — do potwierdzenia',
      },
    ],
  },
  finalCta: {
    title: 'Znajdź swoje miejsce w Pozytywce.',
    description:
      'Zajęcia, wydarzenia i obozy zostaną uporządkowane w kolejnych etapach, ale kierunek strony jest już przygotowany pod realne dane.',
    meta: 'Zajęcia / wydarzenia / obozy — do potwierdzenia',
    primaryAction: {label: 'Zobacz zapisy', href: '#zajecia'},
    secondaryAction: {label: 'Skontaktuj się', href: '#kontakt'},
  },
  footer: {
    description:
      'Pracownia twórcza, która łączy teatr, muzykę, ruch, wydarzenia i artystyczne doświadczenia.',
    contact: ['Adres — do potwierdzenia', 'Telefon — do potwierdzenia', 'Email — do potwierdzenia'],
  },
} satisfies HomePageContent
