import {z} from 'zod/v4'

export const contactTopics = [
  'Zapisy na zajęcia',
  'Zespoły Pozytywki',
  'Spektakle lub musical',
  'Pozytywne Lato / obóz',
  'Animacje lub warsztaty',
  'Inna sprawa',
] as const

export const interestCategories = [
  'Teatr',
  'Muzyka / wokal',
  'Taniec / ruch / acrodance',
  'Musical',
  'Obóz',
  'Animacje',
  'Jeszcze nie wiem',
] as const

export const contactFormSchema = z.object({
  contactName: z.string().trim().min(2, 'Podaj imię i nazwisko osoby kontaktowej.').max(120),
  email: z
    .string()
    .trim()
    .min(1, 'Podaj adres e-mail.')
    .email('Podaj poprawny adres e-mail.')
    .max(160),
  phone: z.string().trim().min(7, 'Podaj numer telefonu kontaktowego.').max(40),
  topic: z.enum(contactTopics, {error: 'Wybierz temat wiadomości.'}),
  participantAge: z.string().trim().min(1, 'Podaj wiek lub przedział wiekowy uczestnika.').max(80),
  interestCategory: z.enum(interestCategories, {error: 'Wybierz obszar zainteresowania.'}),
  message: z.string().trim().min(10, 'Napisz krótką wiadomość.').max(1600),
  consent: z.boolean().refine((value) => value, 'Zgoda jest wymagana.'),
  website: z.string().max(0, 'Pole powinno pozostać puste.'),
  startedAt: z.coerce.number().int().positive(),
})

export type ContactFormInput = z.input<typeof contactFormSchema>
export type ContactFormValues = z.output<typeof contactFormSchema>
