# Website offer-clarity update

Status: Complete
Owner: Daffa Arazaan
Created: 8 August 2026
Last updated: 8 August 2026

## 1. Objective

Align the existing public website with the revised offer in `context/offer.md` so a qualified visitor can understand the account decision Lancara supports, the contents of each opportunity brief, the free calibration exchange, the paid pilot, and current eligibility.

## 2. Validation context

Lancara remains at Gate A (messaging discovery). The revised offer is a hypothesis to test in qualified conversations. This implementation must not imply validated demand, recurring customer use, payment, savings, outcomes, or repeatability.

## 3. Evidence ledger

- Observed: the public site, application flow, fictional walkthrough, routes, and commercial packaging already exist.
- Observed: the revised offer keeps the free calibration, Rp4 million four-week paid pilot, delivery volumes, and two-customer capacity limit.
- Interpreted: the current site under-explains the customer contribution, the ten brief elements, the resulting account decision, and the paid-pilot boundary.
- Assumed: clearer public copy will make discovery conversations and output reviews more specific.
- Test next: whether qualified service firms understand the deliverable, can supply the required inputs, and consider the output useful enough to review and potentially pay for repeatedly.

## 4. Scope

### Included

- Homepage hero support copy and commercial-problem framing
- Ten compact opportunity-brief elements
- Current fit and exclusion criteria
- Free calibration contributions, delivery, decision, and confidence note
- Paid pilot purpose, unchanged terms, capacity, and exclusions
- FAQ and site metadata alignment
- Focused browser tests, responsive verification, and a concise current-status update

### Excluded

- Redesigning the visual system or replacing the existing walkthrough
- Changing application fields, validation, storage, or submission behavior
- Changing commercial terms or validation gates
- Adding automation, dashboards, monitoring, outreach, CRM sync, or contact data
- Deployment, commit, push, or pull request

## 5. Implementation milestones

### Milestone 1 — Public offer clarity

- Keep the existing hero headline and CTAs.
- Make the defensible account decision the central problem framing.
- Replace the six-question list with ten concise brief elements.
- Add compact fit and not-for sections while retaining the two active validation groups.

### Milestone 2 — Commercial stages and FAQ

- Structure the free calibration around what the customer provides, what Lancara delivers, and what the customer can decide.
- Explain the paid pilot as a repeated-use and delivery-sustainability test while preserving price, duration, volume, and capacity.
- Add a progressive boundary disclosure and staged-input FAQ.
- Update metadata without introducing unsupported claims.

### Milestone 3 — Verification and documentation

- Test required copy, terms, CTA destinations, and responsive overflow.
- Run lint, TypeScript, unit tests, production build, and Playwright.
- Visually inspect the homepage at 390px, 768px, and 1440px.
- Record only verified implementation facts in `context/current-status.md`.

## 6. Acceptance criteria

- Visitors can identify the five possible account decisions and the ten brief elements.
- Free and paid stages state the unchanged commercial terms and their distinct purpose.
- Customer inputs are explicitly staged after selection; the initial application remains a fit assessment.
- Human review, uncertainty, and signals-not-proof language remain visible.
- No supported route has horizontal overflow at 390px, 768px, or 1440px.
- Existing application and fictional walkthrough behavior remain intact.

## 7. Rollback

Rollback is limited to the homepage, global styles, root metadata, focused tests, this plan, and the corresponding current-status note. No data migration or external-system rollback is required.

## 8. Verification record

Completed on 8 August 2026:

- ESLint: passed
- TypeScript (`tsc --noEmit`): passed
- Vitest: 9 tests passed
- Next.js production build: passed
- Playwright: 11 tests passed against an isolated fresh server, including all supported routes at 390px, 768px, 1024px, and 1440px
- Visual review: passed at 390px, 768px, and 1440px for the hero, ten-element deliverable, and commercial-stage layouts
- Known pre-existing console item: `/favicon.ico` returns 404

An older developer server was already running on port 3100 and served the pre-update build. It was left untouched. Browser verification used a temporary server on port 3201 instead.
