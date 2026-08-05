# Lancara Website Upgrade Plan

Status: In progress — local implementation verified; preview deployment pending
Owner: Daffa Arazaan
Created: 5 August 2026
Last updated: 5 August 2026

## Cursor implementation directive

Implement this plan in the existing Next.js application. Treat the repository context files and `AGENTS.md` as authoritative. Do not redesign the database, application workflow, or visual identity beyond what this plan requires. Preserve working storage, email, admin-review, privacy, and application behavior.

Before coding, read:

- `AGENTS.md`
- `context/current-status.md`
- `context/decisions.md`
- `context/next-actions.md`
- `context/experiments.md`
- `context/research-findings.md`
- `context/ideal-customer-profile.md`
- `context/offer.md`
- `context/brand-voice.md`
- `context/values.md`
- `context/about-me.md`
- `PLANS.md`

Use a focused branch and small commits. Do not overwrite unrelated working-tree changes. Stop and report any conflict between this plan and a newer dated decision.

## 1. Objective

Upgrade the public site from recruitment-only positioning to Lancara's current vertical-neutral position:

> Opportunity intelligence for B2B service businesses.

The site must make Lancara's market understanding and product thinking concrete enough to support founder-led prospecting at Gate A. A qualified visitor should be able to understand, within a few minutes:

- The commercial problem Lancara addresses
- The customer types currently being researched
- The product workflow and its core primitives
- What an opportunity brief contains
- How Lancara separates evidence, interpretation, uncertainty, and recommended action
- What is manual today and what is not yet operational
- What the free calibration includes
- Why Daffa is a credible person to speak with

This is a credibility and messaging upgrade, not a claim that product-market fit, customer outcomes, continuous monitoring, or software automation have been validated.

## 2. Why now

### Verified facts

- The deployed site at `https://founding-pilot.vercel.app/` still identifies the product as "Lancara for Recruitment."
- The homepage, sample brief, application, emails, privacy notice, admin screens, metadata, and configuration contain recruitment-only terminology.
- Lancara is currently comparing specialist recruitment with software and IT services rather than committing to recruitment as the permanent market.
- Lancara is at Gate A: messaging discovery. Customer usage, payment, repeatability, delivery economics, and product outcomes are not validated.
- The current site already has a working application flow, Supabase storage, notifications, privacy notice, admin review, and a fictional sample.

### Current credibility gap

The site has a strong visual foundation and a clear offer, but it makes the company appear narrower and more mature in some areas than the current strategy supports:

- Recruitment-specific language conflicts with the vertical-neutral company decision.
- The site explains a hiring-signal playbook more clearly than it explains Lancara's broader product model.
- A precise `84/100` score creates unvalidated numerical confidence.
- The `Contact now` state can imply stronger buying intent than public evidence supports.
- The website demonstrates one signal pattern but not the full evidence-to-action workflow.
- The application cannot credibly accept software/IT services firms without presenting recruitment-specific questions.
- The homepage is long, but the extra length is used mostly for offer repetition rather than additional product proof.

## 3. Benchmark interpretation

Bitscale is a useful benchmark for communication density, not for claims Lancara can copy.

### Patterns worth adapting

- Name the product primitives early instead of relying on a broad category statement.
- Show the product or deliverable in context near the hero.
- Repeat a simple product model across the page.
- Organize use cases as recognizable playbooks.
- Use clear CTA hierarchy.
- Make each section answer a distinct buyer question.
- Build credibility through specific workflows, artifacts, and evidence.

### Patterns Lancara must not copy yet

- Customer logos, testimonials, case-study outcomes, or usage counts without real permission and evidence
- Claims of live or continuous signal monitoring
- Claims of autonomous AI agents, automated outreach, CRM sync, or broad integrations
- Data-source counts, coverage percentages, time savings, meetings, or pipeline metrics without observed results
- Enterprise security badges or compliance claims that do not exist
- Language implying public signals prove buying intent

Lancara's current substitute for customer proof should be demonstrable product judgment: a strong sample brief, transparent methodology, visible uncertainty, clear human-review points, honest scope, and founder identity.

## 4. Current validation gate

This work is supported by Gate A — messaging discovery.

The website's job is to help qualified prospects understand the problem and agree to a discovery or calibration conversation. It must not be presented as evidence of demand or as a finished platform.

Primary success signal:

