# AGENTS.md

## Project

Lancara is an opportunity-intelligence company for B2B service businesses.

It helps customers determine:

- Which companies deserve attention
- Why those companies may need the customer's services
- Why the timing may matter
- Which stakeholders should be approached
- What the sales team should do next

Lancara is broader than recruitment. Specialist recruitment agencies and software or IT service firms are current validation candidates, not permanent definitions of the company.

Core promise:

> Know which companies to approach, why they may need your services, why the timing matters, and what your team should do next.

Tagline:

> Research less. Approach better.

## Repository context

Use the repository documentation as the source of truth.

Always read these files before making material product, workflow, architecture, or commercial decisions:

- `context/current-status.md`
- `context/decisions.md`
- `context/next-actions.md`

Read these when the task involves customer research, market selection, experiments, validation, scoring, or product strategy:

- `context/experiments.md`
- `context/research-findings.md`
- `context/ideal-customer-profile.md`
- `context/offer.md`

Read these when the task involves public copy, visual design, messaging, customer communication, or brand decisions:

- `context/brand-voice.md`
- `context/values.md`
- `context/about-me.md`

For substantial implementations, read `PLANS.md` and create or update an execution plan when required by that file.

Do not copy all context documents into implementation files. Reference the relevant source documents and keep durable knowledge in `context/`.

## Current phase

Lancara is in:

> **Phase 1.5 — Founder Operating System**

The current objective is to validate customer problems and establish a repeatable manual opportunity-research workflow.

The public acquisition website, commercial packaging, application storage, and notification workflow exist. Commercial demand, customer usage, repeatability, and delivery economics are not yet validated.

Three discovery calls are a messaging-discovery gate, not demand validation.

## Validation gates

Use these gates when recommending or implementing work:

- **Gate A — Messaging discovery:** qualified customer conversations
- **Gate B — Output validation:** customers review real opportunity briefs
- **Gate C — Payment validation:** at least one customer pays for continued delivery
- **Gate D — Repeatability:** a second payment, renewal, continuation, or referral

Do not justify a major feature using a later gate that has not been reached.

## Product principles

All work must preserve these principles:

- Evidence before claims
- Facts separated from interpretation
- Honest uncertainty
- Human-reviewed qualification
- Relevance over lead volume
- Customer-specific intelligence
- Manual validation before automation
- Transparent and explainable recommendations
- Respect for customer reputation and data
- Vertical-neutral core architecture
- Industry-specific logic implemented through playbooks

A public signal is not proof of buying intent.

Every opportunity should make clear:

- What was observed
- Where and when it was observed
- What Lancara inferred
- What remains unknown
- Why the interpretation may be wrong
- What should be verified next

## Architecture direction

Keep the core system vertical-neutral:

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

Recruitment-specific or IT-services-specific rules belong in configurable playbooks, prompts, schemas, or rules—not in the universal core model.

Important business logic must be version-controlled in the repository rather than existing only inside n8n visual nodes or external prompts.

## Current restrictions

Do not build or introduce the following unless later validation or an explicit user instruction supports them:

- Automated outreach
- Bulk email campaigns
- LinkedIn scraping
- Candidate personal data
- Autonomous opportunity approval
- Opaque scoring
- Contact-data waterfalls
- Credit-based pricing
- A full CRM replacement
- Large customer dashboards
- Blank self-service workflow builders
- Premature multi-industry public interfaces
- Automated applicant scoring
- Large-scale continuous monitoring presented as already operational

Do not claim features, integrations, monitoring, customers, outcomes, or automation that do not currently exist.

## Human-review requirements

Automation may assist with:

- Account intake
- Normalization
- Approved-source collection
- Deduplication
- Evidence extraction
- Summarization
- Draft signal classification
- Research queues
- Brief drafting
- Notifications
- Reporting

A human must remain responsible for:

- Source verification
- Final qualification
- Evidence-confidence assignment
- Commercial interpretation
- Stakeholder priority
- Contact-now recommendations
- Final outreach angles
- Customer-facing approval

## Scoring rules

Keep commercial opportunity potential separate from evidence confidence.

- Commercial scoring should explain why an account may be valuable.
- Evidence confidence should indicate how reliable and complete the supporting evidence is.
- Low-confidence evidence must not result in an unsupported “contact now” recommendation.
- Do not invent numerical precision before the scoring model has been validated with customers.
- Category verification must happen before detailed ICP scoring.

## Working method

Before changing code or documentation:

1. Inspect the relevant repository files.
2. Read the required context documents.
3. Identify the current validation gate.
4. State assumptions and unresolved questions.
5. Prefer the smallest change that produces useful evidence or operational value.
6. Avoid silently expanding scope.

During implementation:

- Prefer small, focused pull requests.
- Preserve existing architecture and naming unless change is justified.
- Follow existing code style, package manager, and project conventions.
- Do not create unnecessary abstractions.
- Keep secrets and credentials out of code, logs, fixtures, and documentation.
- Use test data that contains no real applicant, customer, candidate, or contact information.
- Preserve accessibility, privacy, error handling, and mobile behavior.
- Add human approval points to workflows that affect customer-facing recommendations.
- Track time and variable costs for research-delivery workflows.

## Testing and completion

Do not declare work complete until relevant checks have been run.

Depending on the change, verify:

- Formatting and linting
- Type checks
- Unit tests
- Integration tests
- Browser or end-to-end tests
- Production build
- Database migration behavior
- n8n workflow fixtures and error paths
- Mobile and desktop behavior
- Email or notification failure behavior
- Manual acceptance criteria

Report:

- What changed
- What was tested
- What was not tested
- Known limitations
- Required manual steps
- Any new risks or follow-up work

Never claim that a test, deployment, migration, or production verification succeeded unless it was actually run and observed.

## n8n and MCP rules

n8n may be connected to Cursor during Phase 1.5 in a development sandbox.

Before creating production workflows:

- Separate development and production credentials
- Define input and output schemas
- Define idempotency and duplicate handling
- Add retry and error paths
- Add execution logs
- Add cost tracking
- Add a human-review checkpoint
- Export workflow definitions to the repository
- Version prompts, rules, and schemas
- Prepare test fixtures
- Define rollback to a known workflow version

Build Workflow V0 only after discovery has clarified the research requirements.

Productionize recurring monitoring only after real brief feedback and payment validation justify it.

## Documentation updates

After material work, update the relevant living documents:

- Update `context/current-status.md` when the implemented state changes.
- Update `context/decisions.md` when a durable decision is made.
- Update `context/experiments.md` when a test is started, changed, or completed.
- Update `context/research-findings.md` when durable customer or market learning emerges.
- Update `context/next-actions.md` when priorities change.
- Update the applicable execution plan for substantial work.

Do not rewrite historical outcomes to match a new strategy. Record the new decision and preserve the earlier evidence.

## Conflict handling

When instructions or documents conflict:

1. Follow the user's latest explicit instruction.
2. Follow this `AGENTS.md`.
3. Prefer newer dated decisions and current-status records over older plans.
4. Treat experiments and research findings as evidence, not permanent commands.
5. Surface unresolved conflicts instead of silently choosing a convenient interpretation.

## Communication style

Use Lancara's brand voice for customer-facing work:

- Calm
- Precise
- Evidence-first
- Commercially aware
- Practical
- Honest about uncertainty
- Human-controlled

Avoid hype, fabricated certainty, generic AI language, and unnecessary GTM jargon.

For internal technical communication, be direct and specific. Distinguish:

- Implemented facts
- Assumptions
- Recommendations
- Deferred work
- Unverified claims
