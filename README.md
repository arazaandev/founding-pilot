# Founding Pilot validation website

A production-oriented validation funnel for a signal-based opportunity-intelligence service serving technology recruitment agencies. It includes a credible landing page, fictional sample opportunity, multi-step qualified application, deterministic scoring, Supabase persistence, protected admin review, privacy copy, and validation documentation.

## Routes

- `/` landing page
- `/apply` four-step application with local progress persistence
- `/sample-opportunity` fictional customer deliverable
- `/thank-you`, `/privacy`
- `/admin`, `/admin/applications`, `/admin/applications/[id]`

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and fill values.
3. Apply `supabase/migrations/001_pilot.sql` in Supabase.
4. Run `npm run dev`.

Without Supabase credentials, submissions are validated and logged in development, allowing the public flow to be tested safely. When `RESEND_API_KEY` and `EMAIL_FROM` are absent, email notifications use the console adapter and never block a successful submission.

## Architecture

Next.js App Router and TypeScript provide UI and server routes. Zod validates submissions server-side. Supabase is called only from the server with the service-role key. The deterministic scorer lives in `lib/scoring/application-score.ts`. The public client never receives the service-role credential.

## Tests

Run `npm test` for scoring tests and `npm run build` for production compilation. Add Supabase test credentials before integration testing. Playwright can be run with `npm run test:e2e` after configuring a test server.

## Deployment

Create a Supabase project, apply the migration, configure Vercel environment variables, then deploy the repository to Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production origin.

## Brand replacement

Update environment values and `lib/config.ts`. The product name, headline, contact details, booking URL, capacity, and accent token are centralized.

## Known limitations / manual launch work

- Resend email delivery and analytics still need production credentials.
- The included local rate limiter should be replaced with a durable provider (for example Vercel KV/Upstash) before a public campaign.
- Privacy copy requires legal review.
- Supabase Auth is recommended as the next replacement for the simple password gate.
- The public sample uses fictional evidence and disabled decision controls by design.