- Qualified recruitment or software/IT services leaders understand Lancara well enough to accept a conversation or submit a calibration application.

Secondary signals:

- Visitors can accurately describe Lancara's value without being prompted.
- Prospects recognize their current research and account-selection problem in the copy.
- Prospects open the sample brief or application from founder-led outreach.
- Application submissions retain their source through existing UTM capture.

Do not use raw traffic, page length, or visual praise as validation.

## 5. Scope

### Included

- Reposition the public brand from `Lancara for Recruitment` to `Lancara`.
- Rewrite the homepage around opportunity intelligence for B2B service businesses.
- Explain the vertical-neutral product workflow using concrete product primitives.
- Present specialist recruitment and software/IT services as current validation tracks, not permanent product boundaries.
- Replace the recruitment-only fictional sample with a vertical-neutral brief presentation using a software/IT services customer context.
- Remove unsupported numerical scoring from public surfaces.
- Keep commercial opportunity potential separate from evidence confidence.
- Generalize the application form, validation schema, database writes, emails, privacy copy, thank-you copy, and admin labels.
- Preserve backward compatibility with existing recruitment applications.
- Improve information hierarchy, navigation, responsive behavior, accessibility, metadata, and Open Graph content.
- Add or update unit and end-to-end tests for both active validation tracks.
- Update repository documentation only after the implementation is verified.

### Excluded

- A customer dashboard or logged-in product
- Multiple industry-specific public applications or microsites
- Automated outreach or message sending
- LinkedIn scraping or candidate personal data
- CRM integrations, contact-data waterfalls, workflow builders, or live monitoring
- Customer logos, testimonials, fabricated case studies, or performance claims
- A pricing calculator or self-service checkout
- Blog, resource center, or large SEO program
- A visual identity replacement
- New analytics vendors unless separately approved
- Changes to the Rp4 million founding-pilot test
- Dropping legacy database columns

## 6. Messaging architecture

### Positioning

Brand name:

> Lancara

Category:

> Opportunity intelligence for B2B service businesses

Core promise:

> Know which companies to approach, why they may need your services, why the timing matters, and what your team should do next.

Tagline:

> Research less. Approach better.

Primary audience for the current page:

- Founders, managing directors, business-development leaders, and commercial leaders at specialist recruitment agencies and software/IT services firms

### Recommended hero copy

Eyebrow:

> Opportunity intelligence for B2B service businesses

Headline:

> Know which companies deserve your attention — and why now.

Supporting copy:

> Lancara turns public evidence, account signals, and your commercial strengths into human-reviewed opportunity briefs. Each brief explains why an account may fit, what may have changed, who matters, what remains uncertain, and what to verify next.

Primary CTA:

> Request a free opportunity calibration

Secondary CTA:

> Explore a sample brief

Trust line:

> Manual research during validation · Human reviewed · Evidence linked · No automated outreach

### Copy rules

Use:

- Opportunity, evidence, account, signal, qualification, playbook, stakeholder, recommended action
- `May`, `suggests`, `supports the hypothesis`, `should be verified`
- Concrete descriptions of the current manual service
- Short labels that help a buyer scan the workflow

Avoid:

- Lead generation platform
- Buyer intent as a confirmed fact
- Agentic, autonomous, orchestration, or AI workforce language
- `Contact now` unless the brief explicitly shows the human approval and evidence threshold behind it
- `Monitoring` when the current activity is scheduled or recurring manual research
- Precise scores such as `84/100`
- Statements that imply Lancara already serves multiple industries at scale

## 7. Proposed site architecture

The homepage should be shorter than the current page and denser in useful explanation. Every section must answer one buyer question.

### 7.1 Navigation

Desktop links:

- Product
- How it works
- Sample brief
- Calibration

CTA:

- Request calibration

Mobile requirements:

- One visible menu control
- Keyboard-operable menu
- Escape and route selection close the menu
- No duplicated visible desktop links or clipped CTA

### 7.2 Hero — What is Lancara?

Use the recommended hero copy.

The hero visual should be a credible opportunity-brief preview, not a generic dashboard. It must visibly contain:

- Opportunity pattern
- Commercial relevance
- Evidence confidence
- One dated evidence item
- One explicit unknown
- Recommended verification step

Do not show a numerical opportunity score. Use a qualitative commercial assessment with its reasons visible.

### 7.3 Problem — Why ordinary prospecting is insufficient

Heading:

> Prospecting is rarely a list problem. It is a judgment problem.

Core copy:

> Service businesses can find companies. The difficult part is deciding which accounts fit, why the timing may matter, and how to begin a credible conversation without inventing intent.

Show three common failure modes:

- Broad account lists with weak fit
- Isolated signals without commercial context
- Generic outreach without a reason for the conversation

### 7.4 Product model — How Lancara turns evidence into direction

Display the existing vertical-neutral architecture as a scannable workflow:

```text
Customer ICP
→ Account universe
→ Evidence
→ Signals
→ Opportunity pattern
→ Qualification
→ Stakeholders
→ Recommended action
→ Feedback
```

Each stage needs a one-line description. The interface should show that evidence remains linked to the recommendation and that human review occurs before customer-facing approval.

### 7.5 Deliverable — What an opportunity brief answers

Use six consistent questions:

1. What was observed?
2. Why might this account fit the customer's capabilities?
3. Why might the timing matter?
4. Who should be understood or approached?
5. What remains unknown or may be wrong?
6. What should the team verify or do next?

This section should visually reuse the same brief component shown in the hero and on the sample page.

### 7.6 Current validation tracks — Who is this being tested with?

Label the section:

> Current research tracks

Use two simple, non-interactive cards:

1. Specialist recruitment
   - Example evidence: hiring patterns, recurring vacancies, expansion, capability match
   - Customer question: which employers may need specialist recruitment support?

2. Software and IT services
   - Example evidence: transformation initiatives, new leadership, expansion, technology changes, delivery requirements, capability match
   - Customer question: which companies may have a timely need for the firm's services?

Add an explicit note:

> These are current validation tracks, not permanent limits on Lancara's product.

Do not build track tabs, separate microsites, or an industry selector on the homepage in this phase.

### 7.7 Sample brief — Show the judgment

Use a fictional software/IT services opportunity to demonstrate that Lancara is broader than recruitment. Keep all company and source data fictional and clearly labelled.

Recommended scenario:

- Lancara customer: a fictional Indonesian data and cloud consultancy
- Target account: `NusantaraPay` or another clearly fictional Indonesian company
- Opportunity pattern: `Data-platform modernization window`
- Observed evidence: dated technology hiring, a leadership change, and a public expansion announcement
- Customer match: relevant delivery capability and a comparable fictional case study
- Alternative explanation: the work may be handled internally or by an incumbent partner
- Evidence confidence: `Moderate` or `High`, with the supporting reasons
- Commercial potential: qualitative, explained separately from confidence
- Recommended next step: verify ownership, priority, and partner status before outreach

The sample page must contain:

- Fictional demonstration label above the fold
- Target account summary
- Customer-specific fit
- Evidence timeline with source type, observation date, and last-checked date
- Facts separated from interpretation
- Opportunity pattern
- Commercial potential with explanation
- Evidence confidence with explanation
- Stakeholder roles and conversation objectives
- Unknowns and disqualifying possibilities
- What to verify next
- Careful conversation angle
- Disabled review controls: approve, edit, reject, postpone

Remove:

- `84/100`
- Numeric sub-scores
- Unsupported `Contact now`
- Recruitment-only vacancy tables and agency proof labels

### 7.8 Method and human control — Why should the visitor trust it?

Show the evidence standard in four columns:

- Observed: what the source actually says
- Interpreted: what Lancara thinks it may mean
- Unknown: what cannot be concluded
- Verify next: the next question or research step

State that public signals are not proof of buying intent and final qualification is human reviewed.

### 7.9 Process — What happens in the first five business days?

Preserve the current offer mechanics, but generalize the wording:

- Day 1: configure customer profile, capabilities, proof, markets, commercial constraints, and exclusions
- Days 2–4: build the account universe, collect evidence, qualify patterns, and draft three briefs
- Day 5: review, approve, edit, reject, or postpone each brief
- After a useful calibration: optionally offer the paid founding pilot

Make clear that the five-day clock starts after complete onboarding inputs.

### 7.10 Offer — What is being offered now?

Keep the two stages and current numbers:

Free Opportunity Calibration:

- One 30-minute configuration session
- Three manually researched, human-reviewed opportunity briefs
- One 20-minute review session
- Delivery within five business days after complete inputs
- No payment

Four-Week Founding Pilot:

