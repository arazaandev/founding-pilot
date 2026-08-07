# Lancara Current Status

Last updated: 8 August 2026

## Company

Lancara is being developed as an opportunity-intelligence company for B2B service businesses.

Its long-term product is broader than recruitment. Recruitment is the current validation vertical, not the permanent definition of the company.

Core promise:

> Know which companies to approach, why they may need your services, why the timing matters, and what your team should do next.

Tagline:

> Research less. Approach better.

## Current product stage

Lancara is in founder-led customer discovery and manual workflow validation.

The following public-acquisition work is complete:

- Lancara brand and positioning
- Public website
- Free Opportunity Calibration offer
- Paid Founding Pilot packaging
- Multi-step application form
- Supabase application storage
- Applicant and administrator email notifications
- Privacy notice
- Founder identity and trust content
- Fictional sample opportunity brief
- Production deployment at `https://founding-pilot.vercel.app/`

The technical application flow has been tested:

```text
Application submitted
→ Validation passes
→ Submission stored
→ Thank-you page displayed
→ Applicant confirmation sent
→ Administrator notification sent
```

## What is not yet validated

Commercial demand has not been validated.

Lancara still needs evidence that customers:

- Consider the identified opportunities relevant
- Use the briefs in real sales activity
- Provide recurring feedback
- Save meaningful research time
- Pay for continued delivery
- Can be served with sustainable delivery economics

## Current market question

The original recruitment-agency sourcing test was unreliable.

Five companies were researched, but most did not properly match the intended specialist-agency ICP. Only one company was reasonably aligned, and its score still contained an unresolved discrepancy.

This does not prove that recruitment is unsuitable. It proves that the original category selection and sourcing process were weak.

Lancara is therefore comparing two potential initial verticals:

1. Specialist recruitment agencies
2. Software and IT service firms

Recruitment remains under consideration, but it is no longer the automatic default.

## Current operating model

Lancara currently follows these principles:

- Manual delivery before automation
- Human-reviewed qualification
- Evidence separated from interpretation
- Customer-specific playbooks
- Relevance over lead volume
- No automated outreach
- No LinkedIn scraping
- No candidate personal data
- No opaque autonomous scoring
- No premature CRM or dashboard build

## Current technical direction

The core architecture should remain vertical-neutral:

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

Industry-specific rules should live inside configurable playbooks.

n8n and Codex may be connected during the current phase for sandbox development. The first real workflow should be built only after initial customer interviews clarify the research requirements.

## Current phase name

**Phase 1.5 — Founder Operating System**

The purpose of this phase is to establish a repeatable manual process for:

- Customer discovery
- Customer qualification
- Playbook onboarding
- Account research
- Evidence verification
- Opportunity-brief production
- Customer feedback
- Delivery-economics tracking

Major customer-facing software development should wait until real briefs have been reviewed and a customer has demonstrated willingness to pay.

## Homepage product-evidence walkthrough — local implementation

Implemented and locally verified on 7 August 2026 on branch `website-vertical-neutral-upgrade`:

- A three-stage homepage walkthrough now shows how dated public evidence becomes interpretation and a human-reviewed next step.
- The walkthrough reuses the fictional NusantaraPay/AwanData sample and keeps commercial potential separate from evidence confidence.
- Fictional-data, current-deliverable, and non-autonomous-dashboard disclosures are visible beside the walkthrough.
- Keyboard-operable stage controls, reduced-motion behavior, focused browser coverage, and responsive layouts at 390px, 768px, and 1440px were verified locally.

This is a visual explanation of the current manual deliverable. It does not add live monitoring, a customer dashboard, automation, deployment, or evidence of customer demand.

## Public offer-clarity update — local implementation

Implemented and locally verified on 8 August 2026:

- The homepage now frames Lancara's output as a defensible, human-reviewed account decision: contact, research further, monitor, postpone, or exclude.
- The public brief description now covers ten inspectable elements: account, fit, evidence, interpretation, timing, confidence, uncertainty, stakeholders, action, and preparation.
- The free calibration now distinguishes customer inputs collected after selection, Lancara's delivery, and the decisions the customer can make before any paid commitment.
- The four-week founding pilot retains its existing Rp4 million price, weekly research and brief volumes, feedback cadence, and two-customer capacity limit while stating its repeated-use test and exclusions.
- Current fit, exclusions, staged intake, human review, signals-not-proof language, and site metadata now align with the revised offer.
- The application schema, storage, routes, fictional walkthrough, and commercial terms were not changed.

This update improves the offer hypothesis presented during Gate A. It does not establish demand, recurring usefulness, payment validation, repeatability, savings, buying intent, or guaranteed outcomes. No deployment was performed.
