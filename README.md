# Lancara validation website

Lancara is an opportunity-intelligence company for B2B service businesses. This Next.js site supports Gate A messaging discovery with a vertical-neutral homepage, a fictional evidence-first opportunity brief, a four-step Free Opportunity Calibration application, Supabase persistence, neutral email notifications, manual admin review, and privacy copy.

The current validation tracks are specialist recruitment and software/IT services. Other B2B service applications are retained as manually reviewed interest signals; the site does not imply that every industry already has a calibrated playbook.

## Routes

- `/` vertical-neutral acquisition page
- `/sample-opportunity` fictional software/IT-services opportunity brief
- `/apply` four-step application with conditional capabilities, local persistence, consent, honeypot, and UTM capture
- `/thank-you` and `/privacy`
- `/admin`, `/admin/applications`, `/admin/applications/[id]`

## Local setup

1. Install dependencies with `pnpm install`.
2. Copy `.env.example` to `.env.local` and fill the required values.
3. Apply Supabase migrations in order: `001_pilot.sql`, `002_calibration_application.sql`, then `003_vertical_neutral_calibration.sql`.
4. Run `pnpm dev`.

Without Supabase credentials, submissions are server-validated and logged in development. Without `RESEND_API_KEY` and `EMAIL_FROM`, notification delivery uses the console adapter and never turns a successful database write into a failed submission.

## Data compatibility

Migration `003_vertical_neutral_calibration.sql` adds neutral company, validation-track, service-capability, client-profile, and delivery-proof columns. Existing recruitment records are backfilled and the legacy recruitment columns remain in place for recovery. New application writes temporarily populate both neutral and legacy fields because the original non-null database columns are retained.

Admin qualification is manual. The public site and application do not generate numerical qualification or opportunity scores.

## Tests

- `pnpm lint` — linting
- `pnpm test` — schema unit tests across both active tracks and the other-service conditional path
- `pnpm build` — production compilation
- `pnpm test:e2e` — desktop IT-services and mobile specialist-recruitment application paths

Supabase storage, migration backfill, and live email adapters require development-service credentials for integration verification.

## Deployment

Apply the additive Supabase migration before deploying code that writes the neutral fields. Configure Vercel environment variables and set `NEXT_PUBLIC_SITE_URL` to the deployment origin. Inspect a Vercel preview before promoting it to production; the previous deployment remains the rollback point.

## Known limitations and manual launch work

- Lancara is still at Gate A; customer usage, payment, outcomes, continuous monitoring, and repeatability are not validated.
- The opportunity brief uses entirely fictional evidence and disabled review controls.
- Resend and Supabase integration behavior must be checked with development credentials before production promotion.
- The local rate limiter should be replaced with a durable provider before a public campaign.
- Privacy copy requires legal review.
- The simple admin password gate should eventually be replaced with stronger authentication when the validation gate justifies it.