- Rp4 million paid upfront
- One configured playbook
- 10–15 accounts researched weekly
- 5–8 complete human-reviewed briefs weekly
- Weekly calibration
- Up to two participating customer team members
- Maximum two simultaneous paid customers

Do not call the free stage a pilot.

### 7.11 Founder credibility

Heading:

> Built by a founder who does the research and reviews the recommendation.

Use a concise version of `context/about-me.md`. Include:

- Daffa's name
- Economics, data analytics, business research, and AI-enabled workflow background
- Direct responsibility for discovery, research, qualification, workflow design, and quality review
- LinkedIn and email

Do not inflate team size or imply external analysts or customers.

### 7.12 FAQ and final CTA

FAQ should answer:

- Is Lancara a contact database?
- Is this software or a managed service today?
- Which companies are eligible for the current calibration?
- Which sources are used?
- Does Lancara continuously monitor accounts?
- Does Lancara scrape LinkedIn or send outreach?
- Is a signal proof that a company will buy?
- What is free and what becomes paid?
- What happens after an application?

Final CTA:

> See whether Lancara can understand your market.

Supporting line:

> Configure one playbook, receive three human-reviewed briefs, and decide whether the research is useful before discussing a paid pilot.

## 8. Visual direction

Preserve the current cream, deep navy, lime, and muted green palette. Preserve the calm editorial character. This is an evolution, not a rebrand.

### Required changes

- Replace decorative dashboard scoring with evidence-bearing brief modules.
- Use a consistent component language for evidence, inference, confidence, unknowns, and actions.
- Increase contrast between marketing copy and product evidence.
- Reduce oversized empty vertical space and repeated offer messaging.
- Keep no more than one major message per section.
- Use restrained animation only for entry and state explanation.
- Respect `prefers-reduced-motion`.
- Make tables horizontally usable on small screens.
- Prevent hero art, navigation, and CTA clipping at common breakpoints.

### Do not do

- Do not imitate Bitscale's artwork, wording, layout, or brand assets.
- Do not add generic AI gradients, animated particles, stock photos, fake browser chrome, or decorative charts without meaning.
- Do not replace the existing brand with a SaaS-blue template.
- Do not use logos as social proof without permission.

## 9. Application and data design

The public positioning and application must agree. A visitor must never reach a recruitment-only form after reading a B2B-services homepage.

### 9.1 Public form model

Replace public form fields as follows:

| Current public field | New public field |
|---|---|
| Agency name | Company name |
| Agency website | Company website |
| Recruitment specialization | Current validation track |
| Typical employer profile | Typical client profile |
| Credible roles | Services and proof the company can credibly deliver |
| Employer client-acquisition methods | Company client-acquisition methods |

Add `validationTrack` with values:

- `specialist_recruitment`
- `software_it_services`
- `other_b2b_service`

`other_b2b_service` is an interest signal and must be manually reviewed; the site must not imply that a calibrated playbook already exists for every B2B industry.

Conditionally display capability options:

Specialist recruitment:

- Technology and digital
- Engineering and manufacturing
- Financial services
- Healthcare and life sciences
- Executive search
- Other specialist recruitment

Software and IT services:

- Custom software development
- Data and AI
- Cloud and DevOps
- Cybersecurity
- Systems integration
- Managed IT services
- Other software or IT service

Other B2B service:

- Require a concise free-text service description

Keep the four-step flow, local persistence, honeypot, consent, UTM attribution, duplicate handling, and current readiness questions.

### 9.2 Additive database migration

Create `supabase/migrations/003_vertical_neutral_calibration.sql`.

Add nullable or defaulted columns:

- `company_name text`
- `company_website text`
- `validation_track text`
- `service_capabilities jsonb not null default '[]'::jsonb`
- `typical_client_profile text`
- `credible_delivery_proof text`

Add a check constraint for the three known `validation_track` values, allowing `null` for untouched legacy records if required during deployment.

Backfill existing records:

- `company_name = agency_name`
- `company_website = agency_website`
- `validation_track = 'specialist_recruitment'`
- `service_capabilities = specializations`
- `typical_client_profile = typical_employer_profile`
- `credible_delivery_proof = credible_roles`

Do not drop or rename the existing recruitment columns in this release. Keep them for rollback and historical compatibility. New code should write the neutral columns and may also dual-write legacy fields temporarily if the existing deployment sequence requires it.

### 9.3 Internal surfaces

Update:

- Application API mapping
- Zod schema and unit tests
- Applicant confirmation email
- Administrator notification email
- Application list and detail labels
- Manual review checklist for both active tracks
- Thank-you page
- Privacy notice

Admin qualification must remain manual. Do not reintroduce qualification scores.

## 10. Technical implementation map

| File or area | Required change |
|---|---|
| `lib/config.ts` | Replace recruitment brand strings with neutral Lancara configuration. |
| `app/layout.tsx` | Update title, description, Open Graph, Twitter metadata, and image alt text. |
| `public/og.png` | Replace recruitment-only Open Graph creative with neutral positioning. |
| `components/site-shell.tsx` | Update brand, navigation, CTA, footer, and mobile menu behavior. |
| `app/page.tsx` | Rebuild content order using the architecture in section 7. |
| `app/globals.css` | Extend the existing design system; add brief modules, workflow, track cards, responsive and reduced-motion rules. |
| `components/reveal.tsx` | Verify reduced-motion behavior and avoid hiding content without JavaScript. |
| `app/sample-opportunity/page.tsx` | Replace the recruitment sample with the evidence-first software/IT services scenario. |
| `app/apply/page.tsx` | Generalize labels, add validation track, conditionally render capabilities, and preserve the four-step flow. |
| `lib/calibration-schema.ts` | Validate the neutral payload and conditional requirements. |
| `app/api/applications/route.ts` | Map neutral fields, preserve duplicate handling, and write to the additive schema. |
| `lib/email.ts` | Remove Hiring Demand and agency-only wording. |
| `app/thank-you/page.tsx` | Use neutral playbook and company wording. |
| `app/privacy/page.tsx` | Describe company, validation-track, service-capability, and client-profile data. |
| `app/admin/applications/page.tsx` | Show company, validation track, capabilities, readiness, and status. |
| `app/admin/applications/[id]/page.tsx` | Generalize review checklist and preserve legacy rendering. |
| `supabase/migrations/003_vertical_neutral_calibration.sql` | Add and backfill neutral application columns. |
| `lib/calibration-schema.test.ts` | Test both tracks, other-service conditional input, consent, spam, and invalid track values. |
| `tests/e2e/application.spec.ts` | Test recruitment and IT-services application paths on desktop and mobile. |
| `README.md` | Update product description, routes, schema/migration order, testing, and known limitations. |

Create small data arrays or focused components only when they remove repetition. Do not introduce a CMS, state library, component framework, or generic page-builder abstraction.

## 11. Implementation milestones

### Milestone 1 — Neutral foundation

Tasks:

- Update brand configuration and metadata.
- Define the final section copy as local typed constants or page data.
- Add the shared visual language for evidence, interpretation, uncertainty, confidence, and action.
- Update navigation and footer.

Expected output:

- All global public chrome says `Lancara`, not `Lancara for Recruitment`.
- Metadata accurately describes a manual, human-reviewed validation-stage service.

Validation:

- Search the repository for public recruitment-only brand strings.
- Verify header and footer at desktop and mobile widths.
- Verify metadata and Open Graph image locally.

### Milestone 2 — Homepage credibility upgrade

Tasks:

- Implement sections 7.2 through 7.12.
- Reuse a coherent opportunity-brief preview.
- Add the two current validation-track cards.
- Remove the numeric score and `Contact now` claim.

Expected output:

- The homepage communicates the problem, product workflow, deliverable, current tracks, method, process, offer, founder, and next step.

Validation:

- A reader can answer the six comprehension questions in section 1 from the page alone.
- No section implies product automation or customer results that do not exist.
- All in-page navigation anchors resolve.

### Milestone 3 — Sample brief rebuild

Tasks:

- Implement the fictional data/cloud consultancy scenario.
- Separate observed facts, interpretation, commercial potential, evidence confidence, and unknowns.
- Add evidence dates, source types, freshness, stakeholders, verification, and review controls.

Expected output:

- The sample functions as the site's primary product proof.

Validation:

- Every recommendation can be traced to displayed fictional evidence.
- Every inference is labelled.
- At least one alternative explanation and one verification step are visible.
- No numerical precision suggests a validated scoring model.

### Milestone 4 — Application and compatibility

Tasks:

- Add the neutral schema migration.
- Generalize the public form, schema, API, emails, privacy copy, thank-you page, and admin views.
- Preserve legacy applications.

Expected output:

- Both active validation tracks can complete the application without irrelevant questions.
- Existing recruitment records continue to render.

Validation:

- Run migration in a development Supabase project or transaction-safe local equivalent.
- Confirm backfill values.
- Submit one fictional application per track.
- Confirm storage, redirect, applicant email adapter, admin notification adapter, admin list, and detail view.
- Confirm duplicate, rate-limit, validation, and email-failure behavior remain unchanged.

### Milestone 5 — QA, launch, and documentation

Tasks:

- Run all automated checks.
- Perform responsive, accessibility, and production-build review.
- Deploy a preview and inspect every public route.
- Update living documentation after verification.

Expected output:

- A production-ready vertical-neutral acquisition site with a compatible application funnel.

Validation:

- Completion criteria in section 17 are satisfied.

## 12. Data and privacy considerations

- Collect only information needed to assess fit and configure a possible calibration.
- Do not request CRM exports, client lists, candidate information, confidential account information, or contact databases at application stage.
- Keep consent explicit and unbundled.
- Preserve the honeypot and server-side validation.
- Do not expose Supabase service credentials to the client.
- Do not send sensitive free-text answers to analytics tools.
- Ensure the privacy notice matches the new neutral field names and actual processors.
- Keep applications manually reviewed.
- Do not add personal stakeholder data to the fictional sample.

## 13. Failure handling and rollback

### Application compatibility

- Use an additive migration.
- Keep legacy columns and existing application records.
- Deploy database changes before code that requires the new columns.
- If new writes fail, roll back the application deployment and continue using the previous code against preserved legacy columns.

### Public site

- Use a Vercel preview before production promotion.
- Keep the last known-good production deployment available for instant rollback.
- Do not remove the current Open Graph asset until the replacement is verified.
- Do not change environment-variable names in this release.

### Email

- Preserve non-blocking email behavior.
- A successful database write must not be reported as failed solely because notification delivery failed.
- Verify applicant and administrator templates with escaped fictional data.

## 14. Testing and validation

Run and observe:

```powershell
pnpm lint
pnpm test
pnpm build
pnpm test:e2e
```

If no configured Playwright server is available, configure the existing test setup rather than skipping the tests silently.

### Browser acceptance matrix

Review at minimum:

- Desktop: 1440 × 900
- Small laptop: 1024 × 768
- Tablet: 768 × 1024
- Mobile: 390 × 844

Routes:

- `/`
- `/sample-opportunity`
- `/apply`
- `/thank-you`
- `/privacy`
- `/admin/applications`
- One legacy and one new application detail

### Accessibility

- One `h1` per page and logical heading order
- Visible keyboard focus
- Keyboard-operable navigation, details, and form controls
- Accessible form labels, errors, and progress state
- Color contrast meeting WCAG AA for text and controls
- No essential meaning conveyed only by color
- Reduced-motion mode leaves all content visible
- Disabled sample controls are clearly marked as demonstrations

### Content verification

Search for and manually inspect remaining occurrences of:

- `Lancara for Recruitment`
- `agency`
- `recruitment agencies`
- `Hiring Demand Playbook`
- `84/100`
- `Contact now`
- `continuous monitoring`

Recruitment terms may remain only where explicitly describing the specialist-recruitment validation track or historical/legacy data.

### Performance

- No avoidable layout shift from fonts or hero content
- No horizontal overflow at the acceptance widths
- Images have dimensions, useful alt text, and appropriate optimization
- Keep client-side JavaScript small; most homepage content should remain server-rendered
- Do not add autoplay video or large background media

## 15. Observability and learning

Do not add a new analytics platform in this upgrade unless separately approved.

Preserve:

- Existing UTM capture on submitted applications
- Application timestamps and statuses
- Validation-track selection
- Manual notes and validation-stage tracking

For the first outreach wave, record outside the website:

- Target vertical
- Landing-page link and UTM source/campaign
- Reply or application
- Qualified conversation booked
- Prospect's description of Lancara in their own words
- Confusing or untrusted claims
- Sample-brief reaction
- Relevance to the prospect's acquisition workflow

Use Gate A synthesis to revise wording. Do not infer message success from page visits alone.

