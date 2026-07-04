# AGENTS.md — Pozytywka project execution rules

## Role

You are working on the Pozytywka website monorepo.

Your goal is not to make a generic art-school website.

Your goal is to make a CMS-ready, visually strong, truthful website for Pracownia Twórcza Pozytywka:

- theatre,
- music,
- dance,
- animations,
- regular classes,
- stage projects,
- youth musicals,
- groups,
- camps,
- contact/sign-up flow.

The project must feel like a living creative stage community, not a generic offer page.

## Non-negotiable priorities

1. Demo must work without a populated CMS.
2. Content architecture must be ready for Sanity.
3. The contact/sign-up form must work.
4. The website must not invent unverifiable facts.
5. Do not copy Facebook/Instagram photos of children into the project unless the client has provided usage rights.
6. Do not collect excessive child data in the form.
7. Do not expose secrets in repo.
8. Do not break existing Next.js App Router structure.
9. Do not start with large architecture refactors.
10. Do not make Sanity a runtime blocker for the demo.

## Current stack

- Monorepo with `apps/web` and `apps/studio`
- `apps/web`: Next.js App Router, React, TypeScript, Tailwind, shadcn-like UI
- `apps/studio`: Sanity Studio
- Package manager: pnpm

## Execution strategy

Build this as:

```txt
CMS-ready frontend + static fallback content + working contact form + Sanity schema
```

Do not build this as:

```txt
CMS-first website that only works after Sanity is populated
```

Frontend must render from static fallback content if:

- Sanity env vars are missing,
- Sanity dataset is empty,
- Studio is not populated yet,
- CMS integration is incomplete.

Demo quality is more important than theoretical CMS purity.

## Required target navigation

Primary navigation:

- `/` — Start
- `/zajecia` — Regular classes
- `/zespoly` — Pozytywka groups
- `/spektakle` — Stage projects, shows, musicals
- `/obozy` — Pozytywne Lato / camps
- `/o-pozytywce` — About Pozytywka, Iwona Pilarz, approach
- `/kontakt` — Contact and sign-up form

Header labels:

- Start
- Zajęcia
- Zespoły
- Spektakle
- Obozy
- O Pozytywce
- Kontakt

Main CTA:

- Zapisz się

Main CTA should point to:

```txt
/kontakt
```

Keep `/wydarzenia` only as a compatibility route if already implemented. Prefer redirecting, aliasing or reusing it as `/spektakle`.

Do not delete existing `/wydarzenia` content if it is still used internally. Prefer compatibility over breaking existing routes.

## Required content model

Implement CMS-ready content types in TypeScript first, then mirror them in Sanity schemas.

Recommended document types:

- `siteSettings`
- `homePage`
- `activity`
- `group`
- `show`
- `camp`
- `person`
- `testimonial`
- `legalPage`

Recommended object types:

- `cta`
- `seo`
- `imageWithAlt`
- `sourceMeta`

Each publishable document should have:

- `title`
- `slug`
- `status`: `draft` | `published` | `archived`
- `seoTitle`
- `seoDescription`
- `sourceStatus`: `client-confirmed` | `public-source` | `draft` | `needs-confirmation`
- `sourceNote`
- `order` or `orderRank`

Use `sourceStatus` internally. It does not need to be rendered publicly.

Do not show technical confirmation statuses to end users.

## Required static fallback

Create or keep a static content layer under:

```txt
apps/web/src/lib/content
```

or:

```txt
apps/web/src/lib/content/seed
```

The frontend must render from static fallback if Sanity env vars are missing or if Sanity returns empty data.

Do not make the demo dependent on manually entering data into Sanity.

Fallback content should be typed.

Avoid putting large untyped content objects directly inside page components.

## Contact form decision

Use:

- `react-hook-form`
- `zod`
- `@hookform/resolvers`
- `resend`
- Next.js Route Handler: `apps/web/src/app/api/contact/route.ts`

Do not use Server Actions for this task.

Reason: Route Handler is easier to isolate, test and keep stable for a public contact endpoint.

Required fields:

- parent/contact person name,
- email,
- phone,
- topic,
- participant age range or age,
- interest category,
- message,
- consent checkbox,
- hidden honeypot field,
- client-side timestamp or simple anti-bot delay field.

Do not collect:

