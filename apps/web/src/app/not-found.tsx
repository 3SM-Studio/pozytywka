import {LinkButton} from '@/components/ui/link-button'

export default function NotFound() {
  const headingId = 'not-found-heading'

  return (
    <section
      aria-labelledby={headingId}
      className="w-container mx-auto grid min-h-[60svh] place-items-center px-5 py-16 text-center"
    >
      <div className="max-w-2xl">
        <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">404</p>
        <h1 id={headingId} className="font-display mt-4 text-4xl font-bold md:text-6xl">
          Nie znaleziono strony
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-8">
          Ta podstrona nie jest jeszcze dostępna albo zmieniła adres.
        </p>
        <LinkButton href="/" variant="inverse" className="mt-8">
          Wróć na stronę główną
        </LinkButton>
      </div>
    </section>
  )
}
