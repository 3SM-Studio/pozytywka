'use client'

import {Button} from '@/components/ui/button'

type ErrorPageProps = {
  error: Error & {digest?: string}
  reset: () => void
}

export default function ErrorPage({error, reset}: ErrorPageProps) {
  return (
    <section className="w-container mx-auto grid min-h-[60svh] place-items-center px-5 py-16 text-center">
      <div className="max-w-2xl">
        <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">
          Coś poszło nie tak
        </p>
        <h1 className="font-display mt-4 text-4xl font-bold md:text-6xl">
          Nie udało się wyświetlić strony
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-8">
          Spróbuj odświeżyć widok. Szczegóły błędu zostały zachowane w logach aplikacji.
        </p>
        {error.digest ? (
          <p className="text-muted-foreground mt-4 font-mono text-xs">Digest: {error.digest}</p>
        ) : null}
        <Button type="button" className="mt-8" onClick={reset}>
          Spróbuj ponownie
        </Button>
      </div>
    </section>
  )
}