- PESEL,
- school name,
- home address,
- full child data,
- child birth date.

## Contact form topics

Available topic options:

- Zajęcia
- Zespoły
- Spektakle / wydarzenia
- Obozy
- Współpraca
- Inne

## Contact form interest categories

Available interest options:

- Psikusy
- Psotki
- Pozytywki
- Besti
- Teatr
- Musical
- Balet
- Taniec / akrobatyka
- Obóz Pozytywne Lato
- Animacje
- Inne

## Contact form validation and security

Required:

- client-side validation with Zod,
- server-side validation with Zod,
- honeypot,
- message length limit,
- required consent checkbox,
- safe user-facing error messages,
- no stack traces shown to users,
- `replyTo` set to submitter email,
- `from` set only from `CONTACT_EMAIL_FROM`,
- no secrets exposed to client components,
- no `.env` committed.

If Resend env vars are missing locally, the app must not crash.

The route may return a controlled dev-mode response or a safe configuration error.

## Contact form env vars

Add to:

```txt
apps/web/.env.example
```

Required variables:

```env
RESEND_API_KEY=
CONTACT_EMAIL_TO=
CONTACT_EMAIL_FROM=
```

Use the submitter email as `replyTo`, never as `from`.

## Sanity schema requirements

Add schema files under:

```txt
apps/studio/schemaTypes
```

Recommended structure:

```txt
apps/studio/schemaTypes/
  index.ts
  documents/
    siteSettings.ts
    homePage.ts
    activity.ts
    group.ts
    show.ts
    camp.ts
    person.ts
    testimonial.ts
    legalPage.ts
  objects/
    cta.ts
    seo.ts
    imageWithAlt.ts
    sourceMeta.ts
```

Use Sanity validation rules for:

- required fields,
- slugs,
- dates,
- enum values,
- status,
- source status,
- basic SEO fields.

Remember: Sanity Studio validation helps editors, but server/API writes may bypass Studio validation.

Keep runtime validation in the web app for external input.

Do not connect the entire frontend to Sanity as the only data source if that makes the demo fragile.

## Visual/content direction

The website should feel like:

- stage,
- youth energy,
- theatre,
- movement,
- voice,
- music,
- camps,
- local creative community,
- warmth for parents,
- creative discipline,
- courage to perform.

Avoid:

- generic “artistic development” filler,
- “program in preparation” placeholders,
- fake testimonials,
- unverifiable superlatives,
- corporate language,
- overpromising camp details without client confirmation.

Do not write:

- “najlepsza”,
- “największa”,
- “lider rynku”,
- “setki absolwentów”,
- “gwarantowany rozwój”,
- “profesjonalna szkoła musicalowa” unless client confirms this wording.

Use concrete language:

- śpiew,
- emisja głosu,
- teatr,
- ruch sceniczny,
- taniec,
- musical,
- animacje,
- spektakle,
- obozy,
- praca zespołowa,
- występ,
- scena,
- odwaga,
- głos,
- relacje.

## Truthfulness rules

Do not invent:

- prices,
- dates,
- precise locations,
- number of available spots,
- casts,
- partners,
- phone numbers,
- email addresses,
- camp program details,
- transport details,
- insurance details,
- exact age ranges,
- schedules.

If a detail is not confirmed, use safer language or mark it internally as:

```txt
needs-confirmation
```

Never expose uncertain details as facts.

## Required homepage sections

Homepage should include:

1. Hero: theatre/music/dance/camps.
2. Quick links: classes / shows / camps.
3. Creative areas: theatre, music, dance, animations, camps.
4. Regular classes.
5. Groups.
6. Shows and musicals.
7. Camps / Pozytywne Lato.
8. About Pozytywka / Iwona Pilarz.
9. Contact CTA.

Hero direction:

```txt
Pozytywka — teatr, muzyka, taniec i obozy pełne scenicznej energii.
```

Hero description direction:

```txt
Pracownia Twórcza Pozytywka w Olkuszu prowadzi dzieci i młodzież przez śpiew, ruch, teatr i pracę zespołową — od pierwszych zajęć po spektakle, musicale, występy i artystyczne obozy.
```

CTA direction:

- Zapisz się na zajęcia
- Zobacz obozy
- Zobacz spektakle

## Required pages

### `/zajecia`

Show regular class categories and path to contact form.

