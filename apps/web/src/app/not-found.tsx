import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="w-container mx-auto grid min-h-[60svh] place-items-center px-5 py-16 text-center">
      <div className="max-w-2xl">
        <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">404</p>
        <h1 className="font-display mt-4 text-4xl font-bold md:text-6xl">Nie znaleziono strony</h1>
        <p className="text-muted-foreground mt-5 text-lg leading-8">
          Ta podstrona nie jest jeszcze dostępna albo zmieniła adres.
        </p>
        <Link
          href="/"
          className="bg-inverse-surface text-inverse-surface-foreground hover:bg-primary hover:text-primary-foreground mt-8 inline-flex min-h-11 items-center justify-center rounded-lg px-6 text-sm font-semibold transition-colors"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </section>
  )
}
