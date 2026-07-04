import {contactFormSchema, type ContactFormValues} from '@/lib/contact/schema'
import {Resend} from 'resend'

export const runtime = 'nodejs'

const minimumSubmitDelayMs = 3000
const successMessage =
  'Dziękujemy — wiadomość została wysłana. Odezwiemy się po zapoznaniu ze zgłoszeniem.'
const errorMessage = 'Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę.'
let resendClient: Resend | null = null

function getResend() {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return null
  }

  resendClient ??= new Resend(apiKey)
  return resendClient
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as unknown
  const parsed = contactFormSchema.safeParse(body)

  if (!parsed.success) {
    return Response.json(
      {
        message: 'Sprawdź pola formularza i spróbuj ponownie.',
        issues: parsed.error.flatten().fieldErrors,
      },
      {status: 400},
    )
  }

  const data = parsed.data
  const elapsedMs = Date.now() - data.startedAt

  if (data.website) {
    return Response.json({message: 'Wiadomość przyjęta.'}, {status: 202})
  }

  if (elapsedMs < minimumSubmitDelayMs) {
    return Response.json({message: 'Formularz wysłano zbyt szybko.'}, {status: 429})
  }

  const resend = getResend()
  const to = process.env.CONTACT_EMAIL_TO
  const from = process.env.CONTACT_EMAIL_FROM

  if (!resend || !to || !from) {
    return Response.json({message: errorMessage}, {status: 503})
  }

  try {
    const {error} = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `Pozytywka: ${data.topic}`,
      text: buildPlainTextEmail(data),
      html: buildHtmlEmail(data),
    })

    if (error) {
      return Response.json({message: errorMessage}, {status: 502})
    }
  } catch {
    return Response.json({message: errorMessage}, {status: 502})
  }

  void sendConfirmationEmail({data, from, replyTo: to, resend})

  return Response.json({message: successMessage})
}

async function sendConfirmationEmail({
  data,
  from,
  replyTo,
  resend,
}: {
  data: ContactFormValues
  from: string
  replyTo: string
  resend: Resend
}) {
  try {
    const {error} = await resend.emails.send({
      from,
      to: data.email,
      replyTo,
      subject: 'Potwierdzenie wysłania wiadomości — Pozytywka',
      text: buildConfirmationPlainTextEmail(data),
      html: buildConfirmationHtmlEmail(data),
    })

    if (error) {
      console.warn('Contact confirmation email failed after main email succeeded.')
    }
  } catch {
    console.warn('Contact confirmation email failed after main email succeeded.')
  }
}

function buildPlainTextEmail(data: ContactFormValues) {
  return [
    `Osoba kontaktowa: ${data.contactName}`,
    `E-mail: ${data.email}`,
    `Telefon: ${data.phone}`,
    `Temat: ${data.topic}`,
    `Wiek/przedział: ${data.participantAge}`,
    `Obszar: ${data.interestCategory}`,
    '',
    data.message,
  ].join('\n')
}

function buildHtmlEmail(data: ContactFormValues) {
  const rows = [
    ['Osoba kontaktowa', data.contactName],
    ['E-mail', data.email],
    ['Telefon', data.phone],
    ['Temat', data.topic],
    ['Wiek/przedział', data.participantAge],
    ['Obszar', data.interestCategory],
  ]

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <h1>Nowe zapytanie z formularza Pozytywki</h1>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`,
          )
          .join('')}
      </table>
      <h2>Wiadomość</h2>
      <p>${escapeHtml(data.message).replaceAll('\n', '<br>')}</p>
    </div>
  `
}

function buildConfirmationPlainTextEmail(data: ContactFormValues) {
  return [
    'Dzień dobry,',
    '',
    'dziękujemy za wiadomość do Pracowni Twórczej Pozytywka.',
    '',
    'Otrzymaliśmy zgłoszenie i odezwiemy się po zapoznaniu z treścią wiadomości.',
    '',
    `Temat zgłoszenia: ${data.topic}`,
    `Wybrany obszar: ${data.interestCategory}`,
    '',
    'Pozdrawiamy,',
    'Pracownia Twórcza Pozytywka',
  ].join('\n')
}

function buildConfirmationHtmlEmail(data: ContactFormValues) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <p>Dzień dobry,</p>
      <p>dziękujemy za wiadomość do Pracowni Twórczej Pozytywka.</p>
      <p>Otrzymaliśmy zgłoszenie i odezwiemy się po zapoznaniu z treścią wiadomości.</p>
      <p><strong>Temat zgłoszenia:</strong> ${escapeHtml(data.topic)}<br>
      <strong>Wybrany obszar:</strong> ${escapeHtml(data.interestCategory)}</p>
      <p>Pozdrawiamy,<br>Pracownia Twórcza Pozytywka</p>
    </div>
  `
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}