Suggested categories:

- Śpiew i emisja głosu
- Rytmika
- Pianino
- Teatr
- Musical
- Balet
- Taniec / akrobatyka
- Animacje i warsztaty

Do not invent exact schedules.

### `/zespoly`

Show groups such as vocal-dance groups, theatre groups, musical groups, ballet/dance/acrodance groups when available in source/fallback content.

Possible group names:

- Psikusy
- Psotki
- Pozytywki
- Besti
- Teatr Bez Kurtyny
- Młodzieżowy Teatr Muzyczny Od Początku
- Szkółka Baletowa Pozytywka
- Inside / taniec-akrobatyka

Do not invent detailed group descriptions if source/fallback content does not support them.

### `/spektakle`

Show stage projects and musicals.

Use real titles where publicly visible, but mark uncertain details as draft/source-note internally.

Possible titles:

- Nie zgasnę!
- Karma
- Tam, gdzie na mnie czekasz
- Strych ma wielkie oczy
- Absolutnie wyjątkowa
- Pierwsze koty za płoty

Do not invent dates, cast, ticket prices or venues.

Use label:

```txt
Spektakle i projekty sceniczne
```

Do not use “repertuar” unless there are current, confirmed upcoming dates.

### `/obozy`

This is a primary route. Do not hide camps.

Create a strong landing page for Pozytywne Lato and camp enquiries.

Suggested headline:

```txt
Pozytywne Lato — obozy artystyczno-rekreacyjne Pozytywki
```

Suggested description:

```txt
Obozy Pozytywki łączą wakacyjny wyjazd z teatrem, muzyką, tańcem, integracją i pracą twórczą. To czas prób, choreografii, wspólnych występów, aktywności i budowania relacji.
```

Suggested sections:

- Dla kogo jest obóz
- Co robimy na obozie
- Poprzednie edycje
- Aktualna edycja
- Zapisy i kontakt
- FAQ dla rodziców

Do not publish price, transport, insurance, detailed program or number of spots without client confirmation.

### `/o-pozytywce`

Explain:

- what Pozytywka is,
- stage work,
- regular groups,
- camps,
- creative approach,
- Iwona Pilarz,
- local creative community.

Do not overstate roles not confirmed by the client.

Do not make Mariusz Pilarz the main public figure unless the client confirms that this is intended.

### `/kontakt`

Render:

- working contact/sign-up form,
- basic contact/social area,
- clear CTA,
- safe consent text.

Do not leave public text such as:

```txt
contact data is not published yet
```

or:

```txt
dane kontaktowe nie są jeszcze opublikowane
```

This makes the site look unfinished.

If contact details are not confirmed, use a controlled note for internal data only, not as the main public message.

## Footer requirements

Footer should include:

- short Pozytywka description,
- main navigation links,
- contact link,
- legal links,
- social link if already available in content/config,
- no fake address or fake contact data,
- no “unpublished contact data” placeholder.

## MCP usage requirements

Use available MCP tools to validate implementation, documentation and UI behavior.

### context7

Use context7 to verify current API and recommended patterns for:

- Next.js App Router,
- Next.js Route Handlers,
- React Hook Form,
- Zod,
- Resend,
- Sanity schema.

Do not guess library APIs when implementing form, route handlers or schema.

### next-devtools

Use next-devtools to inspect:

- App Router route structure,
- runtime errors,
- hydration errors,
- `/kontakt`,
- `/api/contact`.

### playwright

Use playwright to test the critical user flow:

- homepage loads,
- primary navigation works,
- `/zajecia` loads,
- `/zespoly` loads,
- `/spektakle` loads,
- `/obozy` loads,
- `/o-pozytywce` loads,
- `/kontakt` loads,
- invalid form submission shows validation errors,
- valid form submission shows success or controlled dev-mode response,
- honeypot submission is rejected or ignored.

Do not mark the contact form as done without a Playwright check.

### chrome-devtools

Use chrome-devtools to check:

- desktop layout,
- mobile layout,
- browser console errors,
- form usability,
- obvious visual regressions.

### node_repl

Use node_repl when useful for checking:

- validation logic,
- data mapping,
- fallback content transforms,
- helper functions.

### shadcn

Use shadcn only if it fits the existing UI approach and speeds up implementation.