## 16. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---:|---:|---|
| Broad positioning becomes vague | Medium | High | Lead with a concrete product workflow and opportunity-brief anatomy. |
| Two validation tracks look like two mature products | Medium | High | Label them as current research tracks; avoid tabs and separate microsites. |
| Credibility upgrade accidentally overclaims maturity | Medium | High | Use the claims checklist and require evidence for every proof statement. |
| Generic form loses vertical-specific qualification | Medium | Medium | Use conditional capability choices and a validation-track field. |
| Database change breaks existing applications | Low | High | Additive migration, backfill, legacy columns retained, preview verification. |
| Visual ambition delays outreach | Medium | High | Reuse the existing design system and prioritize messaging and sample proof. |
| The IT-services sample alienates recruitment prospects | Medium | Medium | Keep recruitment visible as a current track and explain the vertical-neutral workflow. |
| Unsupported scoring remains in overlooked routes or assets | Medium | Medium | Repository-wide content search and manual route audit. |
| Founder proof feels thin without customers | High | Medium | Emphasize product artifact, method transparency, honest scope, and direct founder involvement. |

## 17. Completion criteria

The upgrade is complete only when:

- The public brand is `Lancara`, not `Lancara for Recruitment`.
- The homepage explains the vertical-neutral opportunity-intelligence workflow.
- Specialist recruitment and software/IT services are clearly presented as current validation tracks.
- No public surface uses an unsupported numerical opportunity score.
- Commercial potential and evidence confidence are visibly separate.
- The sample brief separates facts, interpretation, unknowns, and verification.
- The site does not claim continuous monitoring, automated outreach, CRM integration, customers, outcomes, or unimplemented automation.
- The application works for recruitment and software/IT services firms.
- Existing recruitment applications remain readable after the additive migration.
- Applicant and administrator notifications use neutral wording.
- Privacy copy matches the actual neutral data collected.
- Desktop and mobile navigation, application, and sample routes have been manually verified.
- Lint, unit tests, production build, and end-to-end tests pass and their results are recorded.
- A Vercel preview has been inspected before production promotion.
- `context/current-status.md` is updated after deployment.
- `context/next-actions.md` records any remaining website follow-up without displacing founder-led outreach.
- Any durable messaging or data-model decision is added to `context/decisions.md`.

## 18. Progress log

- 5 August 2026 — Draft created from the live Lancara site, the live Bitscale benchmark, and current repository strategy.

- 5 August 2026 — Implemented the vertical-neutral public site, fictional software/IT-services brief, neutral four-step application, additive migration, dual-write API compatibility, neutral emails, privacy and admin surfaces, responsive navigation, metadata, and Open Graph creative on branch `website-vertical-neutral-upgrade`.
- 5 August 2026 — Verified lint, nine schema unit tests, production build, both active-track application journeys, the five public routes at 1440×900, 1024×768, 768×1024, and 390×844, mobile keyboard navigation, disabled sample review controls, reduced motion, and horizontal overflow. A hero-decoration overflow defect found during QA was fixed.
- 5 August 2026 — Development Supabase migration/backfill, live storage/email adapters, authenticated legacy/new admin-detail records, and Vercel preview inspection remain pending because this workspace has no confirmed separate development database or deployment connection.

## 19. Decision log

- Decision: Keep one vertical-neutral site rather than separate recruitment and IT-services websites.
  - Reason: The company is broader than recruitment, while the initial vertical is not yet selected.
  - Alternative rejected: Two public microsites, because they imply more validated industry depth and create avoidable maintenance.

- Decision: Use the sample brief and method as the primary credibility mechanism.
  - Reason: Lancara does not yet have customer outcomes or permissioned proof.
  - Alternative rejected: Placeholder logos, speculative metrics, or aspirational platform claims.

- Decision: Remove numeric scoring from public examples.
  - Reason: The scoring model is not customer-validated and creates false precision.
  - Alternative rejected: Keeping `84/100` with a disclaimer, because the precision itself remains unsupported.

- Decision: Use an additive application-data migration.
  - Reason: The live funnel already stores recruitment applications and should remain recoverable.
  - Alternative rejected: Renaming or dropping legacy columns in the same release.

## 20. Follow-up work intentionally deferred

- Revisit the primary vertical and public examples after comparable Gate A interviews.
- Add real anonymized or permissioned proof only after Gate B produces reviewed briefs.
- Add customer outcomes only after they are measured and approved.
- Consider separate playbook pages only after one vertical is selected and its language is validated.
- Consider recurring monitoring or product UI only after payment and repeatability justify it.
- Consider a custom domain migration separately from this content and funnel upgrade.
