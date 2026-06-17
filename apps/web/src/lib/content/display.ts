import type {ClassPreview, EventPreview} from '@/lib/content/types'

export const classStatusLabel: Record<ClassPreview['status'], string> = {
  open: 'Zapisy — otwarte',
  waitlist: 'Zapisy — lista rezerwowa',
  closed: 'Zapisy — zamknięte',
  planned: 'Zapisy w przygotowaniu',
}

export const eventStatusLabel: Record<EventPreview['status'], string> = {
  scheduled: 'Zaplanowane',
  cancelled: 'Odwołane',
  past: 'Zakończone',
  planned: 'Wydarzenie w przygotowaniu',
}

export function formatAgeRange(ageRange: ClassPreview['ageRange']) {
  if (ageRange.kind === 'unknown') {
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