Do not install unrelated UI components.

Allowed components if needed:

- Input
- Textarea
- Select
- Button
- Checkbox
- Label
- Alert / Toast

### Optional / restricted MCP tools

Do not rely on these for the demo unless they are authenticated and clearly needed:

- GitHub
- Vercel
- Cloudflare
- Supabase
- Sentry

Do not implement Supabase for the contact form.

Do not configure Sentry unless the project already has a working setup.

Do not assume Vercel deployment access.

Do not assume GitHub MCP can push, open PRs or access private repositories unless authenticated.

## Dependency rules

If new packages are added:

- use pnpm,
- update lockfile intentionally,
- explain why each dependency is needed.

Expected packages for contact form:

- `react-hook-form`
- `zod`
- `@hookform/resolvers`
- `resend`

Do not add large dependencies for simple UI or validation tasks.

## Testing and validation

Run available scripts from `package.json`.

Prefer:

- lint,
- typecheck,
- build.

If a script does not exist, report it instead of inventing a new one unless adding it is explicitly part of the task.

Preferred commands:

```bash
pnpm --filter @pozytywka/web lint
pnpm --filter @pozytywka/web typecheck
pnpm --filter @pozytywka/web build
pnpm --filter @pozytywka/studio lint
pnpm --filter @pozytywka/studio typecheck
pnpm --filter @pozytywka/studio build
```

If package names differ, inspect the workspace and use the correct names.

## Definition of done

Before finishing, verify or report status for:

- dependencies installed with pnpm if new packages were added,
- lockfile changes are intentional and explained,
- `apps/web` lint passes or issues are reported,
- `apps/web` typecheck passes or issues are reported,
- `apps/web` build passes or issues are reported,
- `apps/studio` lint/typecheck/build checked if studio was changed,
- `/kontakt` form has client validation,
- `/kontakt` form has server validation,
- `/api/contact` rejects invalid input,
- submit success/failure states are visible,
- honeypot exists,
- footer no longer says contact data is unpublished,
- main navigation matches target navigation,
- `/obozy` exists and is not hidden,
- no `.env` or secrets committed,
- no unlicensed Facebook/Instagram child photos added,
- no unverifiable claims added as facts.

## Final report

After every major implementation, report in Polish:

1. Changed files.
2. Added routes.
3. How the contact form works.
4. Which MCP tools were used and why.
5. Which commands were run.
6. Results of lint/typecheck/build.
7. What requires client confirmation.
8. What remains as the next step.

Do not finish with description only.

Implementation first, report second.

## Additional MCP servers for this project

### Resend MCP

Use Resend MCP when working on the contact/sign-up form email flow.

Allowed tasks:

- verify sender/domain configuration,
- inspect email sending logs,
- debug failed email requests,
- create or review email templates,
- verify that `from` uses a verified sender,
- verify that submitter email is used only as `replyTo`.

Do not expose Resend API keys in the repo.
Do not use submitter email as `from`.

### Upstash MCP

Use Upstash MCP only if implementing production-grade rate limiting for `/api/contact`.

Allowed tasks:

- create or inspect Redis database for rate limiting,
- verify rate limit keys,
- debug Redis usage,
- inspect usage/throughput.

Prefer readonly credentials when possible.

Do not introduce QStash, Workflow or background jobs for the demo unless explicitly requested.

### Sanity MCP

Use Sanity MCP when validating CMS schema or migrating static fallback content into Sanity.

Allowed tasks:

- inspect schema,
- test GROQ queries,
- verify document structure,
- create seed documents only when safe,
- patch content only with explicit confirmation.

Frontend demo must still work without populated Sanity.

### Vercel MCP

Use Vercel MCP only when deployment work starts.

Allowed tasks:

- inspect deployment logs,
- verify build failures,
- verify environment variables,
- check preview deployment status.

Do not assume Vercel access exists.

### Cloudflare MCP

Use Cloudflare MCP only for domain/DNS/security configuration.

Allowed tasks:

- configure DNS for Vercel,
- configure DNS records required by Resend,
- inspect domain configuration.

Do not use Cloudflare MCP during normal frontend implementation.

### Supabase MCP

Do not use Supabase for the contact form.

The current contact flow is email-only through Resend.

### Sentry MCP

Do not configure Sentry before demo unless explicitly requested.
