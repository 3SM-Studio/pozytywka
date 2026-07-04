import {getActivityHref, getEventHref, homeAnchors} from './routes'
import {
  fallbackActivities,
  fallbackCamps,
  fallbackGroups,
  fallbackPeople,
  fallbackShows,
  fallbackTestimonials,
} from './seed'
import type {HomePageContent} from './types'

export const homePageContent = {
  hero: {
    title: 'Teatr, muzyka, taniec i obozy, które prowadzą na scenę.',
    description:
      'Pozytywka to twórcza społeczność dla dzieci i młodzieży: regularne zajęcia, zespoły, projekty sceniczne, musicale, animacje i Pozytywne Lato.',
    primaryAction: {id: 'hero-primary-classes', label: 'Zobacz zajęcia', href: '/zajecia'},
    secondaryAction: {id: 'hero-secondary-camps', label: 'Pozytywne Lato', href: '/obozy'},
    mediaLabel: 'Próba, ruch, głos i wspólna scena',
  },
  quickLinks: [
    {
      id: 'quick-zajecia',
      eyebrow: 'Regularna praca',
      label: 'Zajęcia',
      href: '/zajecia',
      icon: '01',
      description: 'Teatr, wokal, rytm, taniec, balet, acrodance, animacje i warsztaty.',
    },
    {
      id: 'quick-spektakle',
      eyebrow: 'Scena i zespoły',
      label: 'Spektakle',
      href: '/spektakle',
      icon: '02',
      description: 'Projekty sceniczne, musicale, etiudy oraz prezentacje pracy grup.',
    },
    {
      id: 'quick-obozy',
      eyebrow: 'Wakacje z Pozytywką',
      label: 'Obozy',
      href: '/obozy',
      icon: '03',
      description: 'Pozytywne Lato jako ważna, widoczna oferta artystyczno-rekreacyjna.',
    },
  ],
  stage: {
    eyebrow: 'Scena Pozytywki',
    title: 'Regularna praca ma swój finał w projekcie scenicznym.',
    description:
      'Strona jest przygotowana pod CMS, ale demo już pokazuje właściwą architekturę: zajęcia, zespoły, spektakle, musicale, obozy i kontakt.',
    mediaLabel: 'Miejsce na klientowskie zdjęcie z próby lub spektaklu',
    highlights: [
      {
        id: 'stage-groups',
        type: 'Zespoły',
        title: 'Grupy, które pracują przez sezon',
        description:
          'Wokalno-taneczne, teatralne, musicalowe, taneczne, baletowe i acrodance, zależnie od aktualnego naboru.',
        action: {id: 'stage-groups-action', label: 'Zobacz zespoły', href: homeAnchors.groups},
      },
      {
        id: 'stage-shows',
        type: 'Spektakle / musicale',
        title: 'Projekty do uzupełnienia po potwierdzeniu tytułów',
        description:
          'Demo pokazuje miejsce na prawdziwe tytuły, terminy i opisy, bez wymyślania niepotwierdzonych faktów.',
        action: {id: 'stage-shows-action', label: 'Zobacz spektakle', href: homeAnchors.stage},
      },
    ],
  },
  creativeAreas: {
    title: 'Jedna pracownia, kilka dróg wejścia w twórczość.',
    description:
      'Pozytywka nie jest generyczną szkołą artystyczną. Jej komunikacja powinna łączyć scenę, energię młodzieży i spokojną informację dla rodziców.',
    items: [
      {
        id: 'area-teatr',
        icon: '01',
        title: 'Teatr',
        description: 'Improwizacja, tekst, głos, rola i współpraca w grupie.',
      },
      {
        id: 'area-muzyka',
        icon: '02',
        title: 'Muzyka',
        description: 'Wokal, rytm, praca z głosem i wspólne działania muzyczne.',
      },
      {
        id: 'area-taniec',
        icon: '03',
        title: 'Taniec i ruch',
        description: 'Ruch sceniczny, balet, taniec, acrodance i ekspresja ciała.',
      },
      {
        id: 'area-obozy',
        icon: '04',
        title: 'Obozy i animacje',
        description: 'Pozytywne Lato, warsztaty, integracja i działania artystyczne.',
      },
    ],
  },
  classesPreview: {
    eyebrow: 'Zajęcia',
    title: 'Regularne ścieżki dla osób, które chcą tworzyć.',
    description:
      'Fallback pokazuje realne kategorie oferty bez podawania niepotwierdzonych terminów i cen.',
    action: {id: 'classes-preview-action', label: 'Zobacz wszystkie zajęcia', href: '/zajecia'},
    items: fallbackActivities.slice(0, 3).map((activity) => ({
      id: activity.slug,
      slug: activity.slug,
      category: activity.categoryLabel,
      title: activity.title,
      description: activity.summary,
      ageRange: activity.ageRange,
      scheduleSummary: activity.scheduleSummary,
      locationSummary: activity.locationSummary,
      status: activity.status,
      imageLabel: activity.image.label,
      action: {
        id: `${activity.slug}-action`,
        label: 'Zobacz szczegóły',
        href: getActivityHref(activity.slug),
      },
    })),
  },
  groupsPreview: {
    eyebrow: 'Zespoły',
    title: 'Grupy Pozytywki budują sezonową energię.',
    description:
      'Osobna sekcja dla grup pomaga później podłączyć Sanity bez przebudowywania frontendu.',
    action: {id: 'groups-preview-action', label: 'Zobacz zespoły', href: '/zespoly'},
    items: fallbackGroups.slice(0, 4),
  },
  eventsPreview: {
    eyebrow: 'Spektakle i projekty',
    title: 'Scena jest osobnym filarem strony.',
    description:
      'Miejsce na spektakle, musicale, koncerty i prezentacje zespołów. Tytuły i terminy czekają na klientowskie potwierdzenie.',
    action: {
      id: 'events-preview-action',
      label: 'Zobacz spektakle',
      href: '/spektakle',
    },
    items: fallbackShows.map((show) => ({
      id: show.slug,
      slug: show.slug,
      status: show.status,
      type: show.typeLabel,
      title: show.title,
      description: show.summary,
      startsAt: show.startsAt,
      dateLabel: show.dateLabel,
      timeLabel: show.timeLabel,
      locationSummary: show.locationSummary,
      action: {
        id: `${show.slug}-action`,
        label: 'Zobacz projekt',
        href: getEventHref(show.slug),
      },
    })),
  },
  camp: {
    eyebrow: 'Obozy',
    title: fallbackCamps[0].title,
    description: fallbackCamps[0].summary,
    mediaLabel: 'Pozytywne Lato: teatr, muzyka, ruch, relacje',
    detailsHeading: 'Co komunikuje demo',
    details: fallbackCamps[0].details,
    primaryAction: fallbackCamps[0].primaryAction,
    secondaryAction: {id: 'camp-secondary-page', label: 'Zobacz stronę obozów', href: '/obozy'},
  },
  team: {
    eyebrow: 'O Pozytywce',
    title: 'Twórcza przestrzeń prowadzona uważnie i scenicznie.',
    description:
      'Sekcja o Pozytywce opowiada o podejściu, Iwonie Pilarz i społeczności, bez dopisywania niepotwierdzonego biogramu.',
    featured: {
      id: fallbackPeople[0].slug,
      name: fallbackPeople[0].name,
      role: fallbackPeople[0].role,
      description: fallbackPeople[0].summary,
      portraitLabel: fallbackPeople[0].portrait.label,
    },
    action: {id: 'team-action-home', label: 'Poznaj Pozytywkę', href: '/o-pozytywce'},
    members: [],
  },
  testimonials: {
    eyebrow: 'Opinie',
    title: 'Opinie pojawią się dopiero po potwierdzeniu źródeł.',
    description:
      'Demo nie zawiera fikcyjnych rekomendacji. Sanity ma gotowy typ treści na prawdziwe cytaty.',
    items: fallbackTestimonials.map((item) => ({
      id: item.slug,
      verified: item.verified,
      quote: item.quote,
      author: item.author,
      caption: item.caption,
    })),
  },
  finalCta: {
    title: 'Zapytaj o miejsce w Pozytywce.',
    description:
      'Formularz obsługuje zapytania o zajęcia, zespoły, spektakle, musicale, animacje i Pozytywne Lato.',
    meta: 'Zajęcia / zespoły / spektakle / obozy / kontakt',
    primaryAction: {
      id: 'final-cta-primary-contact',
      label: 'Przejdź do formularza',
      href: '/kontakt',
    },
    secondaryAction: {id: 'final-cta-secondary-camps', label: 'Zobacz obozy', href: '/obozy'},
  },
} satisfies HomePageContent
