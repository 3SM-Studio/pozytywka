import type {ClassPreview, EventPreview} from '@/lib/content/types'

export const classStatusLabel: Record<ClassPreview['status'], string> = {
  enquiry: 'Zapytaj o nabór',
  open: 'Zapisy otwarte',
  waitlist: 'Lista rezerwowa',
  closed: 'Zapisy zamknięte',
  planned: 'Zapytaj o nabór',
}

export const eventStatusLabel: Record<EventPreview['status'], string> = {
  enquiry: 'Szczegóły do potwierdzenia',
  scheduled: 'Zaplanowane',
  cancelled: 'Odwołane',
  past: 'Zakończone',
  planned: 'Szczegóły do potwierdzenia',
}

export function formatAgeRange(ageRange: ClassPreview['ageRange']) {
  if (ageRange.kind === 'unknown' || ageRange.kind === 'descriptive') {
    return ageRange.label
  }

  if (ageRange.to === undefined) {
    return `Wiek ${ageRange.from}+`
  }

  return `Wiek ${ageRange.from}-${ageRange.to}`
}

export function formatClassInfo(activity: ClassPreview) {
  return [formatAgeRange(activity.ageRange), activity.scheduleSummary, activity.locationSummary]
    .filter(Boolean)
    .join(' • ')
}
