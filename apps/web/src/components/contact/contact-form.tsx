'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import type {ReactNode} from 'react'
import {useMemo, useState} from 'react'
import {Controller, type Resolver, useForm} from 'react-hook-form'
import {Button} from '@/components/ui/button'
import {Checkbox} from '@/components/ui/checkbox'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {Textarea} from '@/components/ui/textarea'
import {
  contactFormSchema,
  contactTopics,
  interestCategories,
  type ContactFormInput,
  type ContactFormValues,
} from '@/lib/contact/schema'

type SubmitState =
  | {type: 'idle'; message: ''}
  | {type: 'success'; message: string}
  | {type: 'error'; message: string}

const contactResolver = zodResolver(contactFormSchema as never) as Resolver<
  ContactFormInput,
  unknown,
  ContactFormValues
>

const successMessage =
  'Dziękujemy — wiadomość została wysłana. Odezwiemy się po zapoznaniu ze zgłoszeniem.'
const errorMessage = 'Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę.'

function createDefaultValues(): ContactFormInput {
  return {
    contactName: '',
    email: '',
    phone: '',
    topic: contactTopics[0],
    participantAge: '',
    interestCategory: interestCategories[0],
    message: '',
    consent: false,
    website: '',
    startedAt: Date.now(),
  }
}

export function ContactForm() {
  const defaultValues = useMemo(() => createDefaultValues(), [])
  const [submitState, setSubmitState] = useState<SubmitState>({type: 'idle', message: ''})
  const {
    control,
    formState: {errors, isSubmitting},
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFormInput, unknown, ContactFormValues>({
    resolver: contactResolver,
    defaultValues,
  })

  async function onSubmit(values: ContactFormValues) {
    setSubmitState({type: 'idle', message: ''})

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values),
    })
    const result = (await response.json().catch(() => null)) as {message?: string} | null

    if (!response.ok) {
      setSubmitState({
        type: 'error',
        message: result?.message ?? errorMessage,
      })
      return
    }

    setSubmitState({
      type: 'success',
      message: result?.message ?? successMessage,
    })
    reset(createDefaultValues())
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="border-outline-variant/60 bg-surface-raised grid gap-5 rounded-2xl border p-6 shadow-sm"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Osoba kontaktowa" error={errors.contactName?.message}>
          <Input
            autoComplete="name"
            aria-invalid={Boolean(errors.contactName)}
            {...register('contactName')}
          />
        </Field>
        <Field label="E-mail" error={errors.email?.message}>
          <Input
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register('email')}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Telefon" error={errors.phone?.message}>
          <Input
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            {...register('phone')}
          />
        </Field>
        <Field label="Wiek lub przedział wiekowy uczestnika" error={errors.participantAge?.message}>
          <Input
            placeholder="np. 9 lat albo 12-14"
            aria-invalid={Boolean(errors.participantAge)}
            {...register('participantAge')}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Temat" error={errors.topic?.message}>
          <select
            className="border-input focus-visible:border-ring focus-visible:ring-ring/50 h-10 w-full rounded-lg border bg-transparent px-3 text-sm outline-none focus-visible:ring-3"
            aria-invalid={Boolean(errors.topic)}
            {...register('topic')}
          >
            {contactTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Obszar zainteresowania" error={errors.interestCategory?.message}>
          <select
            className="border-input focus-visible:border-ring focus-visible:ring-ring/50 h-10 w-full rounded-lg border bg-transparent px-3 text-sm outline-none focus-visible:ring-3"
            aria-invalid={Boolean(errors.interestCategory)}
            {...register('interestCategory')}
          >
            {interestCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Wiadomość" error={errors.message?.message}>
        <Textarea
          rows={6}
          placeholder="Napisz, czego dotyczy zapytanie. Nie podawaj PESEL, adresu, szkoły ani pełnych danych dziecka."
          aria-invalid={Boolean(errors.message)}
          {...register('message')}
        />
      </Field>

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register('website')}
      />
      <input type="hidden" {...register('startedAt', {valueAsNumber: true})} />

      <Controller
        control={control}
        name="consent"
        render={({field}) => (
          <div className="grid gap-2">
            <label className="flex items-start gap-3 text-sm leading-6">
              <Checkbox
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                aria-invalid={Boolean(errors.consent)}
                className="mt-1"
              />
              <span>
                Wyrażam zgodę na kontakt w sprawie tej wiadomości i wiem, że formularz nie służy do
                przekazywania wrażliwych danych dziecka.
              </span>
            </label>
            {errors.consent?.message ? <ErrorText>{errors.consent.message}</ErrorText> : null}
          </div>
        )}
      />

      {submitState.type !== 'idle' ? (
        <div
          className={
            submitState.type === 'success'
              ? 'rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm font-semibold text-green-700 dark:text-green-200'
              : 'border-destructive/30 bg-destructive/10 text-destructive rounded-xl border p-4 text-sm font-semibold'
          }
          role="status"
          aria-live="polite"
        >
          {submitState.message}
        </div>
      ) : null}

      <Button
        type="submit"
        variant="inverse"
        disabled={isSubmitting || submitState.type === 'success'}
        className="w-fit"
      >
        {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
      </Button>
    </form>
  )
}

function Field({children, error, label}: {children: ReactNode; error?: string; label: string}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      {children}
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  )
}

function ErrorText({children}: {children: ReactNode}) {
  return <p className="text-destructive text-sm font-semibold">{children}</p>
}
